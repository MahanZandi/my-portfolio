'use client';

import { useState, useEffect } from 'react';
import { settingsApi } from '@/lib/api';
import * as Switch from '@radix-ui/react-switch';

export default function SettingsForm() {
  const [openToWork, setOpenToWork] = useState(true);
  const [headerTextFa, setHeaderTextFa] = useState('');
  const [headerTextEn, setHeaderTextEn] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    settingsApi.get().then(data => {
      setOpenToWork(data.openToWork ?? true);
      setHeaderTextFa(data.headerText?.fa || '');
      setHeaderTextEn(data.headerText?.en || '');
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    await settingsApi.update({
      openToWork,
      headerText: { fa: headerTextFa, en: headerTextEn }
    });
    
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
        <h3 className="text-2xl font-bold text-white">تنظیمات سایت</h3>
        <p className="text-blue-100 text-sm mt-1">مدیریت محتوا و وضعیت کاری</p>
      </div>
      
      <div className="p-6 space-y-6">
        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-gray-900 dark:text-white font-semibold block mb-1">
                {openToWork ? 'آماده دریافت پروژه' : 'مشغول به کار'}
              </span>
              <p className="text-xs text-gray-500 dark:text-gray-400">نمایش وضعیت کاری در هدر</p>
            </div>
            <Switch.Root
              checked={openToWork}
              onCheckedChange={setOpenToWork}
              className="relative h-[25px] w-[42px] cursor-pointer rounded-full outline-none transition-colors duration-200 data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-400 dark:data-[state=unchecked]:bg-gray-600"
              style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}
            >
              <Switch.Thumb className="block size-[21px] translate-x-0.5 rounded-full bg-white shadow-lg transition-transform duration-100 will-change-transform data-[state=checked]:-translate-x-[19px]" />
            </Switch.Root>
          </div>
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">متن هدر (فارسی)</label>
          <input
            type="text"
            value={headerTextFa}
            onChange={(e) => setHeaderTextFa(e.target.value)}
            placeholder="مثلا: توسعه‌دهنده فرانت‌اند"
            className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white transition-all"
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Header Text (English)</label>
          <input
            type="text"
            value={headerTextEn}
            onChange={(e) => setHeaderTextEn(e.target.value)}
            placeholder="e.g: Frontend Developer"
            className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white transition-all"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-xl disabled:opacity-50 shadow-lg hover:shadow-xl transition-all"
        >
          {loading ? 'در حال ذخیره...' : 'ذخیره تغییرات'}
        </button>
      </div>
    </form>
  );
}
