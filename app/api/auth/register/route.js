import { NextResponse } from 'next/server';
import { executeNeonQuery } from '@/lib/db';

export async function POST(request) {
  try {
    const { fullName, email, password } = await request.json();

    if (!fullName || !email || !password) {
      return NextResponse.json({ message: 'Semua kolom wajib diisi' }, { status: 400 });
    }

    const result = await executeNeonQuery(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email',
      [fullName, email, password]
    );

    return NextResponse.json({
      success: true,
      message: 'Register berhasil!',
      user: { name: fullName, email }
    });
  } catch (error) {
    return NextResponse.json({ message: 'Register gagal' }, { status: 500 });
  }
}