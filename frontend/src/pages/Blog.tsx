import { useBlog } from "../hooks"
import {useParams} from "react-router-dom"
import { FullBlogPage } from "./FullBlogPage";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BlogSkeleton from "../components/BlogSkeleton";


const Blog = () => {
  const { id } = useParams();
  const {loading, blog} = useBlog({
      id: id || ""
  });

  if (loading || !blog) {
      return <div>
          <div className="h-screen flex flex-col justify-center">
              
              <div className="flex justify-center">
              <div className="flex justify-center"> 
            <div> 
            <BlogSkeleton />
            </div> 
        </div>
              </div>
          </div>
      </div>
  }
  return <div>
     <> 
     <Navbar />
     <FullBlogPage blog={blog} />
     <Footer />
     </>
  </div>
}

export default Blog;