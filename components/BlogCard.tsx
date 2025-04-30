import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const BlogCard= ({ data }: any) => {

  const t = useTranslations("blogs");

  return (
    <div className="rounded-2xl bg-white dark:bg-gray-900 hover:bg-gray-100 transition-all duration-300 border border-gray-300 dark:border-gray-900">
      <Image
        className="rounded-t-2xl object-cover min-h-[200px]"
        alt="blog Image"
        src={data.picture}
      />
      <div className="p-[14px]">
        <div className="text-indigo-500 dark:text-indigo-400 font-semibold">
          <span className="flex">
            <p className="flex flex-1">{t(data.created_at)}</p>
            <h2>{t(data.author)}</h2>
          </span>
        </div>
        <h2 className="text-subtitle pt-[14px]">{t(data.title)}</h2>
        <div className="py-[20px]">
          <p className="line-clamp-3">{t(data.introduction?.text)}</p>
        </div>
        <Link
          href="/"
          className="text-indigo-500 dark:text-indigo-400 font-semibold text-body1"
        >
          {t("read more")}
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
