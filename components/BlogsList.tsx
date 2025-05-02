import BlogCard from "./BlogCard";
import blogs from "@/data/blogsData";

const BlogsList = () => {
  return (
    <div className="dark:bg-gray-800 bg-gray-100">
      <div className="md:pt-[164px] md:pb-[96px] pt-[132px] pb-[64px] px-[18px]">
      <div className="container sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] grid">
        {blogs.map((data) => (
          <BlogCard key={data.id} data={data} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default BlogsList;
