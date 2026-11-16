# 📚 Dokumentasi Proyek Beauty Nails Studio

Selamat datang di pusat dokumentasi resmi proyek **Beauty Nails Studio** (Dashboard Manajemen Salon & Inventaris Nail Art).

Semua panduan teknis telah dipecah ke dalam beberapa file terpisah di dalam direktori `docs/` ini agar mudah dibaca dan dipelajari:

---

## 📑 Daftar Berkas Dokumentasi

| File | Deskripsi Isi |
| :--- | :--- |
| 🚀 **[PANDUAN-MENJALANKAN.md](PANDUAN-MENJALANKAN.md)** | **Wajib Dibaca**: Panduan lengkap langkah demi langkah cara menginstal dependensi, setup database, menyalakan server backend & frontend, hingga alur login/register. |
| 🗄️ **[DATABASE-SETUP.md](DATABASE-SETUP.md)** | Panduan konfigurasi MySQL, penjelasan struktur kolom tabel `users` dan `products`, serta cara import database. |
| 📊 **[ANALISIS-PROYEK.md](ANALISIS-PROYEK.md)** | Analisis menyeluruh mengenai arsitektur sistem, tumpukan teknologi, evaluasi fitur, temuan bug teknis/keamanan, dan roadmap pengembangan. |
| 🔌 **[API-DOCUMENTATION.md](API-DOCUMENTATION.md)** | Spesifikasi lengkap endpoint REST API backend Express (request, response, status code, contoh curl). |
| 📜 **[database_schema.sql](database_schema.sql)** | Berkas skrip SQL DDL & DML data awal siap pakai untuk langsung di-import ke phpMyAdmin atau MySQL CLI. |

---

## ⚡ Ringkasan Cepat Menjalankan Aplikasi

Jika Anda sudah familiar dengan lingkungan Node.js & MySQL:

1. **MySQL**: Buat database `test_db` dan import [database_schema.sql](database_schema.sql).
2. **Backend**:
   ```bash
   cd backend
   npm install
   node index.js
   ```
   *(Berjalan di port `3001`)*
3. **Frontend**:
   ```bash
   npm install
   npm run dev
   ```
   *(Berjalan di port `3000`)*
4. Buka `http://localhost:3000/signup.html` untuk mendaftar akun atau `signin.html` untuk login.
