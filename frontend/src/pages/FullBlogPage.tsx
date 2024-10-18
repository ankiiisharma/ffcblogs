import { Blog } from "../hooks/index";
import { FaPenNib } from "react-icons/fa";

export const FullBlogPage = ({ blog }: {blog: Blog}) => {

  function formatDate(isoDate:any) {
    const date = new Date(isoDate);
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const year = date.getUTCFullYear();
  
    return `${day}/${month}/${year}`;
  }

  console.log(blog.imageUrl);
  return (
       <> 
      <div className="flex justify-center">
        <div className="max-w-xs sm:max-w-md md:max-w-xl">
          <img src={blog.imageUrl} className="rounded-xl border border-slate-400 mt-[20px]" />
          <h1 className="font-semibold text-[18px] flex items-center mt-1 mb-3 underline"> <FaPenNib className="mr-1" />  {blog.author.name} </h1>
          <h1 className="text-3xl font-bold"> {blog.title} </h1>
          <h1 className="mt-2"> {blog.content} </h1>
          <p className="text-[15px] mt-3"> published on : <span className="font-semibold"> {formatDate(blog.publishedDate)} </span> </p>
        </div>
      </div>
    </>
  )
}