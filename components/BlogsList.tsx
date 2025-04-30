import BlogCard from "./BlogCard";
import blogs from "@/data/blogsData";

const BlogsList = () => {
  return (
    <div className="container sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] grid md:pt-[164px] md:pb-[96px] pt-[132px] pb-[64px] px-[18px]">
      {blogs.map((data) => (
        <BlogCard key={data.id} data={data} />
      ))}
    </div>
  );
};

export default BlogsList;
