'use client';

import { useState, useEffect } from 'react';
import AppLayout from '@/components/AppLayout';
import Link from 'next/link';

export default function InventoryPage() {
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  // State Modal Edit
  const [editingItem, setEditingItem] = useState(null);
  const [editFormData, setEditFormData] = useState({ name: '', category: '', price: '', duration_minutes: 60, stock: 100 });
  const [savingEdit, setSavingEdit] = useState(false);

  // State Modal Delete
  const [deletingItem, setDeletingItem] = useState(null);
  const [deletingLoading, setDeletingLoading] = useState(false);

  // Alert State
  const [alert, setAlert] = useState({ show: false, message: '', type: 'success' });

  const showAlert = (message, type = 'success') => {
    setAlert({ show: true, message, type });
    setTimeout(() => {
      setAlert({ show: false, message: '', type: 'success' });
    }, 3000);
  };

  const fetchServices = async () => {
    try {
      const res = await fetch('/api/products');
      const json = await res.json();
      if (json.success && json.data) {
        setServices(json.data);
      }
    } catch (err) {
      console.warn('Gagal memuat data dari database Neon:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // Filter & Search
  const filtered = services.filter((s) => {
    const term = searchTerm.toLowerCase();
    const matchTerm = (
      (s.name && s.name.toLowerCase().includes(term)) ||
      (s.category && s.category.toLowerCase().includes(term)) ||
      (s.sku && s.sku.toLowerCase().includes(term))
    );
    const matchCategory = selectedCategory === 'All' || s.category === selectedCategory;
    return matchTerm && matchCategory;
  });

  // Action: Open Edit Modal
  const handleOpenEdit = (item) => {
    setEditingItem(item);
    setEditFormData({
      id: item.id,
      sku: item.sku,
      name: item.name,
      category: item.category,
      price: item.price,
      duration_minutes: item.duration_minutes || 60,
      stock: item.stock || 100,
    });
  };

  // Action: Save Edit
  const handleSaveEdit = async (e) => {
    e.preventDefault();
    setSavingEdit(true);
    try {
      const res = await fetch('/api/products', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editFormData),
      });
      const data = await res.json();
      if (res.ok) {
        showAlert('Layanan berhasil diperbarui!', 'success');
        setEditingItem(null);
        fetchServices();
      } else {
        showAlert(data.message || 'Gagal memperbarui', 'danger');
      }
    } catch (err) {
      showAlert('Kesalahan koneksi saat edit', 'danger');
    } finally {
      setSavingEdit(false);
    }
  };

  // Action: Delete Item
  const handleConfirmDelete = async () => {
    if (!deletingItem) return;
    setDeletingLoading(true);
    try {
      const res = await fetch(`/api/products?id=${deletingItem.id || ''}&sku=${deletingItem.sku || ''}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (res.ok) {
        showAlert(`Layanan "${deletingItem.name}" berhasil dihapus!`, 'success');
        setDeletingItem(null);
        fetchServices();
      } else {
        showAlert(data.message || 'Gagal menghapus', 'danger');
      }
    } catch (err) {
      showAlert('Kesalahan koneksi saat menghapus', 'danger');
    } finally {
      setDeletingLoading(false);
    }
  };

  // Action: Export to CSV (Excel)
  const handleExportExcel = () => {
    if (filtered.length === 0) return;
    const headers = ['SKU,Service Name,Category,Price,Duration,Clients\n'];
    const rows = filtered.map(s => 
      `"${s.sku}","${s.name}","${s.category}",${s.price},"${s.duration_minutes || 60} mins",${s.clients || s.stock || 0}`
    );
    const blob = new Blob([headers.concat(rows.join('\n'))], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `beauty_nails_services_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showAlert('Data layanan berhasil diekspor ke Excel (CSV)!', 'success');
  };

  // Action: Print / PDF
  const handlePrintPDF = () => {
    window.print();
  };

  return (
    <AppLayout>
      {/* Title & Add Button */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h1 className="fs-3 mb-1 fw-bold text-dark">Services</h1>
              <p className="text-muted small mb-0">Manage your nail services</p>
            </div>
            <div>
              <Link href="/create-product" className="btn btn-primary px-3 py-2 fw-semibold">
                Add Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Alert Notification */}
      {alert.show && (
        <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
          {alert.message}
        </div>
      )}

      {/* Search and Action Bar */}
      <div className="row mb-3">
        <div className="col-12">
          <div className="d-flex gap-2 flex-wrap justify-content-between align-items-center">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Search services..." 
              style={{ maxWidth: '280px' }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="d-flex gap-2 align-items-center">
              {/* Category Filter Dropdown */}
              <select 
                className="form-select form-select-sm" 
                style={{ width: 'auto' }}
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="All">Filter: Semua</option>
                <option value="Basic">Basic</option>
                <option value="Manicure">Manicure</option>
                <option value="Pedicure">Pedicure</option>
                <option value="Nail Art">Nail Art</option>
                <option value="Extension">Extension</option>
              </select>

              {/* Action Button: Excel */}
              <button 
                onClick={handleExportExcel}
                className="btn btn-outline-secondary btn-sm" 
                type="button"
                title="Ekspor ke Excel / CSV"
              >
                <i className="ti ti-file-excel me-1 text-success"></i> Excel
              </button>

              {/* Action Button: PDF */}
              <button 
                onClick={handlePrintPDF}
                className="btn btn-outline-secondary btn-sm" 
                type="button"
                title="Cetak atau simpan ke PDF"
              >
                <i className="ti ti-file-pdf me-1 text-danger"></i> PDF
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Table Card */}
      <div className="row">
        <div className="col-12">
          <div className="card table-responsive border-0 shadow-sm">
            <table className="table mb-0 text-nowrap table-hover align-middle">
              <thead className="table-light border-light">
                <tr>
                  <th>Image</th>
                  <th>Code</th>
                  <th>Category</th>
                  <th>Service Name</th>
                  <th>Price</th>
                  <th>Duration</th>
                  <th>Clients</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((item) => (
                  <tr key={item.id || item.sku}>
                    <td>
                      <div className="d-flex align-items-center">
                        <img 
                          src={item.image || '/assets/images/product-1.png'} 
                          alt={item.name} 
                          loading="lazy"
                          width="40"
                          height="40"
                          className="avatar avatar-md rounded" 
                        />
                        <span className="ms-3 fw-semibold text-dark">{item.name}</span>
                      </div>
                    </td>
                    <td>{item.sku}</td>
                    <td>
                      <span className="badge bg-pink-soft text-pink">
                        {item.category}
                      </span>
                    </td>
                    <td className="fw-bold">
                      Rp {Number(item.price).toLocaleString('id-ID')}
                    </td>
                    <td>{item.duration_minutes || 60} mins</td>
                    <td>{item.clients || item.stock || 100}</td>
                    <td>
                      {/* Action Edit Button */}
                      <button 
                        onClick={() => handleOpenEdit(item)}
                        className="btn btn-link p-0 text-secondary border-0 me-2"
                        title="Edit Layanan"
                        type="button"
                      >
                        <i className="ti ti-edit fs-5"></i>
                      </button>

                      {/* Action Delete Button */}
                      <button 
                        onClick={() => setDeletingItem(item)}
                        className="btn btn-link p-0 link-danger border-0"
                        title="Hapus Layanan"
                        type="button"
                      >
                        <i className="ti ti-trash fs-5"></i>
                      </button>
                    </td>
                  </tr>
                ))}

                {filtered.length === 0 && !loading && (
                  <tr>
                    <td colSpan="8" className="text-center py-5 text-muted">
                      Tidak ada layanan yang sesuai.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* MODAL EDIT ACTION */}
      {editingItem && (
        <div 
          className="modal fade show d-block" 
          tabIndex="-1" 
          style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1060 }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 shadow">
              <div className="modal-header">
                <h5 className="modal-title fw-bold">Edit Layanan ({editingItem.sku})</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setEditingItem(null)}
                ></button>
              </div>
              <form onSubmit={handleSaveEdit}>
                <div className="modal-body space-y-3">
                  <div className="mb-3">
                    <label className="form-label small fw-semibold">Nama Layanan</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      required
                      value={editFormData.name}
                      onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                    />
                  </div>

                  <div className="row g-2 mb-3">
                    <div className="col-6">
                      <label className="form-label small fw-semibold">Kategori</label>
                      <select 
                        className="form-select"
                        value={editFormData.category}
                        onChange={(e) => setEditFormData({ ...editFormData, category: e.target.value })}
                      >
                        <option value="Basic">Basic</option>
                        <option value="Manicure">Manicure</option>
                        <option value="Pedicure">Pedicure</option>
                        <option value="Nail Art">Nail Art</option>
                        <option value="Extension">Extension</option>
                      </select>
                    </div>
                    <div className="col-6">
                      <label className="form-label small fw-semibold">Harga (Rp)</label>
                      <input 
                        type="number" 
                        className="form-control" 
                        required
                        value={editFormData.price}
                        onChange={(e) => setEditFormData({ ...editFormData, price: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="row g-2 mb-3">
                    <div className="col-6">
                      <label className="form-label small fw-semibold">Durasi (Menit)</label>
                      <input 
                        type="number" 
                        className="form-control" 
                        value={editFormData.duration_minutes}
                        onChange={(e) => setEditFormData({ ...editFormData, duration_minutes: e.target.value })}
                      />
                    </div>
                    <div className="col-6">
                      <label className="form-label small fw-semibold">Slot / Kuota</label>
                      <input 
                        type="number" 
                        className="form-control" 
                        value={editFormData.stock}
                        onChange={(e) => setEditFormData({ ...editFormData, stock: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button 
                    type="button" 
                    className="btn btn-light" 
                    onClick={() => setEditingItem(null)}
                  >
                    Batal
                  </button>
                  <button 
                    type="submit" 
                    disabled={savingEdit} 
                    className="btn btn-primary"
                  >
                    {savingEdit ? 'Menyimpan...' : 'Simpan Perubahan'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DELETE CONFIRMATION ACTION */}
      {deletingItem && (
        <div 
          className="modal fade show d-block" 
          tabIndex="-1" 
          style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1060 }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 shadow">
              <div className="modal-header border-0 pb-0">
                <h5 className="modal-title fw-bold text-danger">Konfirmasi Hapus Layanan</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setDeletingItem(null)}
                ></button>
              </div>
              <div className="modal-body pt-2">
                <p className="mb-0">
                  Apakah Anda yakin ingin menghapus layanan <strong>"{deletingItem.name}"</strong> ({deletingItem.sku}) dari database?
                </p>
                <small className="text-muted">Tindakan ini tidak dapat dibatalkan.</small>
              </div>
              <div className="modal-footer border-0 pt-0">
                <button 
                  type="button" 
                  className="btn btn-light" 
                  onClick={() => setDeletingItem(null)}
                >
                  Batal
                </button>
                <button 
                  type="button" 
                  disabled={deletingLoading}
                  onClick={handleConfirmDelete}
                  className="btn btn-danger"
                >
                  {deletingLoading ? 'Menghapus...' : 'Ya, Hapus'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </AppLayout>
  );
}