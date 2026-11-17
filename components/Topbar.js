'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Topbar({ onToggleDesktop, onToggleMobile }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  return (
    <nav id="topbar" className="navbar bg-white border-bottom fixed-top topbar px-3">
      {/* Desktop Toggle Button */}
      <button 
        id="toggleBtn" 
        onClick={onToggleDesktop}
        className="d-none d-lg-inline-flex btn btn-light btn-icon btn-sm"
        type="button"
      >
        <i className="ti ti-layout-sidebar-left-expand"></i>
      </button>

      {/* Mobile Toggle Button */}
      <button 
        id="mobileBtn" 
        onClick={onToggleMobile}
        className="btn btn-light btn-icon btn-sm d-lg-none me-2"
        type="button"
      >
        <i className="ti ti-layout-sidebar-left-expand"></i>
      </button>

      <div>
        {/* Navbar nav */}
        <ul className="list-unstyled d-flex align-items-center mb-0 gap-1">
          {/* Bell Icon Notification */}
          <li className="position-relative">
            <button
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowUserDropdown(false);
              }}
              className="position-relative btn-icon btn-sm btn-light btn rounded-circle border-0"
              type="button"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none"
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-bell"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
              </svg>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger mt-2 ms-n2">
                2
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>

            {showNotifications && (
              <div 
                className="dropdown-menu dropdown-menu-end dropdown-menu-md p-0 show position-absolute end-0 mt-2 shadow-sm border"
                style={{ width: '320px', zIndex: 1050 }}
              >
                <ul className="list-unstyled p-0 m-0">
                  <li className="p-3 border-bottom">
                    <div className="d-flex gap-3">
                      <img 
                        src="/assets/images/avatar-staff1.jpg" 
                        alt="Staff 1" 
                        loading="lazy"
                        width="32"
                        height="32"
                        className="avatar avatar-sm rounded-circle" 
                      />
                      <div className="flex-grow-1 small">
                        <p className="mb-0 fw-semibold">New order received</p>
                        <p className="mb-1 text-muted">Order #12345 has been placed</p>
                        <div className="text-secondary small">5 minutes ago</div>
                      </div>
                    </div>
                  </li>
                  <li className="p-3 border-bottom">
                    <div className="d-flex gap-3">
                      <img 
                        src="/assets/images/avatar-staff2.jpg" 
                        alt="Staff 2" 
                        loading="lazy"
                        width="32"
                        height="32"
                        className="avatar avatar-sm rounded-circle" 
                      />
                      <div className="flex-grow-1 small">
                        <p className="mb-0 fw-semibold">New user registered</p>
                        <p className="mb-1 text-muted">User @salsabilaa has signed up</p>
                        <div className="text-secondary small">30 minutes ago</div>
                      </div>
                    </div>
                  </li>
                  <li className="p-3 border-bottom">
                    <div className="d-flex gap-3">
                      <img 
                        src="/assets/images/avatar-admin.jpg" 
                        alt="Customer" 
                        loading="lazy"
                        width="32"
                        height="32"
                        className="avatar avatar-sm rounded-circle" 
                      />
                      <div className="flex-grow-1 small">
                        <p className="mb-0 fw-semibold">Payment confirmed</p>
                        <p className="mb-1 text-muted">Payment of Rp. 299.000 has been received</p>
                        <div className="text-secondary small">1 hour ago</div>
                      </div>
                    </div>
                  </li>
                  <li className="px-4 py-3 text-center">
                    <a href="#!" className="text-primary small fw-semibold text-decoration-none">
                      View all notifications
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </li>

          {/* User Profile Avatar Dropdown */}
          <li className="ms-3 dropdown position-relative">
            <button
              onClick={() => {
                setShowUserDropdown(!showUserDropdown);
                setShowNotifications(false);
              }}
              className="border-0 bg-transparent p-0"
              type="button"
            >
              <img 
                src="/assets/images/avatar-admin.jpg" 
                alt="User Avatar" 
                loading="lazy"
                width="34"
                height="34"
                className="avatar avatar-sm rounded-circle object-fit-cover shadow-xs border" 
              />
            </button>

            {showUserDropdown && (
              <div 
                className="dropdown-menu dropdown-menu-end p-0 show position-absolute end-0 mt-2 shadow-sm border" 
                style={{ minWidth: '220px', zIndex: 1050 }}
              >
                <div>
                  <div className="d-flex gap-3 align-items-center border-dashed border-bottom px-3 py-3">
                    <img 
                      src="/assets/images/avatar-admin.jpg" 
                      alt="" 
                      loading="lazy"
                      width="40"
                      height="40"
                      className="avatar avatar-md rounded-circle object-fit-cover shadow-xs border" 
                    />
                    <div>
                      <h4 className="mb-0 small fw-bold">Zulfa Ulya</h4>
                      <p className="mb-0 small text-muted">@zulfaulya</p>
                    </div>
                  </div>
                  <div className="p-3 d-flex flex-column gap-1 small lh-lg">
                    <Link href="/" className="text-secondary text-decoration-none hover-primary">
                      <span>Home</span>
                    </Link>
                    <Link href="/inventory" className="text-secondary text-decoration-none hover-primary">
                      <span>Services</span>
                    </Link>
                    <Link href="/create-product" className="text-secondary text-decoration-none hover-primary">
                      <span>Appointments</span>
                    </Link>
                    <Link href="/reports" className="text-secondary text-decoration-none hover-primary">
                      <span>Reports</span>
                    </Link>
                    <hr className="my-1" />
                    <Link href="/signin" className="text-danger text-decoration-none">
                      <span>Keluar Sesi</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}