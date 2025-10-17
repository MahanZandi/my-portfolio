import { redirect } from 'next/navigation';
import { isAuthenticated, getAuthUser } from '@/libs/auth';
import AdminDashboard from '@/components/AdminDashboard';

export default async function AdminDashboardPage() {
  const isAuth = await isAuthenticated();
  
  if (!isAuth) {
    redirect('/admin/login');
  }

  const user = await getAuthUser();

  return <AdminDashboard user={user} />;
}

