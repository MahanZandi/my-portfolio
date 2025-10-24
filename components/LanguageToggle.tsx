'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

export default function LanguageToggle() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  const toggleLanguage = () => {
    const newLocale = locale === 'fa' ? 'en' : 'fa';
    router.push(pathname, { locale: newLocale });
  };

  const currentLang = locale === 'fa' ? 'فارسی' : 'English';

  return (
    <button
      onClick={toggleLanguage}
      className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all font-medium"
    >
      {currentLang}
    </button>
  );
}
