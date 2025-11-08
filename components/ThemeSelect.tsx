'use client';

import * as Select from '@radix-ui/react-select';
import { useThemeStore } from '@/store/useThemeStore';
import { FiSun, FiMoon, FiMonitor, FiCheck, FiChevronDown } from 'react-icons/fi';
import { useState, useEffect } from 'react';

const themes = [
  { value: 'light', label: 'Light', icon: FiSun },
  { value: 'dark', label: 'Dark', icon: FiMoon },
  { value: 'system', label: 'System', icon: FiMonitor },
] as const;

export default function ThemeSelect() {
  const { theme, setTheme } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="nav-theme-select">
        <FiMonitor />
        <span>System</span>
      </div>
    );
  }

  return (
    <Select.Root value={theme} onValueChange={setTheme}>
      <Select.Trigger className="nav-theme-select">
        {themes.find(t => t.value === theme)?.icon && (
          <span className="text-lg">{themes.find(t => t.value === theme)!.icon({})}</span>
        )}
        <Select.Value />
        <Select.Icon>
          <FiChevronDown />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="overflow-hidden bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg z-[9999] min-w-[var(--radix-select-trigger-width)]" position="popper" sideOffset={5}>
          <Select.Viewport className="p-1">
            {themes.map(({ value, label, icon: Icon }) => (
              <Select.Item
                key={value}
                value={value}
                className="relative flex items-center gap-3 px-8 py-2 rounded cursor-pointer outline-none hover:bg-gray-100 dark:hover:bg-gray-700 data-[state=checked]:bg-gray-100 dark:data-[state=checked]:bg-gray-700"
              >
                <Icon className="text-lg" />
                <Select.ItemText>{label}</Select.ItemText>
                <Select.ItemIndicator className="absolute left-2">
                  <FiCheck />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
