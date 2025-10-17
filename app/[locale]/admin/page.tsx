import { redirect } from 'next/navigation';
import { isAuthenticated } from '@/libs/auth';

export default async function AdminPage() {
  const isAuth = await isAuthenticated();
  
  if (isAuth) {
    redirect('/admin/dashboard');
  } else {
    redirect('/admin/login');
  }
}

