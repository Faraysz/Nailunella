'use client';

export default function DashboardSkeleton() {
  return (
    <div className="skeleton-dashboard-wrapper w-100 min-vh-100 bg-light">
      {/* Skeleton Topbar */}
      <div 
        className="d-flex align-items-center justify-content-between px-3 bg-white border-bottom position-fixed top-0 start-0 w-100" 
        style={{ height: '60px', zIndex: 1040 }}
      >
        <div className="d-flex align-items-center gap-3 ps-lg-4" style={{ marginLeft: '240px' }}>
          <div className="skeleton-box rounded" style={{ width: '32px', height: '32px' }}></div>
          <div className="skeleton-box rounded d-none d-md-block" style={{ width: '220px', height: '32px' }}></div>
        </div>
        <div className="d-flex align-items-center gap-3 pe-3">
          <div className="skeleton-box rounded-circle" style={{ width: '32px', height: '32px' }}></div>
          <div className="skeleton-box rounded-circle" style={{ width: '36px', height: '36px' }}></div>
        </div>
      </div>

      {/* Skeleton Sidebar (Desktop) */}
      <div 
        className="d-none d-lg-flex flex-column bg-white border-end position-fixed top-0 start-0 h-100" 
        style={{ width: '240px', paddingTop: '60px', zIndex: 1035 }}
      >
        <div className="position-absolute top-0 start-0 w-100 d-flex align-items-center px-3 border-bottom" style={{ height: '60px' }}>
          <div className="skeleton-box rounded me-2" style={{ width: '32px', height: '32px' }}></div>
          <div className="skeleton-box rounded" style={{ width: '120px', height: '20px' }}></div>
        </div>

        <div className="p-3">
          <div className="skeleton-box rounded mb-3" style={{ width: '50px', height: '12px' }}></div>
          <div className="skeleton-box rounded mb-2" style={{ width: '100%', height: '38px' }}></div>
          <div className="skeleton-box rounded mb-2" style={{ width: '100%', height: '38px' }}></div>
          <div className="skeleton-box rounded mb-2" style={{ width: '100%', height: '38px' }}></div>
          <div className="skeleton-box rounded mb-4" style={{ width: '100%', height: '38px' }}></div>

          <div className="skeleton-box rounded mb-3" style={{ width: '60px', height: '12px' }}></div>
          <div className="skeleton-box rounded mb-2" style={{ width: '100%', height: '38px' }}></div>
          <div className="skeleton-box rounded" style={{ width: '100%', height: '38px' }}></div>
        </div>
      </div>

      {/* Skeleton Main Content Area */}
      <div style={{ marginLeft: '240px', paddingTop: '80px', paddingBottom: '40px' }} className="px-4">
        {/* Skeleton Header */}
        <div className="mb-4">
          <div className="skeleton-box rounded mb-2" style={{ width: '180px', height: '28px' }}></div>
          <div className="skeleton-box rounded" style={{ width: '260px', height: '14px' }}></div>
        </div>

        {/* Skeleton Row 1: 4 Cards Pink Kotak-Kotak */}
        <div className="row g-3 mb-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="col-lg-3 col-sm-6 col-12">
              <div className="card p-4 border-0 shadow-sm rounded-2 bg-white" style={{ minHeight: '115px' }}>
                <div className="d-flex gap-3 align-items-center">
                  <div className="skeleton-box rounded-2" style={{ width: '48px', height: '48px', flexShrink: 0 }}></div>
                  <div className="flex-grow-1">
                    <div className="skeleton-box rounded mb-2" style={{ width: '65%', height: '14px' }}></div>
                    <div className="skeleton-box rounded mb-1" style={{ width: '90%', height: '22px' }}></div>
                    <div className="skeleton-box rounded" style={{ width: '50%', height: '12px' }}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skeleton Row 2: 3 Cards Kotak-Kotak */}
        <div className="row g-3 mb-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="col-lg-4 col-12">
              <div className="card p-4 border-0 shadow-sm rounded-2 bg-white" style={{ minHeight: '130px' }}>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="skeleton-box rounded" style={{ width: '140px', height: '24px' }}></div>
                  <div className="skeleton-box rounded-circle" style={{ width: '36px', height: '36px' }}></div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="skeleton-box rounded" style={{ width: '100px', height: '14px' }}></div>
                  <div className="skeleton-box rounded" style={{ width: '40px', height: '14px' }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skeleton Row 3: 2 Kotak Chart Besar */}
        <div className="row g-3 mb-4">
          <div className="col-lg-6 col-12">
            <div className="card p-4 border-0 shadow-sm rounded-2 bg-white" style={{ minHeight: '380px' }}>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="skeleton-box rounded" style={{ width: '180px', height: '22px' }}></div>
                <div className="skeleton-box rounded" style={{ width: '100px', height: '30px' }}></div>
              </div>
              <div className="skeleton-box rounded w-100" style={{ height: '280px' }}></div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="card p-4 border-0 shadow-sm rounded-2 bg-white" style={{ minHeight: '380px' }}>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="skeleton-box rounded" style={{ width: '180px', height: '22px' }}></div>
                <div className="skeleton-box rounded" style={{ width: '110px', height: '30px' }}></div>
              </div>
              <div className="d-flex justify-content-center align-items-center my-4">
                <div className="skeleton-box rounded-circle" style={{ width: '160px', height: '160px' }}></div>
              </div>
              <div className="d-flex justify-content-around mt-4 pt-3 border-top">
                <div className="skeleton-box rounded" style={{ width: '60px', height: '30px' }}></div>
                <div className="skeleton-box rounded" style={{ width: '60px', height: '30px' }}></div>
                <div className="skeleton-box rounded" style={{ width: '60px', height: '30px' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Skeleton Row 4: 3 Kotak List Bawah */}
        <div className="row g-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="col-lg-4 col-12">
              <div className="card p-3 border-0 shadow-sm rounded-2 bg-white" style={{ minHeight: '360px' }}>
                <div className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom">
                  <div className="skeleton-box rounded" style={{ width: '130px', height: '20px' }}></div>
                  <div className="skeleton-box rounded" style={{ width: '70px', height: '24px' }}></div>
                </div>
                {[1, 2, 3, 4, 5].map((j) => (
                  <div key={j} className="d-flex align-items-center gap-3 py-2 border-bottom">
                    <div className="skeleton-box rounded" style={{ width: '42px', height: '42px', flexShrink: 0 }}></div>
                    <div className="flex-grow-1">
                      <div className="skeleton-box rounded mb-1" style={{ width: '75%', height: '14px' }}></div>
                      <div className="skeleton-box rounded" style={{ width: '45%', height: '12px' }}></div>
                    </div>
                    <div className="skeleton-box rounded" style={{ width: '40px', height: '20px' }}></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}