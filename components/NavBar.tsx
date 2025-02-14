"use client";
import Button from "./Button";
import ThemeToggle from "./ThemeTogle";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
const NavBar: React.FC = () => {
  return (
    <div className="">
      <div className="container px-10 xl:px-0 pt-4 flex">
        <div className="text-[24px] md:hidden flex items-center dark:text-gray-100 text-gray-900">
          <RxHamburgerMenu />
        </div>
        <div className="flex flex-1">
          <div className="hidden md:flex gap-6">
            <div className="flex gap-[18px]">
              <Button text="دانلود رزومه" />
              <ThemeToggle />
            </div>
            <div className="flex justify-center items-center">
              <div className="border-l-[1px] h-7 flex justify-center items-center dark:border-gray-200/50 border-gray-400/50"></div>
            </div>
            <div className="flex items-center gap-6 text-body2 ">
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
          className="flex items-center dark:text-gray-100 text-gray-900 text-h3 "
        >
          {"</ M>"}
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
