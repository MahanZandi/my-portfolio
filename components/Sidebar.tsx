import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import ThemeToggle from "./ThemeTogle";
import Button from "./Button";

const Sidebar = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) => {
    return (
      <div>
        {/* پس‌زمینه تاریک (Overlay) */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 " onClick={() => setIsOpen(false)}></div>
        )}
  
        {/* سایدبار (باز شدن از سمت راست) */}
        <div
          className={`fixed top-0 right-0 h-full w-[320px] dark:bg-gray-950 bg-white dark:text-white  z-50 transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex pt-[16px] px-[16px]">
            <button 
                  onClick={() => setIsOpen(false)} 
                  className="text-[24px] flex items-center dark:text-gray-100 text-gray-900 dark:hover:bg-gray-800 hover:bg-gray-100 transition-all p-2 rounded-xl"
                  >
                <RxCross2/>
            </button>
            <Link href="/" className="nav-logo flex justify-end w-full">
              {"</ M>"}
            </Link>
          </div>
          <div className="pt-[20px]">
            <hr className="dark:border-gray-400/20 border-gray-400/50"></hr>
          </div>
          <nav className="flex flex-col gap-y-[16px] text-body2 pt-[20px] px-[16px]">
            <span className="">
              <a className="link" href="">درباره من</a>
            </span>
            <span className="">
              <a className="link" href="">ارتباط با من</a>
            </span>
            <span className="">
              <a className="link" href="">نمونه کار هایم</a>
            </span>
          </nav>
          <div className="pt-[16px] pb-[12px]">
            <hr className="dark:border-gray-400/20 border-gray-400/50"></hr>
          </div>
          <div className="flex flex-col gap-y-[16px] px-[16px]">
              <div className="flex text-gray-600 dark:text-gray-400"> 
                  <p className="flex flex-1 pt-2">تعویض تم</p>
                  <ThemeToggle className="button-theme transition-all text-[24px] flex items-center dark:text-gray-100 text-gray-900 dark:hover:bg-gray-800 hover:bg-gray-100 transition-all p-2 rounded-xl"/>
                </div>
                <div>
                  <Button className="button-sidebar" text="دانلود رزومه"/>
                </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  