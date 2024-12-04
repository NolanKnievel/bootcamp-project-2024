import BlogPreview from "@/components/blogPreview";
import connectDB from "@/database/database";
import Blog from "@/database/blogSchema";


export default function Home() {

  return (
    <div>
      <div className="border-wrap">
        <h1 className="page-title">Blog</h1>

      </div>
    </div>
  );
}
