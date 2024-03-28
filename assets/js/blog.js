// get local storage item
const postData = JSON.parse(localStorage.getItem('post')) || [];

const postContainer = document.getElementById("post");
const blogContainer = document.getElementById("blogContainer");
const mainContent = document.getElementById("main-content");

// back button
const backButton = document.getElementById("back-button");
backButton.addEventListener("click", function() {window.location.href= "./index.html"});

// dark mode
const themeSwitch = document.getElementById("mode-switcher");
const container = document.querySelector('.container');
let mode = 'light'

themeSwitch.addEventListener('click', function () {
    if(mode === 'light') { 
        mode = 'dark'
        container.setAttribute('class', 'dark')
    }
    else {
        mode = 'light'
        container.setAttribute('class', 'light')
    }
})

// create blog function > runs by for of loop on page load
const createBlog = () => {

    postContainer.innerHTML = '';

    for (const blog of postData) {


        // creates section blog posts
        const post = document.createElement('section');

        // creates individual blog articles
        const article = document.createElement('article');

        // creates the title section of the blog article
        const sectionTitle = document.createElement('section');

        // creates the blog content section of the blog article
        const sectionContent = document.createElement('section');

        // creates the blog user section of the blog article
        const sectionUser = document.createElement('section');

        // creates the blog title as H3 element
        const titleH3 = document.createElement('h3');

        // creates the blog post as p element
        const blogP = document.createElement('p');

        // creates the blog user as a p element
        const userP = document.createElement('p');

        // creates the class to apply to the title H3 element
        sectionTitle.classList.add("blog-title");
        titleH3.textContent = blog.title;
        sectionTitle.appendChild(titleH3);

        // creates the class to apply to the content p element
        sectionContent.classList.add('blog-content');
        blogP.textContent = blog.content;
        sectionContent.appendChild(blogP);

        // creates the class to apply to the user p element
        sectionUser.classList.add('user');
        userP.textContent = blog.username;
        sectionUser.appendChild(userP);

        // appends the post to the article element
        post.appendChild(article);

        // appends the title section to the article element 
        article.appendChild(sectionTitle);

        // appends the post content to the article
        article.appendChild(sectionContent);

        // appends the post user to the article
        article.appendChild(sectionUser);

        // appends the post data to the article
        postContainer.appendChild(article)
    }
}

// execute create blog function to generate blog posts from local storage JSON object 'post'
createBlog();

