'use client';

import { useState, useEffect } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Beri jeda sangat singkat agar browser selesai parsing CSS & DOM
    const timer = setTimeout(() => {
      setLoading(false);
    }, 280);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="page-preloader">
      <div className="preloader-spinner"></div>
      <div className="preloader-text">Memuat Beauty Nails Dashboard...</div>
    </div>
  );
}