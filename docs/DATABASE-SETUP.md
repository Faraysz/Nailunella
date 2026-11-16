# 🗄️ Panduan & Struktur Database MySQL

Dokumen ini menjelaskan struktur basis data, relasi tabel, panduan setup, serta skrip SQL yang digunakan dalam proyek **Beauty Nails Studio**.

---

## 📌 1. Informasi Database

| Parameter | Nilai Default | Lokasi Konfigurasi |
| :--- | :--- | :--- |
| **DBMS** | MySQL 5.7+ / 8.0+ / MariaDB 10.4+ | XAMPP / Laragon / Standalone |
| **Host** | `localhost` (127.0.0.1) | [backend/db.js](file:///d:/joki_child/salsa-/Nail-art/backend/db.js) |
| **Port** | `3306` | Standar MySQL |
| **Username** | `root` | [backend/db.js](file:///d:/joki_child/salsa-/Nail-art/backend/db.js) |
| **Password** | *(kosong)* | [backend/db.js](file:///d:/joki_child/salsa-/Nail-art/backend/db.js) |
| **Nama Database** | `test_db` | [backend/db.js](file:///d:/joki_child/salsa-/Nail-art/backend/db.js) |

---

## 🏛️ 2. Struktur Tabel

### A. Tabel `users`
Tabel ini digunakan untuk menyimpan akun pengguna/admin studio nail art untuk proses autentikasi (Registrasi dan Login).

| Kolom | Tipe Data | Keterangan |
| :--- | :--- | :--- |
| `id` | `INT` (Auto Increment, Primary Key) | ID unik pengguna |
| `name` | `VARCHAR(255)` NOT NULL | Nama lengkap pengguna |
| `email` | `VARCHAR(255)` NOT NULL, UNIQUE | Alamat email (digunakan untuk login) |
| `password` | `VARCHAR(255)` NOT NULL | Kata sandi pengguna |
| `created_at` | `TIMESTAMP` DEFAULT CURRENT_TIMESTAMP | Waktu akun didaftarkan |

### B. Tabel `products` (Katalog Layanan & Produk)
Tabel ini disiapkan untuk menyimpan data katalog layanan manicure, pedicure, dan nail art.

| Kolom | Tipe Data | Keterangan |
| :--- | :--- | :--- |
| `id` | `INT` (Auto Increment, Primary Key) | ID unik produk/layanan |
| `sku` | `VARCHAR(50)` NOT NULL, UNIQUE | Kode layanan (misal: `PRD001`) |
| `name` | `VARCHAR(255)` NOT NULL | Nama layanan (misal: `Gel Polish`) |
| `category` | `VARCHAR(100)` NOT NULL | Kategori (Basic, Manicure, Pedicure) |
| `price` | `DECIMAL(12,2)` NOT NULL | Tarif/harga layanan (IDR) |
| `stock` | `INT` DEFAULT 0 | Jumlah stok / kuota kapasitas klien |
| `duration_minutes` | `INT` DEFAULT 60 | Estimasi durasi pengerjaan (menit) |
| `description` | `TEXT` | Deskripsi detail layanan |
| `image` | `VARCHAR(255)` | Nama berkas gambar produk |
| `created_at` | `TIMESTAMP` DEFAULT CURRENT_TIMESTAMP | Waktu pencatatan data |

---

## 📥 3. Cara Setup & Import Skema SQL

File skema SQL telah disediakan lengkap pada:  
👉 [docs/database_schema.sql](file:///d:/joki_child/salsa-/Nail-art/docs/database_schema.sql)

### Opsi 1: Melalui phpMyAdmin (Paling Mudah)
1. Nyalakan **Apache** dan **MySQL** di control panel XAMPP atau Laragon.
2. Buka peramban (browser) ke: `http://localhost/phpmyadmin`
3. Klik tombol **New** di menu sebelah kiri.
4. Isi Database name dengan `test_db` (Collation: `utf8mb4_general_ci` atau biarkan default), lalu klik **Create**.
5. Pastikan database `test_db` sedang dipilih (aktif).
6. Masuk ke tab **Import** pada bagian atas layar.
7. Klik tombol **Browse your computer...** / **Choose File** dan arahkan ke file `docs/database_schema.sql`.
8. Gulir ke bawah lalu klik **Import**.

### Opsi 2: Melalui Command Line / Terminal
Jika Anda memiliki MySQL CLI yang terdaftar di PATH lingkungan:
```bash
# 1. Masuk ke folder proyek
cd d:\joki_child\salsa-\Nail-art

# 2. Eksekusi skrip SQL langsung
mysql -u root -p < docs/database_schema.sql
```
*(Bila root tidak memiliki password, tekan tombol Enter saat diminta).*

---

## 🔍 4. Verifikasi & Pengujian Database

Untuk memastikan tabel sudah terbentuk dan data awal berhasil masuk:
```sql
USE test_db;

-- 1. Cek tabel yang ada
SHOW TABLES;

-- 2. Cek data user default
SELECT id, name, email, created_at FROM users;

-- 3. Cek data katalog produk/layanan awal
SELECT sku, name, category, price, stock FROM products;
```

---

## ⚠️ 5. Catatan Konfigurasi Password Database

Jika instalasi MySQL Anda memiliki password tertentu (misal: password `root` adalah `admin` atau `rahasia`), Anda harus memperbarui berkas koneksi di [backend/db.js](file:///d:/joki_child/salsa-/Nail-art/backend/db.js):

```javascript
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'PASSWORD_ANDA_DISINI', // <- Ganti di sini
  database: 'test_db'
});

db.connect((err) => {
  if (err) {
    console.error('DB Error:', err);
    return;
  }
  console.log('✅ MySQL Connected');
});

module.exports = db;
```
