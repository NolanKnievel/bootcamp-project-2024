var blogs = [
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
var blogContainer = document.getElementById("blog-container");
blogs.forEach(function (blog) {
    var blogEl = document.createElement("div");
    blogEl.classList.add("blog-post");
    var blogTitle = document.createElement("h1");
    var blogLink = document.createElement("a");
    blogLink.href = "./blogs/".concat(blog.slug, ".html");
    blogLink.innerHTML = blog.title;
    blogTitle.appendChild(blogLink);
    var blogImg = document.createElement("img");
    blogImg.src = blog.image;
    blogImg.alt = blog.imageAlt;
    var blogDesc = document.createElement("p");
    blogDesc.innerHTML = blog.description;
    blogEl.appendChild(blogTitle);
    blogEl.appendChild(blogImg);
    blogEl.appendChild(blogDesc);
    blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.appendChild(blogEl);
});
console.log(blogContainer);
