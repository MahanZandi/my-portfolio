// Durov Brothers
import DurovBrothers from "@/public/images/blogs/Durov-brothers/blog-Durov-brothers.jpg";
import PavelDurov from "@/public/images/blogs/Durov-brothers//blog-Nikolay-durov.jpg";
import NikolayDurov from "@/public/images/blogs/Durov-brothers/blog-Nikolay-durov.jpg";
// linus
import Linus from "@/public/images/blogs/linus/linus.webp";
import Linux from "@/public/images/blogs/linus/linux.webp";
// react
import ReactImage from "@/public/images/blogs/react/react.png";
import ReactComponent from "@/public/images/blogs/react/react-component.jpg";
import VerticalDom from "@/public/images/blogs/react/Virtual-DOM.jpg";
import ReactNative from "@/public/images/blogs/react/react-native.jpg";
import { StaticImageData } from "next/image";

interface BlogType {
  id: number;
  // metadata
  title: string;
  language: string;
  word_count: string;
  created_at: string;
  author: string;
  picture?: StaticImageData;
  introduction?: {
    text: string;
    picture?: StaticImageData;
  };
  body: {
    sectionTitle: string;
    sectionText: string;
    picture?: StaticImageData;
  }[];
  conclusion?: string;
}

const blogs: BlogType[] = [
  {
    id: 1,
    title: "blog-telegram-title",
    language: "blog-telegram-language",
    word_count: "blog-telegram-word-count",
    created_at: "blog-telegram-created-at",
    author: "blog-telegram-author",
    picture: DurovBrothers,
    introduction: {
      text: "blog-telegram-introduction",
      picture: DurovBrothers,
    },
    body: [
      {
        sectionTitle: "blog-telegram-section1-title",
        sectionText: "blog-telegram-section1-text",
        picture: PavelDurov,
      },
      {
        sectionTitle: "blog-telegram-section2-title",
        sectionText: "blog-telegram-section2-text",
        picture: NikolayDurov,
      },
      {
        sectionTitle: "blog-telegram-section3-title",
        sectionText: "blog-telegram-section3-text",
      },
      {
        sectionTitle: "blog-telegram-section4-title",
        sectionText: "blog-telegram-section4-text",
      },
    ],
    conclusion: "blog-telegram-conclusion",
  },
  {
    id: 2,
    title: "blog-linus-title",
    language: "blog-linus-language",
    word_count: "blog-linus-word_count",
    created_at: "blog-linus-created_at",
    author: "blog-linus-author",
    picture: Linus,
    introduction: {
      text: "blog-linus-introduction",
      picture: Linus,
    },
    body: [
      {
        sectionTitle: "blog-linus-section1-title",
        sectionText: "blog-linus-section1-text",
      },
      {
        sectionTitle: "blog-linus-section2-title",
        sectionText: "blog-linus-section2-text",
        picture: Linux,
      },
      {
        sectionTitle: "blog-linus-section3-title",
        sectionText: "blog-linus-section3-text",
      },
    ],
    conclusion: "blog-linus-conclusion",
  },
  {
    id: 3,
    title: "blog-react-title",
    language: "blog-react-language",
    word_count: "blog-react-word_count",
    created_at: "blog-react-created_at",
    author: "blog-react-author",
    picture: ReactImage,
    introduction: {
      text: "blog-react-introduction",
      picture: ReactImage,
    },
    body: [
      {
        sectionTitle: "blog-react-section1-title",
        sectionText: "blog-react-section1-text",
      },
      {
        sectionTitle: "blog-react-section2-title",
        sectionText: "blog-react-section2-text",
        picture: ReactComponent,
      },
      {
        sectionTitle: "blog-react-section3-title",
        sectionText: "blog-react-section3-text",
        picture: VerticalDom,
      },
      {
        sectionTitle: "blog-react-section4-title",
        sectionText: "blog-react-section4-text",
        picture: ReactNative,
      },
    ],
    conclusion: "blog-react-conclusion",
  },
];

export default blogs;
