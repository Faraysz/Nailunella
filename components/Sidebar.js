'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar({ isCollapsed, isMobileShow }) {
  const pathname = usePathname();

  return (
    <aside 
      id="sidebar" 
      className={`sidebar ${isCollapsed ? 'collapsed' : ''} ${isMobileShow ? 'mobile-show' : ''}`}
    >
      <div className="logo-area d-flex align-items-center">
        <Link href="/" className="d-inline-flex align-items-center text-decoration-none text-dark">
          <img 
            src="/assets/images/logo-nails.png" 
            alt="Beauty Nails Logo" 
            loading="lazy"
            width="32"
            height="32"
            style={{ width: '32px', height: '32px', objectFit: 'contain', flexShrink: 0 }}
          />
          <span 
            className="logo-text ms-2 fw-bold text-dark fs-6" 
            style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '0.5px' }}
          >
            BEAUTY NAILS
          </span>
        </Link>
      </div>

      <ul className="nav flex-column">
        <li className="px-4 py-2">
          <small className="nav-text text-uppercase text-muted fw-semibold" style={{ fontSize: '11px' }}>
            Main
          </small>
        </li>
        <li>
          <Link 
            href="/" 
            className={`nav-link ${pathname === '/' || pathname === '/index.html' ? 'active' : ''}`}
          >
            <i className="ti ti-home"></i>
            <span className="nav-text">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link 
            href="/inventory" 
            className={`nav-link ${pathname === '/inventory' || pathname === '/inventory.html' ? 'active' : ''}`}
          >
            <i className="ti ti-box-seam"></i>
            <span className="nav-text">Services</span>
          </Link>
        </li>
        <li>
          <Link 
            href="/create-product" 
            className={`nav-link ${pathname === '/create-product' || pathname === '/create-product.html' ? 'active' : ''}`}
          >
            <i className="ti ti-plus"></i>
            <span className="nav-text">Appointments</span>
          </Link>
        </li>
        <li>
          <Link 
            href="/reports" 
            className={`nav-link ${pathname === '/reports' || pathname === '/reports.html' ? 'active' : ''}`}
          >
            <i className="ti ti-receipt"></i>
            <span className="nav-text">Reports</span>
          </Link>
        </li>

        <li className="px-4 pt-4 pb-2">
          <small className="nav-text text-uppercase text-muted fw-semibold" style={{ fontSize: '11px' }}>
            Account
          </small>
        </li>
        <li>
          <Link 
            href="/signin" 
            className={`nav-link ${pathname === '/signin' || pathname === '/signin.html' ? 'active' : ''}`}
          >
            <i className="ti ti-logout"></i>
            <span className="nav-text">Log in</span>
          </Link>
        </li>
        <li>
          <Link 
            href="/signup" 
            className={`nav-link ${pathname === '/signup' || pathname === '/signup.html' ? 'active' : ''}`}
          >
            <i className="ti ti-user-plus"></i>
            <span className="nav-text">Sign up</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}