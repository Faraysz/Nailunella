import { neon } from '@neondatabase/serverless';

// Default In-Memory Mock Data jika DATABASE_URL Neon belum dikonfigurasi
export const DEFAULT_SERVICES = [
  {
    id: 1,
    sku: 'PRD001',
    name: 'Gel Polish',
    category: 'Basic',
    price: 75000,
    duration_minutes: 60,
    stock: 120,
    clients: 120,
    description: 'Layanan cat kuku gel tahan lama dengan kilau glossy maksimal.',
    image: '/assets/images/product-1.png',
    status: 'Active'
  },
  {
    id: 2,
    sku: 'PRD002',
    name: 'Manicure Basic',
    category: 'Manicure',
    price: 75000,
    duration_minutes: 60,
    stock: 100,
    clients: 100,
    description: 'Pembersihan kuku, perapian kutikula, dan perawatan dasar kuku.',
    image: '/assets/images/product-2.png',
    status: 'Active'
  },
  {
    id: 3,
    sku: 'PRD003',
    name: 'Pedicure Spa',
    category: 'Basic',
    price: 98000,
    duration_minutes: 60,
    stock: 200,
    clients: 200,
    description: 'Perawatan spa kaki menyeluruh untuk relaksasi dan kebersihan kuku kaki.',
    image: '/assets/images/product-3.png',
    status: 'Active'
  },
  {
    id: 4,
    sku: 'PRD004',
    name: 'Nail Art Custom',
    category: 'Nail Art',
    price: 150000,
    duration_minutes: 90,
    stock: 80,
    clients: 95,
    description: 'Desain lukis kuku artistik sesuai permintaan klien.',
    image: '/assets/images/product-4.png',
    status: 'Active'
  },
  {
    id: 5,
    sku: 'PRD005',
    name: 'Acrylic Extension',
    category: 'Extension',
    price: 220000,
    duration_minutes: 120,
    stock: 60,
    clients: 54,
    description: 'Penyambungan kuku akrilik kuat dan presisi.',
    image: '/assets/images/product-5.png',
    status: 'Active'
  }
];

let inMemoryServices = [...DEFAULT_SERVICES];

export async function executeNeonQuery(sqlText, params = []) {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    return { success: false, isFallback: true, error: 'DATABASE_URL not configured', data: inMemoryServices };
  }

  try {
    const sql = neon(databaseUrl);
    const result = await sql(sqlText, params);
    return { success: true, isFallback: false, data: result };
  } catch (error) {
    console.warn('[Neon Postgres Notice] Fallback used:', error.message);
    return { success: false, isFallback: true, error: error.message, data: inMemoryServices };
  }
}

export function getInMemoryServices() {
  return inMemoryServices;
}

export function addInMemoryService(newService) {
  inMemoryServices.unshift(newService);
  return inMemoryServices;
}