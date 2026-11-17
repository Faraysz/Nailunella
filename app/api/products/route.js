import { NextResponse } from 'next/server';
import { executeNeonQuery, getInMemoryServices, addInMemoryService } from '@/lib/db';

export async function GET() {
  try {
    const result = await executeNeonQuery('SELECT * FROM products ORDER BY id ASC');
    if (result.success && result.data && result.data.length > 0) {
      return NextResponse.json({ success: true, data: result.data });
    }
  } catch (err) {
    console.warn('Fallback to in-memory services');
  }

  return NextResponse.json({ success: true, data: getInMemoryServices() });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, category, price, duration_minutes, stock, description, image } = body;

    if (!name || !price) {
      return NextResponse.json({ message: 'Nama layanan dan harga wajib diisi' }, { status: 400 });
    }

    const newService = {
      id: Date.now(),
      sku: `PRD00${Math.floor(10 + Math.random() * 90)}`,
      name,
      category: category || 'Basic',
      price: Number(price),
      duration_minutes: Number(duration_minutes) || 60,
      stock: Number(stock) || 100,
      clients: 0,
      description: description || 'Layanan kecantikan kuku Beauty Nails.',
      image: image || '/assets/images/product-1.png',
      status: 'Active'
    };

    // Simpan ke Neon jika DATABASE_URL ada
    await executeNeonQuery(
      'INSERT INTO products (sku, name, category, price, duration_minutes, stock, clients, description, image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
      [newService.sku, newService.name, newService.category, newService.price, newService.duration_minutes, newService.stock, 0, newService.description, newService.image]
    );

    addInMemoryService(newService);

    return NextResponse.json({
      success: true,
      message: 'Layanan baru berhasil ditambahkan!',
      data: newService
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Gagal menambahkan layanan' }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    const { id, name, category, price, duration_minutes, stock, sku } = body;

    if (!id && !sku) {
      return NextResponse.json({ message: 'ID atau SKU layanan diperlukan' }, { status: 400 });
    }

    await executeNeonQuery(
      'UPDATE products SET name = $1, category = $2, price = $3, duration_minutes = $4, stock = $5 WHERE id = $6 OR sku = $7',
      [name, category, Number(price), Number(duration_minutes), Number(stock), id, sku]
    );

    // Update in memory
    const services = getInMemoryServices();
    const index = services.findIndex(s => s.id === id || s.sku === sku);
    if (index !== -1) {
      services[index] = { ...services[index], name, category, price: Number(price), duration_minutes: Number(duration_minutes), stock: Number(stock) };
    }

    return NextResponse.json({ success: true, message: 'Layanan berhasil diperbarui!' });
  } catch (error) {
    return NextResponse.json({ message: 'Gagal memperbarui layanan' }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const sku = searchParams.get('sku');

    if (!id && !sku) {
      return NextResponse.json({ message: 'ID atau SKU diperlukan untuk menghapus' }, { status: 400 });
    }

    await executeNeonQuery(
      'DELETE FROM products WHERE id = $1 OR sku = $2',
      [id ? Number(id) : null, sku]
    );

    // Update in memory
    const services = getInMemoryServices();
    const index = services.findIndex(s => s.id == id || s.sku === sku);
    if (index !== -1) {
      services.splice(index, 1);
    }

    return NextResponse.json({ success: true, message: 'Layanan berhasil dihapus!' });
  } catch (error) {
    return NextResponse.json({ message: 'Gagal menghapus layanan' }, { status: 500 });
  }
}