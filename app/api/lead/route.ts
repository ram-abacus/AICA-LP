import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, phone, email, city, requirement } = data || {};
    if (!name || !phone || !email || !city || !requirement) {
      return NextResponse.json({ ok: false, message: 'Missing fields' }, { status: 400 });
    }
    console.log('[Lead]', new Date().toISOString(), data);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, message: 'Invalid JSON' }, { status: 400 });
  }
}