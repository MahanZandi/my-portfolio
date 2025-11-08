'use client';

import { useEffect } from 'react';
import { useLocaleStore } from '@/store/useLocaleStore';
import { useRouter, usePathname } from 'next/navigation';

interface LocaleSyncProps {
  currentLocale: 'en' | 'fa';
}

export default function LocaleSync({ currentLocale }: LocaleSyncProps) {
  const { locale, setLocale } = useLocaleStore();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (locale !== currentLocale) {
      const newPath = pathname.replace(/^\/(fa|en)/, `/${locale}`);
      router.push(newPath);
    } else {
      setLocale(currentLocale);
    }
  }, []);

  return null;
}
