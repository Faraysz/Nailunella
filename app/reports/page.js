'use client';

import AppLayout from '@/components/AppLayout';

export default function ReportsPage() {
  return (
    <AppLayout>
      <div className="row mb-4">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h1 className="fs-3 mb-1 fw-bold text-dark">Reports</h1>
              <p className="text-muted small mb-0">Laporan performa penjualan dan keuangan studio</p>
            </div>
            <button className="btn btn-outline-secondary btn-sm" type="button">
              <i className="ti ti-download me-1"></i> Export PDF
            </button>
          </div>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="row g-3 mb-4">
        <div className="col-lg-3 col-sm-6 col-12">
          <div className="card p-4 border-0 shadow-sm h-100">
            <span className="text-muted small fw-semibold">Total Revenue (Q4)</span>
            <h3 className="fw-bold mt-2 mb-1 fs-4 text-dark">Rp 142.800.000</h3>
            <span className="text-success small fw-semibold">+24.6% vs Q3</span>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 col-12">
          <div className="card p-4 border-0 shadow-sm h-100">
            <span className="text-muted small fw-semibold">Rata-rata Order</span>
            <h3 className="fw-bold mt-2 mb-1 fs-4 text-dark">Rp 140.000</h3>
            <span className="text-muted small">Per appointment klien</span>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 col-12">
          <div className="card p-4 border-0 shadow-sm h-100">
            <span className="text-muted small fw-semibold">Client Retention</span>
            <h3 className="fw-bold mt-2 mb-1 fs-4 text-dark">78.4%</h3>
            <span className="text-success small fw-semibold">Kunjungan ulang 30-45 hari</span>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 col-12">
          <div className="card p-4 border-0 shadow-sm h-100">
            <span className="text-muted small fw-semibold">Metode Cashless</span>
            <h3 className="fw-bold mt-2 mb-1 fs-4 text-dark">94.0%</h3>
            <span className="text-pink small fw-semibold">QRIS & Transfer Bank</span>
          </div>
        </div>
      </div>

      {/* Staff & Payment Tables */}
      <div className="row g-3">
        <div className="col-lg-6 col-12">
          <div className="card border-0 shadow-sm p-4">
            <h3 className="fs-5 fw-bold mb-3 text-dark">Top Nail Artists</h3>
            <div className="table-responsive">
              <table className="table table-hover mb-0 text-nowrap align-middle">
                <thead className="table-light">
                  <tr>
                    <th>Artist</th>
                    <th>Treatments</th>
                    <th>Total Omset</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Bella Rahmadina</td>
                    <td>118 Sesi</td>
                    <td className="fw-bold text-pink">Rp 16.500.000</td>
                  </tr>
                  <tr>
                    <td>Maya Anggraini</td>
                    <td>94 Sesi</td>
                    <td className="fw-bold text-pink">Rp 14.800.000</td>
                  </tr>
                  <tr>
                    <td>Siti Nurhaliza</td>
                    <td>86 Sesi</td>
                    <td className="fw-bold text-pink">Rp 10.200.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-12">
          <div className="card border-0 shadow-sm p-4">
            <h3 className="fs-5 fw-bold mb-3 text-dark">Distribusi Pembayaran</h3>
            <div className="space-y-3">
              <div className="mb-3">
                <div className="d-flex justify-content-between small fw-semibold mb-1">
                  <span>QRIS (GoPay, OVO, ShopeePay)</span>
                  <span className="text-pink">54%</span>
                </div>
                <div className="progress" style={{ height: '8px' }}>
                  <div className="progress-bar bg-pink" style={{ width: '54%' }}></div>
                </div>
              </div>
              <div className="mb-3">
                <div className="d-flex justify-content-between small fw-semibold mb-1">
                  <span>BCA / Mandiri Transfer</span>
                  <span className="text-pink">28%</span>
                </div>
                <div className="progress" style={{ height: '8px' }}>
                  <div className="progress-bar bg-pink" style={{ width: '28%' }}></div>
                </div>
              </div>
              <div className="mb-3">
                <div className="d-flex justify-content-between small fw-semibold mb-1">
                  <span>Debit / Kartu Kredit</span>
                  <span className="text-pink">12%</span>
                </div>
                <div className="progress" style={{ height: '8px' }}>
                  <div className="progress-bar bg-pink" style={{ width: '12%' }}></div>
                </div>
              </div>
              <div>
                <div className="d-flex justify-content-between small fw-semibold mb-1">
                  <span>Tunai (Cash)</span>
                  <span className="text-pink">6%</span>
                </div>
                <div className="progress" style={{ height: '8px' }}>
                  <div className="progress-bar bg-pink" style={{ width: '6%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}