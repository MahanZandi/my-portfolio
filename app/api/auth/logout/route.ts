import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
  try {
    // Clear the session cookie
    const cookieStore = await cookies();
    cookieStore.delete('admin-session');
    
    return NextResponse.json({ 
      success: true, 
      message: 'خروج موفقیت‌آمیز' 
    });
  } catch {
    return NextResponse.json({ 
      success: false, 
      message: 'خطا در سرور' 
    }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}
