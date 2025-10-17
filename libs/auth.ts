import { cookies } from 'next/headers';

export async function isAuthenticated(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get('admin-session');
    
    if (!sessionToken) {
      return false;
    }

    // Decode and validate the session token
    const decoded = Buffer.from(sessionToken.value, 'base64').toString('utf-8');
    const [email, timestamp] = decoded.split(':');
    
    // Check if session is not expired (7 days)
    const sessionTime = parseInt(timestamp);
    const now = Date.now();
    const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000;
    
    if (now - sessionTime > sevenDaysInMs) {
      return false;
    }

    return email === 'zandim221@gmail.com';
  } catch {
    return false;
  }
}

export async function getAuthUser() {
  const isAuth = await isAuthenticated();
  if (!isAuth) {
    return null;
  }
  
  return {
    email: 'zandim221@gmail.com',
    name: 'مدیر سیستم'
  };
}
