import React from "react";
import BlogCard from "../components/BlogCard";
import Navbar from "../components/Navbar";
import BlogSkeleton from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";
import Footer from "../components/Footer";

  function formatDate(isoDate: string) {
    const date = new Date(isoDate);
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const year = date.getUTCFullYear();
  
    return `${day}/${month}/${year}`;
  }

const Blogs: React.FC = () => {
  const { loading, blogs = [], error } = useBlogs();

  if (loading) {
    return(
      <> 
        <div className="flex justify-center"> 
            <div> 
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            </div> 
        </div>
      </>
    )
  }

  if (error) {
    return <h1 className="text-xl text-red-500">Error loading blogs: {error.message}</h1>;
  }

  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <div className="max-w-xs sm:max-w-md md:max-w-xl">
          {blogs.length === 0 ? (
            <p>No blogs available</p>
          ) : (
            blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                id={blog.id}
                authorName={blog.author?.name || "Unknown Author"}
                title={blog.title || "Untitled Blog"}
                content={blog.content || "No content available"}
                publishedDate={formatDate(blog.publishedDate) || "23 Sept 2024"}
                imageUrl={blog.imageUrl || "https://dl.dir.freefiremobile.com/common/web_event/hash/54f31449f5f91cf0cc223cc635cd5952jpg"}
                author= {""}
              />
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
