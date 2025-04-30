import BlogsList from "@/components/BlogsList";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const BlogsPage = () => {
  return (
    <div className="bg-white text-gray-600 dark:bg-gray-950 dark:text-gray-300 transition-all">
      <div>
        <BlogsList />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default BlogsPage;
