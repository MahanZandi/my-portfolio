"use client";
import { useState } from "react";
import Button from "./Button";
import ThemeToggle from "./ThemeTogle";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import Sidebar from "./Sidebar";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="nav-parents">
        <div className="nav-container">
          <div 
              className="nav-hamburger-menu" 
              onClick={() => setIsOpen(true)}
              >
            <RxHamburgerMenu/>
          </div>

          <div className="nav-flex-space">
            <div className="nav-items-parents">
              <div className="nav-buttons-container">
                <Button className="button" text="دانلود رزومه" />
                <ThemeToggle className="button-theme link"/>
              </div>
              <div className="nav-vertical-line-container">
                <div className="nav-vertical-line"></div>
              </div>
              <div className="nav-items-container">
                <a href="#" className="link">درباره من</a>
                <a href="#" className="link">نمونه کار هایم</a>
                <a href="#" className="link">ارتباط با من</a>
              </div>
            </div>
          </div>

          <Link href="/" className="nav-logo">{"</ M>"}</Link>
        </div>
      </nav>

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default NavBar;
