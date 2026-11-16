# 📊 Analisis Komprehensif Proyek Beauty Nails Studio

Dokumen ini memuat analisis teknis mendalam mengenai arsitektur, struktur kode, fitur fungsional, temuan masalah teknis, serta rekomendasi pengembangan untuk proyek **Beauty Nails Studio**.

---

## 📌 1. Latar Belakang & Deskripsi Proyek

Proyek ini merupakan modifikasi dan adaptasi dari template open-source **InApp Inventory Dashboard** (oleh CodesCandy & ThemeWagon) menjadi aplikasi web manajemen salon kuku/nail art bernama **Beauty Nails Studio**.

Aplikasi dirancang sebagai panel admin/operasional studio yang memiliki fungsionalitas:
1. Registrasi dan otentikasi login pengguna/staf.
2. Tampilan ringkasan performa bisnis (pendapatan, klien, pesanan).
3. Katalog inventaris dan manajemen layanan nail art (*Manicure, Pedicure, Gel Polish, Nail Art Extension*).
4. Pembuatan/penambahan data layanan salon baru.
5. Laporan statistik penjualan dan analisis performa.

---

## 🏗️ 2. Arsitektur & Tumpukan Teknologi (Tech Stack)

### A. Frontend (Client-Side)
- **Bundler & Dev Server**: [Vite 6.4.1](file:///d:/joki_child/salsa-/Nail-art/vite.config.js)
  - Mengatur multi-page application (MPA) di folder `src/`.
  - Mengonfigurasi live reload, SCSS compilation, dan optimasi output build ke folder `dist/`.
- **User Interface (UI)**:
  - **Bootstrap 5.3.8** untuk sistem grid dan komponen visual.
  - **SCSS / Sass** untuk kustomisasi tema, warna utama (palet merah/pink khusus salon kuku), typography (font Google Poppins), dan styling komponen.
- **Ikon**: Tabler Icons Webfont (`@tabler/icons-webfont`) dan Bootstrap Icons.
- **Grafik & Visualisasi**: ApexCharts (`apexcharts`) untuk diagram garis, batang, dan metrik analitik.
- **Logika Frontend**: Vanilla JavaScript (ES Module) yang berinteraksi langsung dengan DOM dan REST API backend melalui Fetch API.

### B. Backend (Server-Side)
- **Runtime & Framework**: Node.js dengan **Express 5.2.1**.
- **Middleware**:
  - `cors`: Mengizinkan komunikasi lintas domain antara frontend (port 3000) dan backend (port 3001).
  - `express.json()`: Parsing payload JSON dari request body HTTP.
- **Database Driver**: `mysql2` untuk koneksi langsung ke server database MySQL menggunakan pooled query sederhana.

### C. Database (Storage)
- **RDBMS**: MySQL.
- **Nama Database Default**: `test_db`.
- **Tabel Utama**: `users` (penyimpan data nama, email, password akun).

---

## 📁 3. Pemetaan Direktori & Komponen

```text
Nail-art/
├── .github/workflows/       # Otomatisasi GitHub Release
├── backend/                 # Sub-proyek server API Node.js
│   ├── db.js                # Koneksi ke database MySQL
│   ├── index.js             # Route Express (POST /register, POST /login)
│   ├── package.json         # Dependensi backend (express, cors, mysql2)
│   └── node_modules/        # Dependensi lokal backend
├── docs/                    # Dokumentasi lengkap & skrip panduan
│   ├── ANALISIS-PROYEK.md   # File ini (analisis mendalam)
│   ├── API-DOCUMENTATION.md # Spesifikasi endpoint API
│   ├── DATABASE-SETUP.md    # Panduan database & DDL
│   ├── PANDUAN-MENJALANKAN.md# Petunjuk step-by-step menjalankan sistem
│   ├── README.md            # Indeks dokumentasi
│   └── database_schema.sql  # Skema SQL siap import
├── src/                     # Source code frontend
│   ├── assets/
│   │   ├── images/          # Aset gambar produk nail art, logo, avatar, favicon
│   │   ├── js/
│   │   │   ├── chart.js     # Inisialisasi dan konfigurasi ApexCharts
│   │   │   ├── custom.js    # Penggabungan modul chart & sidebar
│   │   │   ├── main.js      # Handler form login/register, integrasi fetch backend
│   │   │   └── sidebar.js   # Interaktivitas collapse/expand navigasi samping
│   │   └── scss/            # Berkas styling SCSS modular
│   ├── index.html           # Halaman Dashboard Utama
│   ├── inventory.html       # Katalog Layanan Nail Art
│   ├── create-product.html  # Formulir Tambah Layanan/Produk Baru
│   ├── reports.html         # Halaman Laporan & Analisis
│   ├── signin.html          # Halaman Masuk Akun
│   ├── signup.html          # Halaman Pendaftaran Akun
│   ├── docs.html            # Dokumentasi template bawaan
│   └── 404-error.html       # Halaman fallback 404
├── package.json             # Dependensi utama proyek (Vite, Bootstrap, ApexCharts)
├── vite.config.js           # Konfigurasi build & dev server Vite
└── README.md                # README root proyek
```

---

## 🔍 4. Evaluasi Fitur & Status Saat Ini

| Fitur / Modul | Status Implementasi | Catatan & Analisis |
| :--- | :--- | :--- |
| **Registrasi User** | ✅ Berfungsi Penuh | Mengirim data ke `POST /register`, menyimpan ke tabel `users`. Validasi input form berjalan di sisi client. |
| **Login User** | ✅ Berfungsi Penuh | Mengirim data ke `POST /login`, menyimpan info user di `localStorage` browser dan redirect ke `index.html`. |
| **Dashboard Metrik** | ⚠️ Semi-Statis | UI dan grafik ApexCharts sangat interaktif dan estetis, namun data angka dan grafik masih bersumber dari hardcoded JS, belum terhubung ke database. |
| **Daftar Layanan** | ⚠️ Statis (HTML) | Tampilan tabel layanan nail art sudah disesuaikan dengan gambar dan harga realistis (Rp), namun baris tabel masih tertulis langsung di HTML. |
| **Tambah Layanan** | ❌ Belum Terhubung | Tampilan form sudah ada di `create-product.html`, tetapi submit listener di `main.js` belum diimplementasikan, dan dropdown kategori masih berisi item toko elektronik/pakaian. |
| **Laporan & Analitik** | ⚠️ Statis | Komponen grafik berfungsi normal, tetapi data penjualan masih dummy. |

---

## ⚠️ 5. Temuan Masalah Teknis & Potensi Risiko

### 1. Masalah Keamanan: Password Disimpan dalam Plain Text
- **Lokasi**: [backend/index.js:12-14](file:///d:/joki_child/salsa-/Nail-art/backend/index.js#L12-L14)
- **Detail**: Password pengguna langsung dimasukkan ke database tanpa proses hashing kriptografi:
  ```javascript
  const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
  ```
- **Dampak**: Jika database terekspos, password semua pengguna dapat dibaca langsung.
- **Rekomendasi**: Gunakan library `bcrypt` atau `argon2` untuk melakukan hash password sebelum disimpan, dan verifikasi menggunakan `bcrypt.compare()` saat login.

### 2. Request Error 404 Otomatis di Frontend
- **Lokasi**: [src/assets/js/main.js:12-16](file:///d:/joki_child/salsa-/Nail-art/src/assets/js/main.js#L12-L16)
- **Detail**: Setiap halaman memuat `main.js`, script langsung mengeksekusi:
  ```javascript
  fetch('http://localhost:3001/products')
  ```
  Namun backend tidak memiliki route `app.get('/products')`.
- **Dampak**: Muncul error merah `GET http://localhost:3001/products 404 (Not Found)` di console developer browser.
- **Rekomendasi**: Lengkapi route `GET /products` pada backend yang mengambil data dari tabel `products`.

### 3. Kredensial Database Terbuka & Ketiadaan Konfigurasi Lingkungan (`.env`)
- **Lokasi**: [backend/db.js:3-8](file:///d:/joki_child/salsa-/Nail-art/backend/db.js#L3-L8)
- **Detail**: Host, user, password, dan nama database di-hardcode di dalam file JavaScript.
- **Rekomendasi**: Terapkan library `dotenv` sehingga konfigurasi database dapat diatur lewat file `.env`.

### 4. Inkonsistensi Kategori pada Formulir Layanan
- **Lokasi**: [src/create-product.html:202-208](file:///d:/joki_child/salsa-/Nail-art/src/create-product.html#L202-L208)
- **Detail**: Dropdown kategori masih memakai opsi bawaan template:
  `<option value="electronics">Electronics</option>`, `<option value="clothing">Clothing</option>`.
- **Rekomendasi**: Ubah opsi kategori menjadi kategori layanan salon: `Manicure`, `Pedicure`, `Gel Art`, `Nail Extension`, `Nail Care`.

---

## 🚀 6. Rencana Peningkatan (Roadmap Rekomendasi)

1. **Prioritas Tinggi (High Priority)**:
   - Tambahkan route `GET /products` dan `POST /products` di `backend/index.js`.
   - Hubungkan form tambah produk di `create-product.html` ke API backend.
   - Buat tabel di `inventory.html` dirender secara dinamis melalui data API.
   - Pasang hashing password (`bcrypt`) pada alur registrasi & login.

2. **Prioritas Menengah (Medium Priority)**:
   - Tambahkan session guard: redirect ke `signin.html` jika user mencoba mengakses `index.html` tanpa token/data user di `localStorage`.
   - Tambahkan tombol Logout di navbar/sidebar yang menghapus session `localStorage`.
   - Perbaiki opsi kategori layanan pada `create-product.html`.

3. **Prioritas Jangka Panjang (Future Enhancements)**:
   - Modul Booking / Appointment: Kalender reservasi jadwal layanan untuk pelanggan salon.
   - Export Data: Fungsionalitas tombol Export Excel dan PDF pada daftar layanan.
