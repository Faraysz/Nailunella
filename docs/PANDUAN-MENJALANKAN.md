# 🚀 Panduan Menjalankan Proyek (Beauty Nails Studio)

Panduan ini berisi instruksi lengkap langkah demi langkah untuk menjalankan proyek **Beauty Nails Studio** di komputer lokal (Windows/macOS/Linux).

---

## 📋 1. Prasyarat Sistem

Sebelum menjalankan aplikasi, pastikan komputer Anda telah terinstal:
1. **Node.js** (Versi 18 LTS atau lebih baru) & **NPM**
   - Cek dengan perintah:
     ```bash
     node -v
     npm -v
     ```
2. **Server MySQL** (Bisa melalui **XAMPP**, **Laragon**, **WampServer**, atau **MySQL Community Server**)
   - Pastikan service MySQL sedang aktif (Running di port default `3306`).
3. **Web Browser** modern (Chrome, Edge, Firefox, Brave, dll.).

---

## 🗄️ 2. Langkah 1: Persiapan Database MySQL

Aplikasi backend menggunakan database bernama `test_db` dengan user `root` tanpa password (konfigurasi standar XAMPP/Laragon).

### Cara A: Menggunakan phpMyAdmin (XAMPP / Laragon)
1. Buka browser dan buka `http://localhost/phpmyadmin`.
2. Klik tab **Databases** (Basis Data).
3. Buat database baru dengan nama:
   ```text
   test_db
   ```
4. Masuk ke database `test_db`, lalu klik tab **Import**.
5. Pilih file skema database yang sudah disediakan di:
   ```text
   docs/database_schema.sql
   ```
6. Klik tombol **Import** / **Go** di bagian bawah.

### Cara B: Menggunakan Terminal / Command Prompt MySQL
Buka Command Prompt atau PowerShell, lalu jalankan:
```bash
mysql -u root -p < docs/database_schema.sql
```
*(Tekan Enter jika root MySQL tidak menggunakan password).*

> 💡 **Catatan Kredensial Database**:  
> Jika MySQL Anda menggunakan password, sesuaikan file konfigurasi di [backend/db.js](../backend/db.js):
> ```javascript
> const db = mysql.createConnection({
>   host: 'localhost',
>   user: 'root',
>   password: 'PASSWORD_ANDA_DISINI', // isi jika ada password
>   database: 'test_db'
> });
> ```

---

## ⚙️ 3. Langkah 2: Menjalankan Server Backend (API)

Backend bertugas mengelola proses autentikasi (Registrasi & Login) dan data di database.

1. Buka terminal baru (PowerShell / Command Prompt / Git Bash).
2. Arahkan ke direktori `backend`:
   ```bash
   cd backend
   ```
3. Install dependensi (jika belum pernah diinstall):
   ```bash
   npm install
   ```
4. Jalankan server backend:
   ```bash
   node index.js
   ```
5. Jika berhasil, terminal akan menampilkan output:
   ```text
   ✅ MySQL Connected
   🚀 Server jalan di http://localhost:3001
   ```
   > ⚠️ **PENTING**: Biarkan terminal backend ini tetap terbuka dan berjalan selama Anda menguji aplikasi.

---

## 🎨 4. Langkah 3: Menjalankan Server Frontend (Vite)

Frontend menggunakan Vite bundler dengan Bootstrap 5 & SCSS.

1. Buka **terminal baru** (jangan menutup terminal backend).
2. Pastikan posisi terminal berada di folder utama proyek (root):
   ```bash
   cd d:\joki_child\salsa-\Nail-art
   ```
3. Install dependensi frontend (jika belum):
   ```bash
   npm install
   ```
4. Jalankan development server:
   ```bash
   npm run dev
   ```
5. Terminal akan menampilkan tautan server lokal:
   ```text
   VITE v6.4.1  ready in ... ms

   ➜  Local:   http://localhost:3000/
   ➜  Network: use --host to expose
   ```
   *Browser biasanya akan terbuka secara otomatis ke alamat `http://localhost:3000`*.

---

## 🧪 5. Langkah 4: Pengujian & Alur Penggunaan

Setelah kedua server (Backend port 3001 & Frontend port 3000) menyala:

1. **Registrasi Akun Baru**:
   - Buka browser ke: `http://localhost:3000/signup.html`
   - Masukkan Nama Lengkap, Email, dan Password (minimal 6 karakter).
   - Klik **Sign up**. Jika sukses, akan muncul alert notifikasi berhasil dan otomatis diarahkan ke halaman login.
2. **Login Akun**:
   - Buka: `http://localhost:3000/signin.html`
   - Masukkan email dan password yang baru saja didaftarkan (atau gunakan akun default: `admin@nails.com` / `admin123`).
   - Klik **Sign in**. Jika login valid, data user disimpan di `localStorage` dan browser membuka dashboard utama.
3. **Mengakses Halaman Dashboard & Fitur**:
   - **Dashboard Utama**: `http://localhost:3000/index.html`
   - **Daftar Layanan Nail Art**: `http://localhost:3000/inventory.html`
   - **Tambah Layanan**: `http://localhost:3000/create-product.html`
   - **Laporan & Analitik**: `http://localhost:3000/reports.html`

---

## 🛠️ 6. Troubleshooting (Penyelesaian Masalah)

### 🔴 Problem 1: `ECONNREFUSED` saat menjalankan backend
- **Penyebab**: Server MySQL belum dinyalakan.
- **Solusi**: Buka XAMPP Control Panel dan pastikan modul **MySQL** dalam status **Running** (berwarna hijau).

### 🔴 Problem 2: Port 3000 atau 3001 sudah terpakai
- **Penyebab**: Ada aplikasi lain yang menggunakan port tersebut atau server sebelumnya belum dimatikan.
- **Solusi**: Tutup proses terminal sebelumnya atau ubah port pada [vite.config.js](../vite.config.js) (untuk frontend) atau [backend/index.js](../backend/index.js) (untuk backend).

### 🔴 Problem 3: Muncul error 404 untuk `/products` di Console Browser
- **Penyebab**: Di [src/assets/js/main.js](../src/assets/js/main.js), terdapat panggilan `fetch('http://localhost:3001/products')` sedangkan endpoint tersebut belum didefinisikan di backend.
- **Solusi**: Hal ini tidak menghentikan aplikasi, namun dapat diperbaiki dengan menambahkan route `app.get('/products', ...)` di [backend/index.js](../backend/index.js).
