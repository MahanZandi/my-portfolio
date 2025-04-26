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

interface NavbarProps {
  locale: "en" | "fa";
}

const NavBar: React.FC<NavbarProps> = ({locale}) => {
  const [isOpen, setIsOpen] = useState(false);

  const fa = () => {
    return (
      <Link href="/en" className="nav-lang">
        <Image src={faflag} alt="آیکون پرچم ایران" className="nav-lang-image"/>
        <span>FA</span>
      </Link>
    )
  }

  const en = () => {
    return (
      <Link href="/fa" className="nav-lang">
        <Image src={enflag} alt="آیکون پرچم انگلیس" className="nav-lang-image"/>
        <span>EN</span>
      </Link>
    )
  }

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
                <a href="/files/Mahan-resume.pdf" target="_blank">
                  <Button className="button" text="دانلود رزومه" />
                </a>
                <ThemeToggle className="button-theme link" />
              </div>
                <div>
                  {lang}
                </div>
              <div className="nav-vertical-line-container">
                <div className="nav-vertical-line"></div>
              </div>
              <div className="nav-items-container">
                <Link href="#about" className="link">
                  درباره من
                </Link>
                <Link href="#works" className="link">
                  نمونه کارهام
                </Link>
                <Link href="#contact" className="link">
                  تماس با من
                </Link>
              </div>
            </div>
          </div>
          <Link href="#header" className="nav-logo">
            {"</ M>"}
          </Link>
        </div>
      </nav>

      <Sidebar locale={locale} isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default NavBar;
