"use client";
import Link from "next/link";
import { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FiCopy } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { TbBrandGithub } from "react-icons/tb";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { LuCopyCheck } from "react-icons/lu";

const Contact = () => {
  const [copied, setCopied] = useState<"email" | "phone" | null>(null);

  const handleCopy = (type: "email" | "phone") => {
    const text = type === "email" ? "zandim221@gmail.com" : "+98 9395526996";
    navigator.clipboard.writeText(text).then(() => {
      setCopied(type);
      setTimeout(() => setCopied(null), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div id="contact" className="contact" data-first-enter-image="true">
      {/* title */}
      <div className="contact-tags-container">
        <span className="tags">تماس بگیرید</span>
      </div>
      <div className="contact-text">
        <p>
          اگر به دنبال همکاری با یک توسعه‌دهنده فرانت‌اند هستید، خوشحال می‌شوم
          با شما در ارتباط باشم. برای فرصت‌های شغلی، پروژه‌های مشترک یا هر
          پیشنهاد همکاری دیگر، می‌توانید از طریق بخش تماس پیام بگذارید.
        </p>
      </div>
      {/* email & phone number */}
      <div className="contact-content">
        <div className="contact-info">
          <span
            className="contact-info-icon-copy"
            onClick={() => handleCopy("email")}
          >
            {copied === "email" ? <LuCopyCheck/> : <FiCopy />}
          </span>
          <span className="contact-info-text">zandim221@gmail.com</span>
          <span className="contact-info-icon">
            <MdOutlineEmail />
          </span>
        </div>

        <div className="contact-info">
          <span
            className="contact-info-icon-copy"
            onClick={() => handleCopy("phone")}
          >
            {copied === "phone" ? <LuCopyCheck/> : <FiCopy />}
          </span>
          <span dir="ltr" className="contact-info-text">
            +98 9395526996
          </span>
          <span className="contact-info-icon">
            <FiPhone />
          </span>
        </div>
      </div>
      {/* social */}
      <div className="contact-social">
        <span className="contact-social-title">
          شما همچنین میتوانید با من در این فضا ها ارتباط بگیرید:
        </span>
        <div className="contact-social-links">
          <Link href="#" className="actions">
            <TbBrandGithub />
          </Link>
          <Link href="#" className="actions">
            <LiaTelegramPlane />
          </Link>
          <Link href="#" className="actions">
            <FaInstagram />
          </Link>
          <Link href="#" className="actions">
            <PiLinkedinLogoBold />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
