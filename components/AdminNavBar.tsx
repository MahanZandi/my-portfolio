"use client";
import { useState } from "react";
import ThemeToggle from "./ThemeTogle";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import AdminSidebar from "./AdminSidebar";
import Image from "next/image";
import enflag from "@/public/images/en-flag.png";
import faflag from "@/public/images/fa-flag.png";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { FaHome } from "react-icons/fa";

interface AdminNavBarProps {
  locale: "en" | "fa";
}

const AdminNavBar: React.FC<AdminNavBarProps> = ({ locale }) => {
  const t = useTranslations("admin");
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const currentPath = pathname.replace(/^\/(fa|en)\/admin/, "");

  const fa = () => (
    <Link href={`/en/admin${currentPath}`} scroll={false} className="nav-lang">
      <Image src={faflag} alt="آیکون پرچم ایران" className="nav-lang-image" />
      <span>FA</span>
    </Link>
  );

  const en = () => (
    <Link href={`/fa/admin${currentPath}`} scroll={false} className="nav-lang">
      <Image src={enflag} alt="آیکون پرچم انگلیس" className="nav-lang-image" />
      <span>EN</span>
    </Link>
  );

  const lang = locale === "fa" ? fa() : en();

  const handleBackToWebsite = () => {
    router.push(`/${locale}`);
  };

  return (
    <div>
      <nav id="admin-header" className="nav-parents">
        <div className="nav-container">
          <div className="nav-hamburger-menu" onClick={() => setIsOpen(true)}>
            <RxHamburgerMenu />
          </div>

          <div className="nav-flex-space">
            <div className="nav-items-parents">
              <div className="nav-buttons-container">
                <button
                  onClick={handleBackToWebsite}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors"
                >
                  <FaHome size={16} />
                  <span>{t("backToWebsite")}</span>
                </button>
                <ThemeToggle className="button-theme link" />
              </div>
              <div>{lang}</div>
              <div className="nav-vertical-line-container">
                <div className="nav-vertical-line"></div>
              </div>
              <div className="nav-items-container">
                <span className="text-gray-600 dark:text-gray-300 font-medium">
                  {t("adminPanel")}
                </span>
              </div>
            </div>
          </div>
          <Link href="/admin" className="nav-logo">
            {"</ M>"}
          </Link>
        </div>
      </nav>

      <AdminSidebar locale={locale} isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default AdminNavBar;
