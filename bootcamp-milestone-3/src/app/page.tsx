import BlogPreview from "@/components/blogPreview";
import { connectBlogDB } from "../database/database";
import Blog from "@/database/blogSchema";

async function getBlogs() {
  const url: string = process.env.MONGO_URI as string;

  await connectBlogDB();

  try {
    // query for all blogs and sort by date
    const blogs = await Blog.find().sort({ date: -1 }).orFail();

    const formattedBlogs = blogs.map((blog) => ({
      title: blog.title,
      content: blog.content,
      description: blog.description,
      slug: blog.slug,
      date: blog.date.toString(),
    }));

    return formattedBlogs;

    return blogs;
  } catch (err) {
    return null;
  }
}

export default async function Home() {
  const blogs = await getBlogs();

  return (
    <div>
      <div className="home-border-wrap">
        <main className="home-main">
          <h1 className="page-title">Nolan Knievel</h1>
          <h1 className="SLO">San Luis Obispo, CA</h1>

          <div className="about">
            <div className="about-image">
              <img
                className="home-img"
                src="./images/meSteezTransparent.png"
                width="700"
              />
            </div>

            <div id="blog-container">
              {blogs.map((blog) => (
                <BlogPreview {...blog} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
