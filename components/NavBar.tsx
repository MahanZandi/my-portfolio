"use client";
import { useState } from "react";
import Button from "./Button";
import ThemeSelect from "./ThemeSelect";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "./Sidebar";
import Image from "next/image";
import enflag from "@/public/images/en-flag.png";
import faflag from "@/public/images/fa-flag.png";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useLocaleStore } from "@/store/useLocaleStore";
import Link from "next/link";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

interface NavbarProps {
  locale: "en" | "fa";
}

const NavBar: React.FC<NavbarProps> = ({ locale }) => {
  const t = useTranslations("navbar");
  const router = useRouter();
  const { setLocale } = useLocaleStore();

  const navLinks = [
    {
      title: "about me",
      link: "#about",
    },
    {
      title: "works",
      link: "#works",
    },
    {
      title: "contact me",
      link: "#contact",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const currentPath = pathname.replace(/^\/(fa|en)/, "");

  const handleLocaleChange = (newLocale: 'en' | 'fa') => {
    setLocale(newLocale);
    router.push(`/${newLocale}${currentPath}`);
  };

  const fa = () => (
    <button onClick={() => handleLocaleChange('en')} className="nav-lang">
      <Image src={faflag} alt="آیکون پرچم ایران" className="nav-lang-image" />
      <span>FA</span>
    </button>
  );

  const en = () => (
    <button onClick={() => handleLocaleChange('fa')} className="nav-lang">
      <Image src={enflag} alt="آیکون پرچم انگلیس" className="nav-lang-image" />
      <span>EN</span>
    </button>
  );

  const lang = locale === "fa" ? fa() : en();

  return (
    <div>
      <nav id="header" className="nav-parents">
        <div className="nav-container">
          <div className="nav-hamburger-menu" onClick={() => setIsOpen(true)}>
            <RxHamburgerMenu />
          </div>

          <div className="nav-flex-space">
            <div className="nav-items-parents">
              <div className="nav-buttons-container">
                <a className="" href="/files/mahan-resume.pdf" target="_blank">
                  <Button className="button" text={t("cv button")} />
                </a>
                <ThemeSelect />
              </div>
              <div>{lang}</div>
              <div className="nav-vertical-line-container">
                <div className="nav-vertical-line"></div>
              </div>
              <div className="nav-items-container">
                {navLinks?.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(item.link.replace("#", ""))}
                    className="link"
                  >
                    {t(item.title)}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <Link href="/" className="nav-logo">
            {"</ M>"}
          </Link>
        </div>
      </nav>

      <Sidebar locale={locale} isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default NavBar;
