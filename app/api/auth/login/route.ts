import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// Admin credentials (in production, these should be in environment variables)
const ADMIN_EMAIL = 'zandim221@gmail.com';
const ADMIN_PASSWORD = 'zandi2015';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Validate credentials
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      // Create a simple session token (in production, use JWT or proper session management)
      const sessionToken = Buffer.from(`${email}:${Date.now()}`).toString('base64');
      
      // Set session cookie
      const cookieStore = await cookies();
      cookieStore.set('admin-session', sessionToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/'
      });

      return NextResponse.json({ 
        success: true, 
        message: 'ورود موفقیت‌آمیز' 
      });
    } else {
      return NextResponse.json({ 
        success: false, 
        message: 'ایمیل یا رمز عبور اشتباه است' 
      }, { status: 401 });
    }
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
