var blogs = [
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
var blogContainer = document.getElementById('blog-container');
blogs.forEach(function (blog) {
    var blogEl = document.createElement('div');
    var blogTitle = document.createElement('h1');
    blogTitle.innerHTML = blog.title;
    var blogImg = document.createElement('img');
    blogImg.src = blog.image;
    blogImg.alt = blog.imageAlt;
    var blogDesc = document.createElement('p');
    blogDesc.innerHTML = blog.description;
    blogEl.appendChild(blogTitle);
    blogEl.appendChild(blogImg);
    blogEl.appendChild(blogDesc);
    blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.appendChild(blogEl);
});
console.log(blogContainer);
