import HtmlIcon from "@/public/images/skills-icons/icons8-html.svg";
import CssIcon from "@/public/images/skills-icons/icons8-css.svg";
import TailwindIcon from "@/public/images/skills-icons/icon-tailwindcss.svg";
import ScssIcon from "@/public/images/skills-icons/icon-sass.svg";
import JsIcon from "@/public/images/skills-icons/icon-javscript.svg";
import TsIcon from "@/public/images/skills-icons/icon-typescript.svg";
import ReactIcon from "@/public/images/skills-icons/icon-react.svg";
import NextJsIcon from "@/public/images/skills-icons/icon-nextjs.svg";
import GitIcon from "@/public/images/skills-icons/icon-git.svg";
import ThreejsIcon from "@/public/images/skills-icons/Threejs-logo.svg";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";

const Skills: React.FC = () => {
  const t = useTranslations("skills");

  return (
    <div className="skills">
      <div className="skills-container">
        <div>
          {/* titles */}
          <div className="skills-titles">
            <span className="skills-tag">{t("tag")}</span>
            <span className="skills-title-span">{t("overview")}</span>
          </div>
          {/* content */}
          <div className="skills-content-container">
            {/* TODO مپ کردن ارایه skills */}
            <div className="skills-item">
              <Link href="https://www.w3schools.com/html/">
                <Image
                  className="skills-item-image"
                  src={HtmlIcon}
                  alt="html icon"
                  width={64}
                  height={64}
                />
              </Link>
              <p className="skills-item-text">HTML</p>
            </div>
            {/* <div>
              <div className="skills-item">
                <Link href="https://tailwindcss.com/">
                  <Image
                    className="skills-item-image"
                    src={TailwindIcon}
                    alt="Tailwind css icon"
                  />
                </Link>
                <p className="skills-item-text">Tailwind css</p>
              </div>
            </div>
            <div>
              <div className="skills-item">
                <Link href="https://sass-lang.com/">
                  <Image
                    className="skills-item-image"
                    src={ScssIcon}
                    alt="sass/scss icon"
                  />
                </Link>
                <p className="skills-item-text">Sass/Scss</p>
              </div>
            </div>
            <div>
              <div className="skills-item">
                <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                  <Image
                    className="skills-item-image"
                    src={JsIcon}
                    alt="Javascript icon"
                  />
                </Link>
                <p className="skills-item-text">Javascript</p>
              </div>
            </div>
            <div>
              <div className="skills-item">
                <Link href="https://www.typescriptlang.org/">
                  <Image
                    className="skills-item-image"
                    src={TsIcon}
                    alt="Typescript icon"
                  />
                </Link>
                <p className="skills-item-text">Typescript</p>
              </div>
            </div>
            <div>
              <div className="skills-item">
                <Link href="https://react.dev/">
                  <Image
                    className="skills-item-image"
                    src={ReactIcon}
                    alt="react icon"
                  />
                </Link>
                <p className="skills-item-text">React</p>
              </div>
            </div>
            <div>
              <div className="skills-item">
                <Link href="https://nextjs.org/">
                  <Image
                    className="skills-item-image"
                    src={NextJsIcon}
                    alt="Next js icon"
                  />
                </Link>
                <p className="skills-item-text">Next Js</p>
              </div>
            </div>
            <div>
              <div className="skills-item">
                <Link href="https://threejs.org/">
                  <Image
                    className="skills-item-image"
                    src={ThreejsIcon}
                    alt="git icon"
                  />
                </Link>
                <p className="skills-item-text">Three js</p>
              </div>
            </div>
            <div>
              <div className="skills-item">
                <Link href="https://git-scm.com/">
                  <Image
                    className="skills-item-image"
                    src={GitIcon}
                    alt="git icon"
                  />
                </Link>
                <p className="skills-item-text">Git</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
