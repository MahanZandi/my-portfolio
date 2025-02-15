"use client";
import Button from "./Button";
import ThemeToggle from "./ThemeTogle";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
const NavBar: React.FC = () => {
  return (
    <nav className="">
      <div className="nav-container">
        <div className="nav-hamburger-menu">
          <RxHamburgerMenu />
        </div>
        <div className="nav-flex-space">
          <div className="nav-items-parents">
            <div className="nav-buttons-container">
              <Button text="دانلود رزومه" />
              <ThemeToggle />
            </div>
            <div className="nav-vertical-line-container">
              <div className="nav-vertical-line"></div>
            </div>
            <div className="nav-items-container">
              <a href="#" className="link">
                درباره من
              </a>
              <a href="#" className="link">
                نمونه کار هایم
              </a>
              <a href="#" className="link">
                ارتباط با من
              </a>
            </div>
          </div>
        </div>
        <Link
          href="#"
          className="nav-logo"
        >
          {"</ M>"}
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
