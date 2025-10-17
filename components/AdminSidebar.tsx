"use client";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import ThemeToggle from "./ThemeTogle";
import Image from "next/image";
import enflag from "@/public/images/en-flag.png";
import faflag from "@/public/images/fa-flag.png";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useStore } from "@/libs/store";
import { useRouter } from "next/navigation";
import { FaHome } from "react-icons/fa";
// FaCog, FaChartBar, FaUsers, FaFileAlt
interface AdminSidebarProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  locale: "fa" | "en";
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ isOpen, setIsOpen, locale }) => {
  const t = useTranslations("admin");
  const router = useRouter();
  const pathname = usePathname();
  const { theme, setTheme } = useStore();


  const currentPath = pathname.replace(/^\/(fa|en)\/admin/, "");

  const fa = () => (
    <>
      <Link href={`/en/admin${currentPath}`} scroll={false}>
        <p className="sidebar-lang-text">{t("changeLanguage")}</p>
      </Link>
      <Link href={`/en/admin${currentPath}`} scroll={false} className="nav-lang">
        <Image src={faflag} alt="آیکون پرچم ایران" className="nav-lang-image" />
        <span>FA</span>
      </Link>
    </>
  );

  const en = () => (
    <>
      <Link href={`/fa/admin${currentPath}`} scroll={false}>
        <p className="sidebar-lang-text">{t("changeLanguage")}</p>
      </Link>
      <Link href={`/fa/admin${currentPath}`} scroll={false} className="nav-lang">
        <Image
          src={enflag}
          alt="آیکون پرچم انگلیس"
          className="nav-lang-image"
        />
        <span>EN</span>
      </Link>
    </>
  );

  const lang = locale === "fa" ? fa() : en();

  const handleBackToWebsite = () => {
    router.push(`/${locale}`);
    setIsOpen(false);
  };

//   const adminLinks = [
//     {
//       title: "dashboard",
//       link: "/admin/dashboard",
//       icon: <FaChartBar size={18} />,
//     },
//     {
//       title: "projects",
//       link: "/admin/projects",
//       icon: <FaFileAlt size={18} />,
//     },
//     {
//       title: "users",
//       link: "/admin/users",
//       icon: <FaUsers size={18} />,
//     },
//     {
//       title: "settings",
//       link: "/admin/settings",
//       icon: <FaCog size={18} />,
//     },
//   ];

  return (
    <div>
      {isOpen && (
        <div className="sidebar-overlay" onClick={() => setIsOpen(false)}></div>
      )}

      <div
        className={`sidebar ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="sidebar-top">
          <button
            onClick={() => setIsOpen(false)}
            className="sidebar-close-btn"
          >
            <RxCross2 />
          </button>
          <Link href="/" className="sidebar-logo">
            {"</ M>"}
          </Link>
        </div>
        <div className="sidebar-top-hr-parents">
          <hr className="sidebar-top-hr"></hr>
        </div>
        
        {/* Back to Website Button */}
        <div className="sidebar-back-button-container">
          <button
            onClick={handleBackToWebsite}
            className="flex items-center gap-3 w-full px-4 py-3 dark:text-gray-400 text-gray-900 rounded-md text-sm font-medium transition-colors"
          >
            <FaHome size={16} />
            <span>{t("backToWebsite")}</span>
          </button>
        </div>

        <div className="sidebar-button-hr-parents">
          <hr className="sidebar-button-hr"></hr>
        </div>

        {/* Admin Navigation Links */}
        {/* <nav className="sidebar-items-container">
          {adminLinks.map((item, index) => (
            <span key={index} onClick={() => setIsOpen(false)}>
              <Link className="link flex items-center gap-3" href={item.link}>
                {item.icon}
                {t(item.title)}
              </Link>
            </span>
          ))}
        </nav> */}

        <div className="sidebar-button-hr-parents">
          <hr className="sidebar-button-hr"></hr>
        </div>

        {/* Theme and Language Controls */}
        <div className="sidebar-tools-container">
          <div className="sidebar-theme-toggle-container">
            <p onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {t("changeTheme")}
            </p>
            <ThemeToggle className="sidebar-theme-toggle" />
          </div>
          <div className="sidebar-lang-container">{lang}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
