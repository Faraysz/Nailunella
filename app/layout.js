import '@/styles/scss/style.scss';

export const metadata = {
  title: 'Beauty Nails Dashboard',
  description: 'Beauty Nails Studio Management System',
  icons: {
    icon: '/assets/images/logo-nails.png',
    apple: '/assets/images/logo-nails.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap" 
          rel="stylesheet" 
        />
        {/* CSS Statis Bootstrap Template Langsung Siap */}
        <link rel="stylesheet" href="/assets/css/style.css" />

        {/* Global Shimmer Skeleton Kotak-Kotak & Anti FOUC */}
        <style dangerouslySetInnerHTML={{
          __html: `
            html, body, button, input, select, textarea, h1, h2, h3, h4, h5, h6, p, span, a, table, tr, td, th {
              font-family: 'Poppins', sans-serif !important;
            }
            img { max-width: 100%; height: auto; }
            .avatar { object-fit: cover !important; flex-shrink: 0 !important; }
            .avatar-xs { width: 1.5rem !important; height: 1.5rem !important; }
            .avatar-sm { width: 2rem !important; height: 2rem !important; }
            .avatar-md { width: 2.5rem !important; height: 2.5rem !important; }
            .avatar-lg { width: 3.5rem !important; height: 3.5rem !important; }
            .topbar img.avatar { width: 32px !important; height: 32px !important; }

            /* Skeleton Shimmer Box Kotak-Kotak */
            .skeleton-box {
              background: linear-gradient(90deg, #f0f0f2 25%, #e4e4e8 50%, #f0f0f2 75%);
              background-size: 200% 100%;
              animation: skeleton-shimmer 1.4s infinite cubic-bezier(0.4, 0, 0.6, 1);
            }
            @keyframes skeleton-shimmer {
              0% { background-position: 200% 0; }
              100% { background-position: -200% 0; }
            }
          `
        }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}