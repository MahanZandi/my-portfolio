'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

interface User {
  email: string;
  name: string;
}

interface AdminDashboardProps {
  user: User | null;
}

export default function AdminDashboard({ user }: AdminDashboardProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const t = useTranslations('admin');

  const handleLogout = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
      });

      if (response.ok) {
        router.push('/admin/login');
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Header */}
      <header className="bg-white dark:bg-gray-950 shadow md:pt-[164px] md:pb-[96px] pt-[132px] pb-[64px] px-[18px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{t('dashboardTitle')}</h1>
              <p className="text-gray-600 dark:text-gray-300">{t('welcome')}, {user?.name}</p>
            </div>
            <button
              onClick={handleLogout}
              disabled={loading}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium disabled:opacity-50"
            >
              {loading ? t('loggingOut') : t('logout')}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 dark:border-gray-700 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('dashboardTitle')}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {t('dashboardDescription')}
              </p>
              
              {/* Dashboard Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {t('projects')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{t('projectsDescription')}</p>
                  <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm">
                    {t('view')}
                  </button>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {t('skills')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{t('skillsDescription')}</p>
                  <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm">
                    {t('view')}
                  </button>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {t('settings')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{t('settingsDescription')}</p>
                  <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm">
                    {t('view')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
