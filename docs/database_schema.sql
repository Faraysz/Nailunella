-- ========================================================
-- Database Schema untuk Proyek Beauty Nails Studio
-- Nama Database: test_db (sesuai backend/db.js)
-- ========================================================

CREATE DATABASE IF NOT EXISTS `test_db` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `test_db`;

-- --------------------------------------------------------
-- 1. Tabel users (Digunakan untuk Register & Login)
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `users` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Data Awal / Akun Dummy untuk Pengujian
INSERT INTO `users` (`name`, `email`, `password`) VALUES
('Admin Nails', 'admin@nails.com', 'admin123')
ON DUPLICATE KEY UPDATE `email`=`email`;

-- --------------------------------------------------------
-- 2. Tabel services / products (Persiapan untuk fitur katalog & inventaris)
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `products` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `sku` VARCHAR(50) NOT NULL UNIQUE,
  `name` VARCHAR(255) NOT NULL,
  `category` VARCHAR(100) NOT NULL,
  `price` DECIMAL(12, 2) NOT NULL DEFAULT 0.00,
  `stock` INT NOT NULL DEFAULT 0,
  `duration_minutes` INT DEFAULT 60,
  `description` TEXT,
  `image` VARCHAR(255) DEFAULT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Data Layanan Nail Art Awal
INSERT INTO `products` (`sku`, `name`, `category`, `price`, `stock`, `duration_minutes`, `description`, `image`) VALUES
('PRD001', 'Gel Polish', 'Basic', 75000.00, 120, 60, 'Layanan cat kuku gel tahan lama dengan aneka pilihan warna glossy.', 'product-1.png'),
('PRD002', 'Manicure Basic', 'Manicure', 75000.00, 100, 60, 'Pembersihan kuku, perapian kutikula, dan perawatan dasar kuku.', 'product-2.png'),
('PRD003', 'Pedicure Spa', 'Pedicure', 98000.00, 200, 60, 'Perawatan spa kaki menyeluruh untuk relaksasi dan kebersihan kuku kaki.', 'product-3.png')
ON DUPLICATE KEY UPDATE `sku`=`sku`;
