import blogs from "@/data/blogsData";
import Image, { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";

interface newBlogType {
  id: number;
  // metadata
  title: string;
  language: string;
  word_count: string;
  created_at: string;
  author: string;
  picture?: StaticImageData;
}

const BlogSection = () => {

  const t = useTranslations("blogs");

  const checkNewBlog = blogs.at(-1);

  if (!checkNewBlog) return console.error("last blog not found");

  const newBlog: newBlogType = checkNewBlog;

  const dynamicDir = newBlog?.language === "fa" ? "rtl" : "ltr";

  return (
    <div className="dark:bg-gray-950 bg-white">
      <div className="container md:pt-[164px] md:pb-[96px] pt-[132px] pb-[64px] px-[18px]">
        <div className="relative">
          {newBlog?.picture && (
            <Image
              src={newBlog!.picture}
              alt="new blog"
              className="w-full rounded-2xl xl:h-[600px] object-cover"
            />
          )}
          <div
            dir={dynamicDir}
            className="absolute rounded-2xl p-[24px] inset-0 flex text-white  font-bold bg-black/50"
          >
            <p className="">{t(newBlog?.created_at)}</p>
            <h1 className="text-h1">{t(newBlog?.title)}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
