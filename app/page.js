'use client';

import AppLayout from '@/components/AppLayout';
import { SalesPurchaseChart, CustomerRadialChart } from '@/components/ApexChartsWrapper';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <AppLayout>
      {/* Title */}
      <div className="row">
        <div className="col-12">
          <div className="mb-4">
            <h1 className="fs-3 mb-1 fw-bold text-dark">Dashboard</h1>
            <p className="text-muted small">Your main content goes here…</p>
          </div>
        </div>
      </div>

      {/* 4 Cards Pink Soft (Row 1) */}
      <div className="row g-3 mb-3">
        {/* Total Revenue */}
        <div className="col-lg-3 col-sm-6 col-12">
          <div className="card p-4 bg-pink-soft bg-opacity-10 border border-pink border-opacity-25 rounded-2 h-100 shadow-none">
            <div className="d-flex gap-3">
              <div className="icon-shape icon-md bg-pink text-white rounded-2 d-flex align-items-center justify-content-center">
                <i className="ti ti-report-analytics fs-4"></i>
              </div>
              <div>
                <h2 className="mb-2 fs-6 text-muted fw-normal">Total Revenue</h2>
                <h3 className="fw-bold mb-0 fs-4 text-dark">Rp. 25.000.000</h3>
                <p className="text-pink mb-0 small mt-1">+5% since last month</p>
              </div>
            </div>
          </div>
        </div>

        {/* Total Booking */}
        <div className="col-lg-3 col-sm-6 col-12">
          <div className="card p-4 bg-pink-soft bg-opacity-10 border border-pink border-opacity-25 rounded-2 h-100 shadow-none">
            <div className="d-flex gap-3">
              <div className="icon-shape icon-md bg-pink text-white rounded-2 d-flex align-items-center justify-content-center">
                <i className="ti ti-repeat fs-4"></i>
              </div>
              <div>
                <h2 className="mb-2 fs-6 text-muted fw-normal">Total Booking</h2>
                <h3 className="fw-bold mb-0 fs-4 text-dark">Rp. 18.000.000</h3>
                <p className="text-pink mb-0 small mt-1">+22% since last month</p>
              </div>
            </div>
          </div>
        </div>

        {/* Operational Cost */}
        <div className="col-lg-3 col-sm-6 col-12">
          <div className="card p-4 bg-pink-soft bg-opacity-10 border border-pink border-opacity-25 rounded-2 h-100 shadow-none">
            <div className="d-flex gap-3">
              <div className="icon-shape icon-md bg-pink text-white rounded-2 d-flex align-items-center justify-content-center">
                <i className="ti ti-currency-dollar fs-4"></i>
              </div>
              <div>
                <h2 className="mb-2 fs-6 text-muted fw-normal">Operational Cost</h2>
                <h3 className="fw-bold mb-0 fs-4 text-dark">Rp. 9.000.000</h3>
                <p className="text-pink mb-0 small mt-1">+10% since last month</p>
              </div>
            </div>
          </div>
        </div>

        {/* Invoice Due */}
        <div className="col-lg-3 col-sm-6 col-12">
          <div className="card p-4 bg-pink-soft bg-opacity-10 border border-pink border-opacity-25 rounded-2 h-100 shadow-none">
            <div className="d-flex gap-3">
              <div className="icon-shape icon-md bg-pink text-white rounded-2 d-flex align-items-center justify-content-center">
                <i className="ti ti-notes fs-4"></i>
              </div>
              <div>
                <h2 className="mb-2 fs-6 text-muted fw-normal">Invoice Due</h2>
                <h3 className="fw-bold mb-0 fs-4 text-dark">Rp. 25.000.000</h3>
                <p className="text-pink mb-0 small mt-1">+35% since last month</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: 3 Cards (Total Profit, Total Payment Returns, Total Expenses) */}
      <div className="row g-3 mb-3">
        {/* Total Profit */}
        <div className="col-lg-4 col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <div className="d-flex justify-content-between border-bottom pb-4 mb-3">
                <div>
                  <h3 className="fw-bold h4 text-dark mb-1">Rp. 25.000.000</h3>
                  <span className="text-muted small">Total Profit</span>
                </div>
                <div>
                  <i className="ti ti-layers-subtract fs-1 text-primary"></i>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center small">
                <div className="text-muted"><span className="text-success fw-semibold">+35%</span> vs Last Month</div>
                <div><a href="#!" className="link-primary text-decoration-underline fw-semibold">View</a></div>
              </div>
            </div>
          </div>
        </div>

        {/* Total Payment Returns */}
        <div className="col-lg-4 col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <div className="d-flex justify-content-between border-bottom pb-4 mb-3">
                <div>
                  <h3 className="fw-bold h4 text-dark mb-1">Rp. 45.458.000</h3>
                  <span className="text-muted small">Total Payment Returns</span>
                </div>
                <div>
                  <i className="ti ti-credit-card fs-1 text-danger"></i>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center small">
                <div className="text-muted"><span className="text-danger fw-semibold">-20%</span> vs Last Month</div>
                <div><a href="#!" className="link-primary text-decoration-underline fw-semibold">View</a></div>
              </div>
            </div>
          </div>
        </div>

        {/* Total Expenses */}
        <div className="col-lg-4 col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <div className="d-flex justify-content-between border-bottom pb-4 mb-3">
                <div>
                  <h3 className="fw-bold h4 text-dark mb-1">Rp. 34.458.000</h3>
                  <span className="text-muted small">Total Expenses</span>
                </div>
                <div>
                  <i className="ti ti-cash-banknote fs-1 text-warning"></i>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center small">
                <div className="text-muted"><span className="text-warning fw-semibold">-20%</span> vs Last Month</div>
                <div><a href="#!" className="link-primary text-decoration-underline fw-semibold">View</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 3: Sales vs Purchase Chart & Overall Information */}
      <div className="row g-3 mb-3">
        {/* Sales vs Purchase */}
        <div className="col-12 col-lg-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-header d-flex justify-content-between align-items-center bg-transparent px-4 py-3 border-bottom">
              <h3 className="h5 mb-0 fw-bold text-dark">Sales vs Purchase</h3>
              <div>
                <select className="form-select form-select-sm" defaultValue="This Year">
                  <option value="This Year">This Year</option>
                  <option value="This Month">This Month</option>
                  <option value="This Week">This Week</option>
                </select>
              </div>
            </div>
            <div className="card-body p-4">
              <SalesPurchaseChart />
            </div>
          </div>
        </div>

        {/* Overall Information */}
        <div className="col-12 col-lg-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-header d-flex justify-content-between align-items-center bg-transparent px-4 py-3 border-bottom">
              <h3 className="h5 mb-0 fw-bold text-dark">Overall Information</h3>
              <div>
                <select className="form-select form-select-sm" defaultValue="Last 6 Months">
                  <option value="Last 6 Months">Last 6 Months</option>
                  <option value="This Month">This Month</option>
                  <option value="This Week">This Week</option>
                </select>
              </div>
            </div>
            <div className="card-body p-4">
              <h3 className="h6 fw-bold mb-3 text-dark">Customers Overview</h3>
              <div className="row align-items-center mb-4">
                <div className="col-sm-6 text-center">
                  <CustomerRadialChart />
                </div>
                <div className="col-sm-6 mt-3 mt-sm-0">
                  <div className="row">
                    <div className="col-6 border-end">
                      <div className="text-center">
                        <h2 className="mb-1 fs-3 fw-bold text-dark">5.5K</h2>
                        <p className="text-muted small mb-2">First Time</p>
                        <span className="badge bg-pink"><i className="ti ti-arrow-up-left me-1"></i>25%</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="text-center">
                        <h2 className="mb-1 fs-3 fw-bold text-dark">3.5K</h2>
                        <p className="text-muted small mb-2">Return</p>
                        <span className="badge bg-pink"><i className="ti ti-arrow-up-left me-1"></i>21%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom 3 Stats */}
              <div className="row text-center border-top pt-3">
                <div className="col-4 border-end">
                  <h3 className="fw-bold mb-1 fs-5 text-dark">6987</h3>
                  <small className="text-secondary">Suppliers</small>
                </div>
                <div className="col-4 border-end">
                  <h3 className="fw-bold mb-1 fs-5 text-dark">4896</h3>
                  <small className="text-secondary">Customers</small>
                </div>
                <div className="col-4">
                  <h3 className="fw-bold mb-1 fs-5 text-dark">487</h3>
                  <small className="text-secondary">Orders</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 4: 3 Cards (Top Services, Nail Supplies, Recent Appointments) */}
      <div className="row g-3 mb-4">
        {/* CARD 1 — Top Services */}
        <div className="col-lg-4 col-12">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-header bg-white d-flex justify-content-between align-items-center px-4 py-3 border-bottom">
              <h4 className="mb-0 h5 fw-bold text-dark">Top Services</h4>
              <button className="btn btn-sm btn-outline-secondary" type="button">
                <i className="ti ti-calendar me-1"></i> Today
              </button>
            </div>

            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex align-items-center gap-3 py-3">
                <img src="/assets/images/product-2.png" alt="" className="rounded" width="48" height="48" style={{ width: '48px', height: '48px', objectFit: 'cover' }} />
                <div className="flex-grow-1">
                  <p className="mb-1 fw-semibold text-dark">Manicure Basic</p>
                  <div className="d-flex align-items-center gap-2 text-muted small">
                    <span className="fw-semibold text-dark">Rp 75.000</span>
                    <span>•</span>
                    <span>120 clients</span>
                  </div>
                </div>
                <span className="badge bg-danger-subtle text-danger border border-danger">18%</span>
              </li>

              <li className="list-group-item d-flex align-items-center gap-3 py-3">
                <img src="/assets/images/product-1.png" alt="" className="rounded" width="48" height="48" style={{ width: '48px', height: '48px', objectFit: 'cover' }} />
                <div className="flex-grow-1">
                  <p className="mb-1 fw-semibold text-dark">Gel Polish</p>
                  <div className="d-flex align-items-center gap-2 text-muted small">
                    <span className="fw-semibold text-dark">Rp 50.000</span>
                    <span>•</span>
                    <span>100 clients</span>
                  </div>
                </div>
                <span className="badge bg-primary-subtle text-primary border border-primary">32%</span>
              </li>

              <li className="list-group-item d-flex align-items-center gap-3 py-3">
                <img src="/assets/images/product-3.png" alt="" className="rounded" width="48" height="48" style={{ width: '48px', height: '48px', objectFit: 'cover' }} />
                <div className="flex-grow-1">
                  <p className="mb-1 fw-semibold text-dark">Pedicure Spa</p>
                  <div className="d-flex align-items-center gap-2 text-muted small">
                    <span className="fw-semibold text-dark">Rp 150.000</span>
                    <span>•</span>
                    <span>80 clients</span>
                  </div>
                </div>
                <span className="badge bg-info-subtle text-info border border-info">22%</span>
              </li>

              <li className="list-group-item d-flex align-items-center gap-3 py-3">
                <img src="/assets/images/product-4.png" alt="" className="rounded" width="48" height="48" style={{ width: '48px', height: '48px', objectFit: 'cover' }} />
                <div className="flex-grow-1">
                  <p className="mb-1 fw-semibold text-dark">Acrylic Extension</p>
                  <div className="d-flex align-items-center gap-2 text-muted small">
                    <span className="fw-semibold text-dark">Rp 250.000</span>
                    <span>•</span>
                    <span>45 clients</span>
                  </div>
                </div>
                <span className="badge bg-success-subtle text-success border border-success">28%</span>
              </li>

              <li className="list-group-item d-flex align-items-center gap-3 py-3">
                <img src="/assets/images/product-5.png" alt="" className="rounded" width="48" height="48" style={{ width: '48px', height: '48px', objectFit: 'cover' }} />
                <div className="flex-grow-1">
                  <p className="mb-1 fw-semibold text-dark">Nail Art Korean</p>
                  <div className="d-flex align-items-center gap-2 text-muted small">
                    <span className="fw-semibold text-dark">Rp 65.000</span>
                    <span>•</span>
                    <span>35 clients</span>
                  </div>
                </div>
                <span className="badge bg-warning-subtle text-warning border border-warning">25%</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CARD 2 — Nail Supplies */}
        <div className="col-lg-4 col-12">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-header bg-white d-flex justify-content-between align-items-center px-4 py-3 border-bottom">
              <h4 className="mb-0 h5 fw-bold text-dark">Nail Supplies</h4>
              <a href="#!" className="small text-primary text-decoration-underline fw-semibold">View All</a>
            </div>

            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex align-items-center gap-3 py-3">
                <img src="/assets/images/product-8.png" alt="" className="rounded" width="48" height="48" style={{ width: '48px', height: '48px', objectFit: 'cover' }} />
                <div className="flex-grow-1">
                  <p className="mb-1 fw-semibold text-dark">Gel Polish Pink</p>
                  <small className="text-muted">ID: #554433</small>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <span className="fw-bold text-danger">06</span>
                  <small className="text-muted">06 pcs</small>
                </div>
              </li>

              <li className="list-group-item d-flex align-items-center gap-3 py-3">
                <img src="/assets/images/product-4.png" alt="" className="rounded" width="48" height="48" style={{ width: '48px', height: '48px', objectFit: 'cover' }} />
                <div className="flex-grow-1">
                  <p className="mb-1 fw-semibold text-dark">Acrylic Powder Clear</p>
                  <small className="text-muted">ID: #887766</small>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <span className="fw-bold text-danger">09</span>
                  <small className="text-muted">09 pcs</small>
                </div>
              </li>

              <li className="list-group-item d-flex align-items-center gap-3 py-3">
                <img src="/assets/images/product-10.png" alt="" className="rounded" width="48" height="48" style={{ width: '48px', height: '48px', objectFit: 'cover' }} />
                <div className="flex-grow-1">
                  <p className="mb-1 fw-semibold text-dark">Top Coat</p>
                  <small className="text-muted">ID: #332211</small>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <span className="fw-bold text-danger">03</span>
                  <small className="text-muted">03 pcs</small>
                </div>
              </li>

              <li className="list-group-item d-flex align-items-center gap-3 py-3">
                <img src="/assets/images/product-4.png" alt="" className="rounded" width="48" height="48" style={{ width: '48px', height: '48px', objectFit: 'cover' }} />
                <div className="flex-grow-1">
                  <p className="mb-1 fw-semibold text-dark">Nail Tips</p>
                  <small className="text-muted">ID: #998877</small>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <span className="fw-bold text-danger">07</span>
                  <small className="text-muted">07 pcs</small>
                </div>
              </li>

              <li className="list-group-item d-flex align-items-center gap-3 py-3">
                <img src="/assets/images/product-6.png" alt="" className="rounded" width="48" height="48" style={{ width: '48px', height: '48px', objectFit: 'cover' }} />
                <div className="flex-grow-1">
                  <p className="mb-1 fw-semibold text-dark">Nail Brush Set</p>
                  <small className="text-muted">ID: #665544</small>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <span className="fw-bold text-danger">02</span>
                  <small className="text-muted">02 pcs</small>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* CARD 3 — Recent Appointments */}
        <div className="col-lg-4 col-12">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-header bg-white d-flex justify-content-between align-items-center px-4 py-3 border-bottom">
              <h4 className="mb-0 h5 fw-bold text-dark">Recent Appointments</h4>
              <button className="btn btn-sm btn-outline-secondary" type="button">
                <i className="ti ti-calendar-event me-1"></i> Weekly
              </button>
            </div>

            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex align-items-center gap-3 py-3">
                <img src="/assets/images/product-7.png" alt="" className="rounded" width="48" height="48" style={{ width: '48px', height: '48px', objectFit: 'cover' }} />
                <div className="flex-grow-1">
                  <p className="mb-1 fw-semibold text-dark">Sinta</p>
                  <div className="d-flex align-items-center gap-2 text-muted small">
                    <span className="fw-semibold text-dark">French Tip Design</span>
                    <span>•</span>
                    <span>Rp 75.000</span>
                  </div>
                </div>
                <span className="badge bg-success-subtle text-success">Completed</span>
              </li>

              <li className="list-group-item d-flex align-items-center gap-3 py-3">
                <img src="/assets/images/product-9.png" alt="" className="rounded" width="48" height="48" style={{ width: '48px', height: '48px', objectFit: 'cover' }} />
                <div className="flex-grow-1">
                  <p className="mb-1 fw-semibold text-dark">Rina</p>
                  <div className="d-flex align-items-center gap-2 text-muted small">
                    <span className="fw-semibold text-dark">Nail Art Design</span>
                    <span>•</span>
                    <span>Rp 150.000</span>
                  </div>
                </div>
                <span className="badge bg-primary-subtle text-primary">Processing</span>
              </li>

              <li className="list-group-item d-flex align-items-center gap-3 py-3">
                <img src="/assets/images/product-8.png" alt="" className="rounded" width="48" height="48" style={{ width: '48px', height: '48px', objectFit: 'cover' }} />
                <div className="flex-grow-1">
                  <p className="mb-1 fw-semibold text-dark">Dewi</p>
                  <div className="d-flex align-items-center gap-2 text-muted small">
                    <span className="fw-semibold text-dark">Nail Repair Kit</span>
                    <span>•</span>
                    <span>Rp 65.000</span>
                  </div>
                </div>
                <span className="badge bg-success-subtle text-success">Completed</span>
              </li>

              <li className="list-group-item d-flex align-items-center gap-3 py-3">
                <img src="/assets/images/product-3.png" alt="" className="rounded" width="48" height="48" style={{ width: '48px', height: '48px', objectFit: 'cover' }} />
                <div className="flex-grow-1">
                  <p className="mb-1 fw-semibold text-dark">Maya</p>
                  <div className="d-flex align-items-center gap-2 text-muted small">
                    <span className="fw-semibold text-dark">Pedicure Spa</span>
                    <span>•</span>
                    <span>Rp 250.000</span>
                  </div>
                </div>
                <span className="badge bg-warning-subtle text-warning">Pending</span>
              </li>

              <li className="list-group-item d-flex align-items-center gap-3 py-3">
                <img src="/assets/images/product-6.png" alt="" className="rounded" width="48" height="48" style={{ width: '48px', height: '48px', objectFit: 'cover' }} />
                <div className="flex-grow-1">
                  <p className="mb-1 fw-semibold text-dark">Elsa</p>
                  <div className="d-flex align-items-center gap-2 text-muted small">
                    <span className="fw-semibold text-dark">Nail Brush Set</span>
                    <span>•</span>
                    <span>Rp 75.000</span>
                  </div>
                </div>
                <span className="badge bg-danger-subtle text-danger">Cancelled</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="row">
        <div className="col-12">
          <footer className="text-center py-3 text-secondary border-top">
            <p className="mb-0 small">© 2026 Beauty Nails Studio 💅 | Crafted with love</p>
          </footer>
        </div>
      </div>
    </AppLayout>
  );
}