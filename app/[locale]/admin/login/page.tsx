'use client';

import { useState, use } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import night from '@/public/images/night3.jpg';
import day from '@/public/images/day.jpg';
import NavBar from '@/components/NavBar';

export default function AdminLoginPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const t = useTranslations('admin');
  const iconPosition = locale === "fa" ? "left-3" : "right-3";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        router.push('/admin/dashboard');
      } else {
        setError(data.message);
      }
    } catch {
      setError(t('serverError'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative" dir={locale === "fa" ? "rtl" : "ltr"}>
      {/* NavBar */}
      <NavBar locale={locale as "en" | "fa"} />
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={night} 
          alt='night sky background'
          fill
          className="object-cover dark:block hidden"
          priority
          quality={100}
          sizes="100vw"
        />
        <Image 
          src={day} 
          alt='day sky background'
          fill
          className="object-cover dark:hidden block"
          priority
          quality={100}
          sizes="100vw"
        />
        {/* Dark overlay for better text readability */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
      </div>
      
      {/* Login Form - Centered */}
      <div className="relative z-10 container flex items-center justify-center min-h-screen px-4 pt-20">
        <div className="bg-blue-500/10 dark:bg-blue-600/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl max-w-md w-full border border-blue-200/30 dark:border-blue-400/30">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
              <span className="text-2xl font-bold text-white">M</span>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent dark:text-white mb-2">
              {t('loginTitle')}
            </h2>
            <p className="text-blue-600 dark:text-blue-300 text-sm">
              {t('loginSubtitle')}
            </p>
          </div>
          
          {/* Login form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-blue-700 dark:text-blue-200 mb-2">
                  {t('email')}
                </label>
                <div className="relative">
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-blue-200 dark:border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 bg-blue-50/50 dark:bg-blue-900/30 text-blue-900 dark:text-blue-50 transition-all duration-200 placeholder-blue-400 dark:placeholder-blue-300"
                    placeholder={t('email')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-blue-700 dark:text-blue-200 mb-2">
                  {t('password')}
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full px-4 py-3 border border-blue-200 dark:border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 bg-blue-50/50 dark:bg-blue-900/30 text-blue-900 dark:text-blue-50 transition-all duration-200 placeholder-blue-400 dark:placeholder-blue-300"
                    placeholder={t('password')}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={`${iconPosition} absolute top-1/2 transform -translate-y-1/2 text-blue-500 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-100 transition-colors duration-200`}
                  >
                    {showPassword ? (
                      <FaEyeSlash className="w-5 h-5" />
                    ) : (
                      <FaEye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
            
            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm p-3 rounded-xl text-center">
                {error}
              </div>
            )}
            
            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  {t('loggingIn')}
                </div>
              ) : (
                t('login')
              )}
            </button>
          </form>
          
          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-xs text-blue-500 dark:text-blue-300">
              Secure admin access
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
