"use client";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import ThemeToggle from "./ThemeTogle";
import Button from "./Button";
import Image from "next/image";
import enflag from "@/public/images/en-flag.png";
import faflag from "@/public/images/fa-flag.png";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useStore } from "@/libs/store";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  locale: "fa" | "en";
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen, locale }) => {
  const t = useTranslations("sidebar");

  const pathname = usePathname();

  const currentPath = pathname.replace(/^\/(fa|en)/, "");

  const { theme, setTheme } = useStore();

  const fa = () => (
    <>
      <Link href={`/en${currentPath}`} scroll={false}>
        <p className="sidebar-lang-text">{t("change language")}</p>
      </Link>
      <Link href={`/en${currentPath}`} scroll={false} className="nav-lang">
        <Image src={faflag} alt="آیکون پرچم ایران" className="nav-lang-image" />
        <span>FA</span>
      </Link>
    </>
  );

  const en = () => (
    <>
      <Link href={`/fa${currentPath}`} scroll={false}>
        <p className="sidebar-lang-text">{t("change language")}</p>
      </Link>
      <Link href={`/fa${currentPath}`} scroll={false} className="nav-lang">
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
        <nav className="sidebar-items-container">
          <span onClick={() => setIsOpen(false)}>
            <Link className="link" href="#about">
              {t("about me")}
            </Link>
          </span>
          <span onClick={() => setIsOpen(false)}>
            <Link className="link" href="#works">
              {t("works")}
            </Link>
          </span>
          <span onClick={() => setIsOpen(false)}>
            <Link className="link" href="#contact">
              {t("contact me")}
            </Link>
          </span>
        </nav>
        <div className="sidebar-button-hr-parents">
          <hr className="sidebar-button-hr"></hr>
        </div>
        <div className="sidebar-tools-container">
          <div className="sidebar-theme-toggle-container">
            <p onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="sidebar-switch-theme-text">{t("change theme")}</p>
            <ThemeToggle className="sidebar-theme-toggle" />
          </div>
          <div className="sidebar-lang-container">{lang}</div>
          <div onClick={() => setIsOpen(false)}>
            <a href="/files/mahan-resume.pdf" target="_blank">
              <Button className="button-sidebar" text={t("cv button")} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
