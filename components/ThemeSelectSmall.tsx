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
    <div className="sidebar-theme-select-container">
      <div className="sidebar-theme-select-wrapper">
        {themes.map(({ value, icon: Icon }) => (
          <button
            key={value}
            onClick={() => setTheme(value)}
            className={`sidebar-theme-select-button ${
              theme === value
                ? 'sidebar-theme-select-button-active'
                : 'sidebar-theme-select-button-inactive'
            }`}
          >
            <Icon className="text-lg" />
          </button>
        ))}
      </div>
    </div>
  );
}
