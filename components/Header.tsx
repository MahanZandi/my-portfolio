"use client";
import Image from "next/image";
import MahanImae from "@/public/images/mahanImage0001.jpg";
import Link from "next/link";
import { SlLocationPin } from "react-icons/sl";
import { TbBrandGithub } from "react-icons/tb";
import { LiaTelegramPlane } from "react-icons/lia";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { MdCall, MdArrowOutward } from "react-icons/md";
import { useTranslations } from "next-intl";
import { MorphingText } from "@/components/ui/MorphingText";
import { SpinningText } from "@/components/ui/SpinningText";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "700", subsets: ["latin"] });

const Header: React.FC = () => {
  const t = useTranslations("header");
  const getLang = useTranslations();
  const dynamicDir = getLang("lang") === "fa" ? "rtl" : "ltr";

  const morphingTexts = getLang("lang") === "fa" 
    ? [
        "ماهان زندی - توسعه دهنده فرانت اند",
        "سازنده وبسایت های مدرن و جذاب",
        "متخصص React و Next.js",
        "خالق تجربه های کاربری منحصر به فرد"
      ]
    : [
        "Mahan Zandi - Front-End Developer",
        "Building Modern & Attractive Websites",
        "React & Next.js Specialist",
        "Crafting Unique User Experiences"
      ];

  return (
    <div className="header">
      <div className="header-container">
        {/* content */}
        <div className="header-content md:hidden !pt-0 !pb-6" dir={dynamicDir}>
          <MorphingText texts={morphingTexts} className={`header-title font-bold ${getLang("lang") === "en" ? poppins.className : ""}`} dir={dynamicDir} />
        </div>
        {/* Image */}
        <div className="header-image-container">
          <div>
            <Image src={MahanImae} alt="MahanImae" className="header-image" priority />
          </div>
          <div className="header-shape"></div>
          <div className="absolute -bottom-20 lg:bottom-0 left-1/2 -translate-x-1/2 md:-left-14 md:translate-x-0 z-20 scale-75 md:scale-100">
            <SpinningText
              text="FRONT-END DEVELOPER / REACT.JS & NEXT.JS "
              radius={70}
              fontSize={13}
              duration={10}
            />
            <Link href="#contact" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors flex items-center justify-center shadow-lg">
              <MdArrowOutward className="text-white text-2xl" />
            </Link>
          </div>
        </div>
        {/* content */}
        <div className="header-content" dir={dynamicDir}>
          <MorphingText texts={morphingTexts} className={`header-title font-bold hidden md:block ${getLang("lang") === "en" ? poppins.className : ""}`} dir={dynamicDir} />
          <p className="header-discription">{t("description")}</p>
          <div className="header-adress-space">
            <div className="header-adress-container">
              <SlLocationPin className="header-adress-icon" />
              <p>{t("address")}</p>
            </div>

            <div className="header-open-to-work ">
              <div className="header-open-to-work-space">
                <div className="header-open-to-work-icon" />
              </div>
              <p>{t("work")}</p>
            </div>

            <div className="header-social-icons">
              <Link href="tel:+98 939 552 6996" className="actions">
                <MdCall />
              </Link>
              <Link href="https://github.com/MahanZandi" className="actions">
                <TbBrandGithub />
              </Link>
              <Link href="https://t.me/+989395526996" className="actions">
                <LiaTelegramPlane />
              </Link>
              {/* <Link href="https://www.instagram.com/mahan.zandi.85" className="actions">
                            <FaInstagram/>
                        </Link> */}
              <Link
                href="https://www.linkedin.com/in/mahanzandi"
                className="actions"
              >
                <PiLinkedinLogoBold />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
