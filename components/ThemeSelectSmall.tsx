'use client';

import { useThemeStore } from '@/store/useThemeStore';
import { FiSun, FiMoon, FiMonitor } from 'react-icons/fi';
import { useEffect, useState } from 'react';

const themes = [
  { value: 'light', icon: FiSun },
  { value: 'dark', icon: FiMoon },
  { value: 'system', icon: FiMonitor },
] as const;


export default function ThemeSelectSmall() {
  const { theme, setTheme } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
        {themes.map(({ value, icon: Icon }) => (
          <button
            key={value}
            onClick={() => setTheme(value)}
            className={`p-2 rounded-md transition-colors ${
              theme === value
                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
            }`}
          >
            <Icon className="text-lg" />
          </button>
        ))}
      </div>
    </div>
  );
}
