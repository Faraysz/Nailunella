/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
  experimental: {
    cpus: 1,
    workerThreads: false,
  },
  async rewrites() {
    return [
      {
        source: '/index.html',
        destination: '/',
      },
      {
        source: '/inventory.html',
        destination: '/inventory',
      },
      {
        source: '/create-product.html',
        destination: '/create-product',
      },
      {
        source: '/reports.html',
        destination: '/reports',
      },
      {
        source: '/signin.html',
        destination: '/signin',
      },
      {
        source: '/signup.html',
        destination: '/signup',
      },
    ];
  },
};

export default nextConfig;