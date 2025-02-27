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
    <div className="skills">
      <div className="skills-container">
        <div>
          {/* titles */}
          <div className="skills-titles">
            <span className="skills-tag">مهارت های من :</span>
            <span className="skills-title-span">
              ابزار ها و فناوری هایی که من واقعا در آنها خوب هستم :
            </span>
          </div>
          {/* content */}
          <div className="skills-content-container">
            <div>
              <div className="skills-item">
                <a href="https://www.w3schools.com/html/">
                    <Image 
                      className="skills-item-image" 
                      src={HtmlIcon} 
                      alt="html icon" 
                    />
                </a>
                <p className="skills-item-text">HTML</p>
              </div>
            </div>
            <div>
              <div className="skills-item">
                <a href="https://www.w3schools.com/css/">
                    <Image 
                      className="skills-item-image" 
                      src={CssIcon} 
                      alt="css icon" 
                    />
                </a>
                <p className="skills-item-text">CSS</p>
              </div>
            </div>
            <div>
              <div className="skills-item">
                <a href="https://tailwindcss.com/">
                    <Image
                      className="skills-item-image"
                      src={TailwindIcon}
                      alt="Tailwind css icon"
                    />
                </a>
                <p className="skills-item-text">Tailwind css</p>
              </div>
            </div>
            <div>
              <div className="skills-item">
                <a href="https://sass-lang.com/">
                    <Image 
                      className="skills-item-image" 
                      src={ScssIcon} 
                      alt="sass/scss icon" 
                    />
                </a>
                <p className="skills-item-text">Sass/Scss</p>
              </div>
            </div>
            <div>
              <div className="skills-item">
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                    <Image
                      className="skills-item-image"
                      src={JsIcon}
                      alt="Javascript icon"
                    />
                </a>
                <p className="skills-item-text">Javascript</p>
              </div>
            </div>
            <div>
              <div className="skills-item">
                <a href="https://www.typescriptlang.org/">
                    <Image 
                      className="skills-item-image" 
                      src={TsIcon} 
                      alt="Typescript icon" 
                    />
                </a>
                <p className="skills-item-text">Typescript</p>
              </div>
            </div>
            <div>
              <div className="skills-item">
                <a href="https://react.dev/">
                    <Image 
                    className="skills-item-image" 
                    src={ReactIcon} 
                    alt="react icon" 
                    />
                </a>
                <p className="skills-item-text">React</p>
              </div>
            </div>
            <div>
              <div className="skills-item">
                <a href="https://nextjs.org/">
                    <Image 
                      className="skills-item-image" 
                      src={NextJsIcon} 
                      alt="Next js icon" 
                    />
                </a>
                <p className="skills-item-text">Next Js</p>
              </div>
            </div>
            <div>
              <div className="skills-item">
                <a href="https://git-scm.com/">
                    <Image 
                      className="skills-item-image" 
                      src={GitIcon} 
                      alt="git icon" 
                    />
                </a>
                <p className="skills-item-text">Git</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
