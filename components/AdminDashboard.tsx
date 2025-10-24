"use client";

import { useState } from "react";
import { useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import AnalyticsStats from "./AnalyticsStats";
import SettingsForm from "./SettingsForm";
import { FiLogOut, FiMenu } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import SideBar from "./Sidebar";

interface User {
  email: string;
  name: string;
}

interface AdminDashboardProps {
  user: User | null;
}

export default function AdminDashboard({ user }: AdminDashboardProps) {
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  const locale = useLocale();

  const handleLogout = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
      });

      if (response.ok) {
        router.push("/admin/login");
      }
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Sidebar Mobile */}
      <SideBar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} locale={locale as "fa" | "en"} />
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40">
          <div className="container px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden text-gray-600 dark:text-gray-300"
                >
                  <FiMenu size={24} />
                </button>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-xl font-bold text-white">M</span>
                </div>
                <div>
                  <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                    داشبورد مدیریت
                  </h1>
                  <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                    خوش آمدید، {user?.name}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="hidden lg:flex items-center gap-3">
                  <ThemeToggle />
                  <LanguageToggle />
                </div>
                <button
                  onClick={handleLogout}
                  disabled={loading}
                  className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-3 md:px-4 py-2 rounded-lg transition-all disabled:opacity-50 shadow-lg hover:shadow-xl text-sm"
                >
                  <FiLogOut />
                  <span className="hidden md:inline">
                    {loading ? "خروج..." : "خروج"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container px-4 py-8">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <div className="xl:col-span-2 space-y-8">
              <AnalyticsStats />
            </div>
            <div className="xl:col-span-1">
              <SettingsForm />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
