"use client";
import Link from "next/link";
import { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FiCopy } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { TbBrandGithub } from "react-icons/tb";
import { LiaTelegramPlane } from "react-icons/lia";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { LuCopyCheck } from "react-icons/lu";
import { useTranslations } from "next-intl";
import { MdCall } from "react-icons/md";

const Contact = () => {
  const [copied, setCopied] = useState<"email" | "phone" | null>(null);

  const handleCopy = (type: "email" | "phone") => {
    const text = type === "email" ? "zandim221@gmail.com" : "+98 9395526996";
    navigator.clipboard.writeText(text).then(() => {
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  const t = useTranslations("contact");
  

  return (
    <div id="contact" className="contact" data-first-enter-image="true">
      {/* title */}
      <div className="contact-tags-container">
        <span className="tags">{t("tag")}</span>
      </div>
      <div className="contact-text">
        <p>{t("description")}</p>
      </div>
      {/* email & phone number */}
      <div className="contact-content">
        <div className="contact-info">
          <span
            className="contact-info-icon-copy"
            onClick={() => handleCopy("email")}
          >
            {copied === "email" ? <LuCopyCheck /> : <FiCopy />}
          </span>
          <Link href="mailto:zandim221@gmail.com?subject=(Email from website)" className="contact-info-text">zandim221@gmail.com</Link>
          <span className="contact-info-icon">
            <MdOutlineEmail />
          </span>
        </div>
        <div className="contact-info">
          <span
            className="contact-info-icon-copy"
            onClick={() => handleCopy("phone")}
          >
            {copied === "phone" ? <LuCopyCheck /> : <FiCopy />}
          </span>
          <Link href="tel:+98 939 552 6996" dir="ltr" className="contact-info-text">
            +98 9395526996
          </Link>
          <span className="contact-info-icon">
            <FiPhone />
          </span>
        </div>
      </div>
      {/* social */}
      <div className="contact-social">
        <span className="contact-social-title">{t("social")}</span>
        <div className="contact-social-links">
          <Link href="tel:+98 939 552 6996" className="actions">
            <MdCall />
          </Link>
          <Link href="https://github.com/MahanZandi" className="actions">
            <TbBrandGithub />
          </Link>
          <Link href="https://t.me/+989395526996" className="actions">
            <LiaTelegramPlane />
          </Link>
          <Link href="https://www.linkedin.com/in/mahanzandi" className="actions">
            <PiLinkedinLogoBold />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
