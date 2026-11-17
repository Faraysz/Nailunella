'use client';

import { useState } from 'react';
import AppLayout from '@/components/AppLayout';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CreateProductPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    category: 'Basic',
    price: '',
    duration_minutes: '60',
    stock: '100',
    description: '',
    image: '/assets/images/product-1.png'
  });
  const [submitting, setSubmitting] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: '', type: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setAlert({ show: false, message: '', type: '' });

    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (res.ok) {
        setAlert({ show: true, message: 'Layanan baru berhasil disimpan ke database Neon!', type: 'success' });
        setTimeout(() => {
          router.push('/inventory');
        }, 1200);
      } else {
        setAlert({ show: true, message: data.message || 'Gagal menyimpan layanan.', type: 'danger' });
      }
    } catch (err) {
      setAlert({ show: true, message: 'Kesalahan jaringan server.', type: 'danger' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AppLayout>
      {/* Title & Back Button */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h1 className="fs-3 mb-1 fw-bold text-dark">Appointments / Add Service</h1>
              <p className="text-muted small mb-0">Create new service or booking schedule</p>
            </div>
            <div>
              <Link href="/inventory" className="btn btn-outline-secondary px-3 py-2 fw-semibold">
                Back to Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {alert.show && (
        <div className={`alert alert-${alert.type} alert-dismissible fade show mb-4`} role="alert">
          {alert.message}
        </div>
      )}

      {/* Form Full Width Memenuhi Website */}
      <div className="row">
        <div className="col-12">
          <div className="card border-0 shadow-sm p-4 p-md-5 w-100">
            <form onSubmit={handleSubmit} className="w-100">
              {/* Row 1: Service Name */}
              <div className="mb-4">
                <label className="form-label fw-semibold text-dark">Service Name</label>
                <input 
                  type="text" 
                  className="form-control form-control-lg w-100 fs-6" 
                  placeholder="e.g. Luxury Gel Polish" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              {/* Row 2: Category & Price */}
              <div className="row g-4 mb-4">
                <div className="col-md-6 col-12">
                  <label className="form-label fw-semibold text-dark">Category</label>
                  <select 
                    className="form-select form-select-lg w-100 fs-6"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    <option value="Basic">Basic</option>
                    <option value="Manicure">Manicure</option>
                    <option value="Pedicure">Pedicure</option>
                    <option value="Nail Art">Nail Art</option>
                    <option value="Extension">Extension</option>
                  </select>
                </div>
                <div className="col-md-6 col-12">
                  <label className="form-label fw-semibold text-dark">Price (Rp)</label>
                  <input 
                    type="number" 
                    className="form-control form-control-lg w-100 fs-6" 
                    placeholder="75000" 
                    required
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  />
                </div>
              </div>

              {/* Row 3: Duration & Slot */}
              <div className="row g-4 mb-4">
                <div className="col-md-6 col-12">
                  <label className="form-label fw-semibold text-dark">Duration (Minutes)</label>
                  <input 
                    type="number" 
                    className="form-control form-control-lg w-100 fs-6" 
                    placeholder="60" 
                    value={formData.duration_minutes}
                    onChange={(e) => setFormData({ ...formData, duration_minutes: e.target.value })}
                  />
                </div>
                <div className="col-md-6 col-12">
                  <label className="form-label fw-semibold text-dark">Slot / Kuota</label>
                  <input 
                    type="number" 
                    className="form-control form-control-lg w-100 fs-6" 
                    placeholder="100" 
                    value={formData.stock}
                    onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                  />
                </div>
              </div>

              {/* Row 4: Description */}
              <div className="mb-4">
                <label className="form-label fw-semibold text-dark">Description</label>
                <textarea 
                  className="form-control w-100 fs-6" 
                  rows="5" 
                  placeholder="Detail layanan dan teknik pengerjaan kuku..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                ></textarea>
              </div>

              {/* Row 5: Image Picker */}
              <div className="mb-5">
                <label className="form-label fw-semibold text-dark mb-2">Service Image</label>
                <div className="d-flex gap-3 flex-wrap align-items-center">
                  {[
                    'product-1.png', 
                    'product-2.png', 
                    'product-3.png', 
                    'product-4.png', 
                    'product-5.png',
                    'product-6.png',
                    'product-7.png',
                    'product-8.png'
                  ].map((img) => (
                    <div 
                      key={img} 
                      onClick={() => setFormData({ ...formData, image: `/assets/images/${img}` })}
                      className={`p-1 rounded border ${formData.image.includes(img) ? 'border-primary border-3 shadow-sm' : 'border-light'}`}
                      style={{ cursor: 'pointer', transition: 'all 0.2s' }}
                    >
                      <img 
                        src={`/assets/images/${img}`} 
                        alt="" 
                        loading="lazy"
                        width="70"
                        height="70"
                        className="rounded" 
                        style={{ width: '70px', height: '70px', objectFit: 'cover' }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="d-flex gap-3">
                <button 
                  type="submit" 
                  disabled={submitting} 
                  className="btn btn-primary btn-lg px-5 fw-semibold"
                >
                  {submitting ? 'Saving...' : 'Save Service'}
                </button>
                <Link href="/inventory" className="btn btn-light btn-lg px-4 text-muted">
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}