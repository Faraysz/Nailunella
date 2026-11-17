'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState('admin@nails.com');
  const [password, setPassword] = useState('admin123');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        if (typeof window !== 'undefined') {
          localStorage.setItem('user', JSON.stringify(data.user));
        }
        router.push('/');
      } else {
        setErrorMsg(data.message || 'Login gagal.');
      }
    } catch (err) {
      setErrorMsg('Koneksi server gagal.');
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
              
            </Link>
            <h1 className="card-title mb-4 h5 fw-bold text-dark">Sign in to your account</h1>
          </div>

          {errorMsg && (
            <div className="alert alert-danger py-2 small" role="alert">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleLogin} className="mt-3">
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
              <label htmlFor="password" className="form-label d-flex justify-content-between small fw-semibold">
                <span>Password</span>
                <a href="#!" className="small link-primary text-decoration-none">Forgot Password?</a>
              </label>
              <input
                id="password"
                type="password"
                className="form-control"
                placeholder="Password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check">
                <input id="remember" className="form-check-input" type="checkbox" defaultChecked />
                <label className="form-check-label small text-muted" htmlFor="remember">
                  Remember me
                </label>
              </div>
            </div>

            <button className="btn btn-primary w-100 fw-semibold" type="submit" disabled={loading}>
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>

          <div className="text-center mt-3 small text-muted">
            Don't have an account?{' '}
            <Link href="/signup" className="link-primary text-decoration-none fw-semibold">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}