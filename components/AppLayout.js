'use client';

import { useState, useEffect } from 'react';
import Topbar from '@/components/Topbar';
import Sidebar from '@/components/Sidebar';
import DashboardSkeleton from '@/components/DashboardSkeleton';

export default function AppLayout({ children }) {
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileShow, setIsMobileShow] = useState(false);

  useEffect(() => {
    // Selesai loading skeleton dalam 250ms secara otomatis & pasti
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  const toggleDesktop = () => setIsCollapsed(!isCollapsed);
  const toggleMobile = () => setIsMobileShow(!isMobileShow);
  const closeMobile = () => setIsMobileShow(false);

  return (
    <>
      {/* Skeleton Shimmer Overlay (Hanya muncul 250ms saat initial load) */}
      {showSkeleton && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 bg-white"
          style={{ 
            zIndex: 99999, 
            overflow: 'hidden',
            pointerEvents: 'none',
            transition: 'opacity 0.2s ease-out'
          }}
        >
          <DashboardSkeleton />
        </div>
      )}

      {/* Overlay untuk mobile sidebar */}
      <div 
        id="overlay" 
        className={`overlay ${isMobileShow ? 'show' : ''}`}
        onClick={closeMobile}
      />

      {/* Topbar */}
      <Topbar 
        onToggleDesktop={toggleDesktop} 
        onToggleMobile={toggleMobile} 
      />

      {/* Sidebar */}
      <Sidebar 
        isCollapsed={isCollapsed} 
        isMobileShow={isMobileShow} 
      />

      {/* Main Content Area */}
      <main 
        id="content" 
        className={`content py-10 ${isCollapsed ? 'full' : ''}`}
      >
        <div className="container-fluid px-4">
          {children}
        </div>
      </main>
    </>
  );
}