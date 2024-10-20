type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};


// blog content
const blogs: Blog[] = [
  {
    title: "First Blog!",
    date: "10/16/2024",
    description: "This is my first blog post :)",
    image: "../images/IMG_5468.jpg",
    imageAlt: "..",
    slug: "first-blog",
  },
  {
    title: "Second Blog!",
    date: "10/16/2024",
    description: "This is my second blog post :)",
    image: "../images/IMG_7633_2.jpg",
    imageAlt: "..",
    slug: "second-blog",
  },
];

const blogContainer = document.getElementById("blog-container");


// create blog entries on DOM in blogs.html
blogs.forEach((blog) => {
  // Create wrapper for each blog post
  const blogEl = document.createElement("div");
  blogEl.classList.add("blog-post");

  // Create elements of a blog post
  const blogTitle = document.createElement("h1");
  const blogLink = document.createElement("a");
  blogLink.href = "./blogs/".concat(blog.slug, ".html");
  blogLink.innerHTML = blog.title;

  blogTitle.appendChild(blogLink);

  const blogImg = document.createElement("img");
  blogImg.src = blog.image;
  blogImg.alt = blog.imageAlt;

  const blogDesc = document.createElement("p");
  blogDesc.innerHTML = blog.description;

  // appending children to blog wrapper
  blogEl.appendChild(blogTitle);
  blogEl.appendChild(blogImg);
  blogEl.appendChild(blogDesc);

  // append wrapper to greater blog container
  blogContainer?.appendChild(blogEl);
});

