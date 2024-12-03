import BlogPreview from "@/components/blogPreview";
import { connectBlogDB } from "@/database/database";
import Blog from "@/database/blogSchema";

async function getBlogs() {
  const url: string = process.env.URI as string;

  await connectBlogDB();
  try {
    const blogs = await Blog.find().sort({ date: -1 }).orFail();

    const formattedBlogs = blogs.map((blog) => ({
      title: blog.title,
      description: blog.description,
      date: blog.date.toString(),
      slug: blog.slug,
    }));

    return formattedBlogs;
  } catch (err) {
    return null;
  }
}

export default function Home() {
  const blogs = await getBlogs();
  
  return (
    <div>
      <div className="border-wrap">
        <h1 className="page-title">Blog</h1>

        <div className="about">
          <div id="blog-container">
            {blogs != null ? (
              blogs.map((blog) => <BlogPreview {...blog} />)
            ) : (
              <p>No blogs available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
