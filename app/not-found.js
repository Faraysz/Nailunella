import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div style={{ maxWidth: '500px', width: '100%' }}>
        <div className="text-center">
          <div className="mb-4">
            <Link href="/" className="d-inline-block">
              <img 
                src="/assets/images/logo-nails.png" 
                alt="Logo" 
                height="50"
                style={{ height: '50px', width: 'auto', objectFit: 'contain' }}
              />
            </Link>
          </div>

          <h1 className="display-1 fw-bold text-pink mb-2">404</h1>
          <h2 className="card-title h4 mb-3 fw-bold text-dark">Page Not Found</h2>
          <p className="text-muted mb-4">Sorry, the page you are looking for doesn't exist or has been moved.</p>

          <Link href="/" className="btn btn-primary px-4 fw-semibold">
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}