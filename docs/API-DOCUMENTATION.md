# 🔌 Dokumentasi REST API Backend

Dokumentasi ini menjelaskan seluruh spesifikasi endpoint REST API pada server backend Express (`http://localhost:3001`).

---

## 🌐 1. Informasi Umum

- **Base URL**: `http://localhost:3001`
- **Format Pertukaran Data**: JSON (`application/json`)
- **Kebijakan CORS**: Diaktifkan untuk seluruh origin (`app.use(cors())`).

---

## 🔑 2. Endpoint Autentikasi

### A. Registrasi Pengguna Baru
Mendaftarkan akun baru ke sistem.

- **URL**: `/register`
- **Method**: `POST`
- **Headers**:
  ```http
  Content-Type: application/json
  ```

#### Request Body
```json
{
  "fullName": "Salsa Nail Artist",
  "email": "salsa@example.com",
  "password": "secretpassword"
}
```

#### Respons Berhasil (`200 OK`)
```json
{
  "message": "Register berhasil"
}
```

#### Respons Gagal (`500 Internal Server Error`)
```json
{
  "message": "Register gagal"
}
```

---

### B. Login Pengguna
Memverifikasi kredensial email dan password pengguna untuk masuk ke dashboard.

- **URL**: `/login`
- **Method**: `POST`
- **Headers**:
  ```http
  Content-Type: application/json
  ```

#### Request Body
```json
{
  "email": "salsa@example.com",
  "password": "secretpassword"
}
```

#### Respons Berhasil (`200 OK`)
```json
{
  "message": "Login berhasil",
  "user": {
    "id": 1,
    "name": "Salsa Nail Artist",
    "email": "salsa@example.com",
    "password": "secretpassword"
  }
}
```

#### Respons Kredensial Salah (`401 Unauthorized`)
```json
{
  "message": "Email / Password salah"
}
```

---

## 📦 3. Endpoint Produk / Layanan (Rekomendasi Implementasi)

Berikut adalah cetak biru (*blueprint*) endpoint untuk memperbaiki request 404 pada [src/assets/js/main.js](file:///d:/joki_child/salsa-/Nail-art/src/assets/js/main.js):

### A. Mendapatkan Semua Layanan/Produk
- **URL**: `/products`
- **Method**: `GET`
- **Deskripsi**: Mengambil seluruh daftar layanan nail art dari tabel `products`.

#### Respons Sukses (`200 OK`)
```json
[
  {
    "id": 1,
    "sku": "PRD001",
    "name": "Gel Polish",
    "category": "Basic",
    "price": 75000,
    "stock": 120,
    "duration_minutes": 60,
    "description": "Layanan cat kuku gel tahan lama.",
    "image": "product-1.png"
  }
]
```

---

### B. Menambahkan Layanan/Produk Baru
- **URL**: `/products`
- **Method**: `POST`
- **Deskripsi**: Menyimpan data layanan baru dari form `create-product.html`.

#### Request Body
```json
{
  "sku": "PRD004",
  "name": "Nail Art Custom",
  "category": "Custom",
  "price": 150000,
  "stock": 50,
  "duration_minutes": 90,
  "description": "Desain nail art bebas sesuai permintaan klien."
}
```

#### Respons Sukses (`201 Created`)
```json
{
  "message": "Produk berhasil ditambahkan",
  "productId": 4
}
```

---

## 💻 4. Contoh Pengujian Menggunakan cURL

### Pengujian Registrasi:
```bash
curl -X POST http://localhost:3001/register \
  -H "Content-Type: application/json" \
  -d "{\"fullName\":\"Budi Santoso\",\"email\":\"budi@test.com\",\"password\":\"budi123\"}"
```

### Pengujian Login:
```bash
curl -X POST http://localhost:3001/login \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"budi@test.com\",\"password\":\"budi123\"}"
```
