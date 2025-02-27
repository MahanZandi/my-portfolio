import HtmlIcon from "@/public/images/skills-icons/icons8-html.svg";
import CssIcon from "@/public/images/skills-icons/icons8-css.svg";
import TailwindIcon from "@/public/images/skills-icons/icon-tailwindcss.svg";
import ScssIcon from "@/public/images/skills-icons/icon-sass.svg"
import JsIcon from "@/public/images/skills-icons/icon-javscript.svg";
import TsIcon from "@/public/images/skills-icons/icon-typescript.svg";
import ReactIcon from "@/public/images/skills-icons/icon-react.svg";
import NextJsIcon from "@/public/images/skills-icons/icon-nextjs.svg";
import GitIcon from "@/public/images/skills-icons/icon-git.svg";

import Image from "next/image";

const Skills: React.FC = () => {
  return (
    <div className="bg-gray-950">
      <div className="container py-[64px] desktop:py-[96px] px-[16px] xl:px-0">
        <div>
          {/* titles */}
          <div className="grid place-items-center">
            <span className="tags w-[150px]">مهارت های من :</span>
            <span className="pt-[16px] pb-[24px] desktop:pb-[48px] text-subtitle text-center">
              ابزار ها و فناوری هایی که من واقعا در آنها خوب هستم :
            </span>
          </div>
          {/* content */}
          <div className="grid grid-cols-3 gap-y-[16px] tablet:grid-cols-5 desktop:grid-cols-9">
            <div>
              <div className="grid place-items-center">
                <Image className="size-[64px]" src={HtmlIcon} alt="html icon" />
                <p className="pt-2 text-body1">HTML</p>
              </div>
            </div>
            <div>
              <div className="grid place-items-center">
                <Image className="size-[64px]" src={CssIcon} alt="css icon" />
                <p className="pt-2 text-body1">CSS</p>
              </div>
            </div>
            <div>
              <div className="grid place-items-center">
                <Image
                  className="size-[64px]"
                  src={TailwindIcon}
                  alt="Tailwind css icon"
                />
                <p className="pt-2 text-body1">Tailwind css</p>
              </div>
            </div>
            <div>
              <div className="grid place-items-center">
                <Image className="size-[64px]" src={ScssIcon} alt="sass/scss icon" />
                <p className="pt-2 text-body1">Sass/Scss</p>
              </div>
            </div>
            <div>
              <div className="grid place-items-center">
                <Image
                  className="size-[64px]"
                  src={JsIcon}
                  alt="Javascript icon"
                />
                <p className="pt-2 text-body1">Javascript</p>
              </div>
            </div>
            <div>
              <div className="grid place-items-center">
                <Image className="size-[64px]" src={TsIcon} alt="Typescript icon" />
                <p className="pt-2 text-body1">Typescript</p>
              </div>
            </div>
            <div>
              <div className="grid place-items-center">
                <Image className="size-[64px]" src={ReactIcon} alt="react icon" />
                <p className="pt-2 text-body1">React</p>
              </div>
            </div>
            <div>
              <div className="grid place-items-center">
                <Image className="size-[64px]" src={NextJsIcon} alt="Next js icon" />
                <p className="pt-2 text-body1">Next Js</p>
              </div>
            </div>
            <div>
              <div className="grid place-items-center">
                <Image className="size-[64px]" src={GitIcon} alt="git icon" />
                <p className="pt-2 text-body1">Git</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
