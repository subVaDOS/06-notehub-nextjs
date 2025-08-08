import { NextRequest, NextResponse } from 'next/server';
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const endpoint = searchParams.get('endpoint') || '';
  const token = process.env.NEXT_PUBLIC_NOTES_TOKEN;
  try {
    const res = await fetch(
      `https://notehub-public.goit.study/api${endpoint}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'API request failed', details: String(error) },
      { status: 500 },
    );
  }
}
