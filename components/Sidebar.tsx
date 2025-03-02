import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import ThemeToggle from "./ThemeTogle";
import Button from "./Button";

const Sidebar = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) => {
    return (
      <div>
        {isOpen && (
          <div className="sidebar-overlay" onClick={() => setIsOpen(false)}></div>
        )}
        
        <div
          className={`sidebar ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="sidebar-top">
            <button 
                  onClick={() => setIsOpen(false)} 
                  className="sidebar-close-btn"
                  >
                <RxCross2/>
            </button>
            <Link href="/" className="sidebar-logo">
              {"</ M>"}
            </Link>
          </div>
          <div className="sidebar-top-hr-parents">
            <hr className="sidebar-top-hr"></hr>
          </div>
          <nav className="sidebar-items-container">
            <span>
              <Link className="link" href="#about">درباره من</Link>
            </span>
            <span>
              <Link className="link" href="#">ارتباط با من</Link>
            </span>
            <span>
              <Link className="link" href="#works">نمونه کارهام</Link>
            </span>
          </nav>
          <div className="sidebar-button-hr-parents">
            <hr className="sidebar-button-hr"></hr>
          </div>
          <div className="sidebar-tools-container">
              <div className="sidebar-theme-toggle-container"> 
                <p className="sidebar-switch-theme-text">تعویض تم</p>
                <ThemeToggle className="sidebar-theme-toggle"/>
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
  