import Image from "next/image";
import MahanImae from "@/public/images/mahanImage01.jpg";
import Link from "next/link";
import { SlLocationPin } from "react-icons/sl";
import { TbBrandGithub } from "react-icons/tb";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { MdCall } from "react-icons/md";
import {useTranslations} from 'next-intl';

const Header: React.FC = () => {
  const t = useTranslations('header')
    
  return (
    <div className="header">
      <div className="header-container">
        {/* Image */}
        <div className="header-image-container">
            <Image
              src={MahanImae}
              alt="MahanImae"
              className="header-image"
              style={{ objectFit: 'cover' }}
            />
            <div className="header-shape"></div>
          </div>
          {/* content */}
          <div className="header-content">
              <h1 className="header-title">
                  {t('title')}
              </h1>
              <p className="header-discription">
                  {t('description')}
              </p>
              <div className="header-adress-space">
                    <div className="header-adress-container">
                        <SlLocationPin className="header-adress-icon"/>
                        <p>
                            {t('address')}
                        </p>
                    </div>

                    <div className="header-open-to-work ">
                        <div className="header-open-to-work-space">
                            <div className="header-open-to-work-icon"/>
                        </div>
                        <p>
                            {t('work')}
                        </p>
                    </div>

                    <div className="header-social-icons">
                        <Link href="tel:+98 939 552 6996" className="actions">
                            <MdCall/>
                        </Link>
                        <Link href="https://github.com/MahanZandi" className="actions">
                            <TbBrandGithub/>
                        </Link>
                        <Link href="https://t.me/+989395526996" className="actions">
                            <LiaTelegramPlane/>
                        </Link>
                        <Link href="https://www.instagram.com/mahan.zandi.85" className="actions">
                            <FaInstagram/>
                        </Link>
                        <Link href="https://www.linkedin.com/in/mahanzandi" className="actions">
                            <PiLinkedinLogoBold/>
                        </Link>
                    </div>
              </div>
          </div>
        </div>
    </div>
  );
};

export default Header;
