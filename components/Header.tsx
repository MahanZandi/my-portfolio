import Image from "next/image";
import MahanImae from "@/public/images/mahanImage01.jpg";
import { SlLocationPin } from "react-icons/sl";
import { TbBrandGithub } from "react-icons/tb";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { PiLinkedinLogoBold } from "react-icons/pi";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-image-container">
            <Image
              src={MahanImae}
              alt="MahanImae"
              className="header-image"
              style={{ objectFit: 'cover' }}
            />
            <div className="header-shape"></div>
          </div>

          <div className="header-content">
              <h1 className="header-title">
                  سلام من ماهانم 👋
              </h1>
              <p className="header-discription">
                    من یک توسعه‌دهنده فرانت‌اند با بیش از یک سال تجربه در ساخت رابط‌های کاربری مدرن و بهینه هستم. <br/>
                    با استفاده از تکنولوژی‌هایی مانند React، Next.js و TailwindCSS و... تجربه‌ای سریع، جذاب و کاربرپسند خلق می‌کنم <br className="header-next-line"/>
                    همیشه به دنبال یادگیری و بهبود مهارت‌هایم هستم تا بهترین تجربه را برای کاربران فراهم کنم. <br/>
              </p>
              <div className="header-adress-space">
                    <div className="header-adress-container">
                        <SlLocationPin className="header-adress-icon"/>
                        <p>
                            ایران , گلستان , کردکوی
                        </p>
                    </div>

                    <div className="header-open-to-work ">
                        <div className="header-open-to-work-space">
                            <div className="header-open-to-work-icon"/>
                        </div>
                        <p>
                            آماده برای استخدام در شرکت 
                        </p>
                    </div>

                    <div className="header-social-icons">
                        <a href="#" className="actions">
                            <TbBrandGithub/>
                        </a>
                        <a href="#" className="actions">
                            <LiaTelegramPlane/>
                        </a>
                        <a href="#" className="actions">
                            <FaInstagram/>
                        </a>
                        <a href="#" className="actions">
                            <PiLinkedinLogoBold/>
                        </a>
                    </div>
              </div>
          </div>
        </div>
    </div>
  );
};

export default Header;
