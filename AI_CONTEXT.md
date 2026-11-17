# 🤖 AI_CONTEXT.md — Konteks Resmi Proyek Beauty Nails Dashboard

Dokumen ini merupakan panduan & konteks primer untuk AI Assistant ketika beroperasi di dalam repositori ini pada sesi chat berikutnya.

---

## 💅 1. Deskripsi & Tujuan Proyek
* **Nama Proyek**: **Beauty Nails Dashboard**
* **Tujuan**: Platform manajemen operasional salon kuku (nail art) yang mencakup katalog layanan (*Manicure, Pedicure, Gel Polish, Nail Art Custom, Extension*), pemantauan jadwal booking/appointments klien, serta analisis pendapatan (revenue) dan laporan keuangan studio.
* **Tampilan (UI)**: Disesuaikan 100% dengan template Bootstrap asli (menggunakan Bootstrap 5, palet warna *pink-soft* `#ff4da6`, Google Font Poppins, Tabler Icons, dan ApexCharts).
* **Fitur Anti-FOUC & Lazy Loading**: Sistem dilengkapi preloader halus dan pembatas dimensi gambar agar saat website memuat tidak terjadi gambar raksasa/rusak mendadak.

---

## 🏗️ 2. Tech Stack & Arsitektur
* **Framework**: Next.js 14+ (App Router)
* **UI & Styling**: Bootstrap 5.3 + SCSS Modular (`styles/scss/style.scss`), Tabler Icons Webfont (`@tabler/icons-webfont`), Bootstrap Icons
* **Charts**: ApexCharts (`react-apexcharts`)
* **Database**: **Neon PostgreSQL** Serverless via `@neondatabase/serverless`
* **API Engine**: Next.js Serverless Route Handlers (`app/api/*`)
* **Target Deploy**: Vercel (Zero-config full-stack deployment)

---

## 📁 3. Peta Direktori
```text
Template_dashboard.bootstrap/
├── app/
│   ├── api/
│   │   ├── auth/login/route.js       # API Login Neon Postgres
│   │   ├── auth/register/route.js    # API Register Neon Postgres
│   │   └── products/route.js         # API CRUD Layanan Neon Postgres
│   ├── create-product/page.js        # Halaman Appointments / Add Service
│   ├── inventory/page.js             # Halaman Services / Katalog Layanan
│   ├── reports/page.js               # Halaman Reports & Analisis Omset
│   ├── signin/page.js                # Halaman Sign In Akun Staf
│   ├── signup/page.js                # Halaman Sign Up Akun Staf
│   ├── layout.js                     # Root Layout dengan Anti-FOUC inline style
│   └── page.js                       # Dashboard Utama (4 Card Pink + ApexCharts)
├── components/
│   ├── ApexChartsWrapper.js          # Dynamic client-side ApexCharts
│   ├── AppLayout.js                  # Shell layout (Preloader, Topbar, Sidebar, Content)
│   ├── LazyImage.js                  # Komponen gambar dengan lazy loading & skeleton
│   ├── Preloader.js                  # Preloader animasi pink soft halus
│   ├── Sidebar.js                    # Sidebar navigasi asli
│   └── Topbar.js                     # Navbar atas & dropdown notifikasi
├── database/
│   └── neon_schema.sql               # Skema tabel PostgreSQL untuk Neon
├── lib/
│   └── db.js                         # Helper query Neon (@neondatabase/serverless)
├── public/
│   └── assets/images/                # Aset gambar asli produk & avatar
├── styles/
│   └── scss/style.scss               # Berkas SCSS Bootstrap utama
├── .env.example                      # Contoh format DATABASE_URL Neon
├── .env.local                        # Konfigurasi lokal
├── AI_CONTEXT.md                     # File ini (Konteks AI)
└── package.json                      # Dependensi Next.js & Bootstrap
```

---

## 🗄️ 4. Konfigurasi Database Neon
Format variabel lingkungan di `.env.local`:
```env
DATABASE_URL=postgresql://[user]:[password]@[endpoint].neon.tech/neondb?sslmode=require
```
Skema DDL tabel tersedia di `database/neon_schema.sql`.
*Catatan Penting*: Jika `DATABASE_URL` belum diisi, sistem otomatis beralih ke mode *in-memory mock data* sehingga website **tidak akan pernah crash (Error 500)**.

---

## 🚀 5. Cara Menjalankan Lokal
```bash
# 1. Jalankan development server
npm run dev

# 2. Buka di browser
http://localhost:3000
```

### Akun Demo:
* **Email**: `admin@nails.com`
* **Password**: `admin123`