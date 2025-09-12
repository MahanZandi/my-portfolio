"use client";
import { useState } from "react";
import Button from "./Button";
import ThemeToggle from "./ThemeTogle";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import Sidebar from "./Sidebar";
import Image from "next/image";
import enflag from "@/public/images/en-flag.png";
import faflag from "@/public/images/fa-flag.png";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

interface NavbarProps {
  locale: "en" | "fa";
}

const NavBar: React.FC<NavbarProps> = ({ locale }) => {
  const t = useTranslations("navbar");

  const navLinks = [
    {
      title: "about me",
      link: "/#about",
    },
    {
      title: "works",
      link: "/#works",
    },
    {
      title: "contact me",
      link: "/#contact",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const currentPath = pathname.replace(/^\/(fa|en)/, "");

  const fa = () => (
    <Link href={`/en${currentPath}`} scroll={false} className="nav-lang">
      <Image src={faflag} alt="آیکون پرچم ایران" className="nav-lang-image" />
      <span>FA</span>
    </Link>
  );

  const en = () => (
    <Link href={`/fa${currentPath}`} scroll={false} className="nav-lang">
      <Image src={enflag} alt="آیکون پرچم انگلیس" className="nav-lang-image" />
      <span>EN</span>
    </Link>
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
                <ThemeToggle className="button-theme link" />
              </div>
              <div>{lang}</div>
              <div className="nav-vertical-line-container">
                <div className="nav-vertical-line"></div>
              </div>
              <div className="nav-items-container">
                {navLinks?.map((item, index) => (
                  <Link key={index} href={item.link} className="link">
                    {t(item.title)}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link href="/#header" className="nav-logo">
            {"</ M>"}
          </Link>
        </div>
      </nav>

      <Sidebar locale={locale} isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default NavBar;
