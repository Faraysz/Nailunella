'use client';

import { useState } from 'react';
import Topbar from '@/components/Topbar';
import Sidebar from '@/components/Sidebar';
import Preloader from '@/components/Preloader';

export default function AppLayout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileShow, setIsMobileShow] = useState(false);

  const toggleDesktop = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMobile = () => {
    setIsMobileShow(!isMobileShow);
  };

  const closeMobile = () => {
    setIsMobileShow(false);
  };

  return (
    <>
      <Preloader />
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