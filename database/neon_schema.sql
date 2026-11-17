-- ========================================================
-- BEAUTY NAILS DASHBOARD - NEON POSTGRESQL SCHEMA
-- Engine: PostgreSQL 15+ (Serverless Neon)
-- ========================================================

-- 1. Tabel users (Autentikasi Staf & Admin)
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'staff',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Data Default Administrator
INSERT INTO users (name, email, password, role)
VALUES ('Admin Nails', 'admin@nails.com', 'admin123', 'admin')
ON CONFLICT (email) DO NOTHING;

-- 2. Tabel products / services (Katalog Layanan Nail Art)
CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  sku VARCHAR(50) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  price NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  duration_minutes INT DEFAULT 60,
  stock INT NOT NULL DEFAULT 50,
  clients INT NOT NULL DEFAULT 0,
  description TEXT,
  image VARCHAR(255),
  status VARCHAR(20) DEFAULT 'Active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Data Awal Layanan Nail Art
INSERT INTO products (sku, name, category, price, duration_minutes, stock, clients, description, image, status)
VALUES
  ('PRD001', 'Gel Polish', 'Basic', 75000.00, 60, 120, 120, 'Layanan cat kuku gel tahan lama dengan aneka pilihan warna glossy.', '/assets/images/product-1.png', 'Active'),
  ('PRD002', 'Manicure Basic', 'Manicure', 75000.00, 60, 100, 100, 'Pembersihan kuku, perapian kutikula, dan perawatan dasar kuku.', '/assets/images/product-2.png', 'Active'),
  ('PRD003', 'Pedicure Spa', 'Basic', 98000.00, 60, 200, 200, 'Perawatan spa kaki menyeluruh untuk relaksasi dan kebersihan kuku kaki.', '/assets/images/product-3.png', 'Active'),
  ('PRD004', 'Nail Art Custom', 'Nail Art', 150000.00, 90, 80, 95, 'Desain lukis kuku artistik sesuai permintaan klien.', '/assets/images/product-4.png', 'Active'),
  ('PRD005', 'Acrylic Extension', 'Extension', 220000.00, 120, 60, 54, 'Penyambungan kuku akrilik kuat dan presisi.', '/assets/images/product-5.png', 'Active')
ON CONFLICT (sku) DO NOTHING;