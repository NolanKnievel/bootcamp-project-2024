type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

const blogs: Blog[] = [
  {
    title: "First Blog!",
    date: "10/16/2024",
    description: "This is my first blog post :)",
    image: "./images/croppedHeadshot.jpg",
    imageAlt: "..",
    slug: "..",
  },
  {
    title: "Second Blog!",
    date: "10/16/2024",
    description: "This is my second blog post :)",
    image: "./images/croppedHeadshot.jpg",
    imageAlt: "..",
    slug: "..",
  },
];

const blogContainer = document.getElementById('blog-container');

blogs.forEach(blog => {
    const blogEl = document.createElement('div');

    const blogTitle = document.createElement('h1');
    blogTitle.innerHTML = blog.title;

    const blogImg = document.createElement('img');
    blogImg.src = blog.image;
    blogImg.alt = blog.imageAlt;
    
    const blogDesc = document.createElement('p');
    blogDesc.innerHTML = blog.description;

    blogEl.appendChild(blogTitle);
    blogEl.appendChild(blogImg);
    blogEl.appendChild(blogDesc);

    blogContainer?.appendChild(blogEl);

})

console.log(blogContainer);