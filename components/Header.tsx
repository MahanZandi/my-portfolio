import Image from "next/image";
import MahanImae from "@/public/images/mahanImage01.jpg";
import { SlLocationPin } from "react-icons/sl";
import { TbBrandGithub } from "react-icons/tb";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { PiLinkedinLogoBold } from "react-icons/pi";

const Header: React.FC = () => {
  return (
    <div className="bg-white text-gray-600 dark:bg-gray-950 transition-all">
      <div className="container flex flex-col items-center lg:items-start lg:flex-row  gap-x-[128px] md:pt-[164px] md:pb-[96px] pt-[132px] pb-[64px]">
        <div className="flex relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
            <Image
              src={MahanImae}
              alt="MahanImae"
              className="absolute contrast-125 brightness-125 z-10 h-[280px] w-[240px] border-8 border-transparent border-r-gray-200 border-b-gray-200 border-l-gray-200 md:border-l-0 dark:border-r-gray-950 dark:border-b-gray-950 dark:border-l-gray-950 md:dark:border-l-0 max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px]"
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute h-[280px] w-[280px] border-8 border-transparent bg-gray-200 dark:bg-gray-800 max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]"></div>
          </div>

          <div className="px-[16px] pt-[48px] lg:px-0 lg:pt-[10px] dark:text-gray-400 text-gray-600">
              <h1 className="text-gray-900 dark:text-gray-100 text-h1">
                  سلام من ماهانم 👋
              </h1>
              <p className=" pt-4 text-body2 pb-[48px]">
                    من یک توسعه‌دهنده فرانت‌اند با بیش از یک سال تجربه در ساخت رابط‌های کاربری مدرن و بهینه هستم. <br/>
                    با استفاده از تکنولوژی‌هایی مانند React، Next.js و TailwindCSS و... تجربه‌ای سریع، جذاب و کاربرپسند خلق می‌کنم <br className="md:block hidden"/>
                    همیشه به دنبال یادگیری و بهبود مهارت‌هایم هستم تا بهترین تجربه را برای کاربران فراهم کنم. <br/>
              </p>
              <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                        <SlLocationPin className="text-[24px]"/>
                        <p>
                            ایران , گلستان , کردکوی
                        </p>
                    </div>

                    <div className="flex gap-2 items-center pb-[48px]">
                        <div className="p-1">
                            <div className="size-3 bg-green-500 rounded-full open-to-work-animation"/>
                        </div>
                        <p>
                            آماده برای استخدام در شرکت 
                        </p>
                    </div>

                    <div className="flex gap-1">
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
