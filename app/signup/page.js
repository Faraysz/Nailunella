'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ text: '', type: '' });

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ text: '', type: '' });

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email, password }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({ text: 'Registrasi berhasil! Mengalihkan ke login...', type: 'success' });
        setTimeout(() => {
          router.push('/signin');
        }, 1500);
      } else {
        setStatus({ text: data.message || 'Registrasi gagal.', type: 'danger' });
      }
    } catch (err) {
      setStatus({ text: 'Kesalahan server backend.', type: 'danger' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100 py-5">
      <div className="card shadow-sm border-0" style={{ maxWidth: '420px', width: '100%' }}>
        <div className="card-body p-5">
          <div className="text-center mb-3">
            <Link href="/" className="mb-4 d-inline-block text-decoration-none">
              <img 
                src="/assets/images/logo-nails.png" 
                alt="" 
                width="36" 
                height="36"
                loading="lazy"
                style={{ width: '36px', height: '36px' }}
              />
              <span className="ms-2 fs-5 fw-bold text-dark" style={{ fontFamily: 'Poppins, sans-serif' }}>
                BEAUTY NAILS
              </span>
            </Link>
            <h1 className="card-title mb-4 h5 fw-bold text-dark">Create an account</h1>
          </div>

          {status.text && (
            <div className={`alert alert-${status.type} py-2 small`} role="alert">
              {status.text}
            </div>
          )}

          <form onSubmit={handleRegister} className="mt-3">
            <div className="mb-3">
              <label htmlFor="name" className="form-label small fw-semibold">Full Name</label>
              <input
                id="name"
                type="text"
                className="form-control"
                placeholder="Full Name"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label small fw-semibold">Email address</label>
              <input
                id="email"
                type="email"
                className="form-control"
                placeholder="name@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label small fw-semibold">Password</label>
              <input
                id="password"
                type="password"
                className="form-control"
                placeholder="Password (min 6 chars)"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className="btn btn-primary w-100 fw-semibold" type="submit" disabled={loading}>
              {loading ? 'Creating account...' : 'Sign up'}
            </button>
          </form>

          <div className="text-center mt-3 small text-muted">
            Already have an account?{' '}
            <Link href="/signin" className="link-primary text-decoration-none fw-semibold">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}