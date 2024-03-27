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


const createBlog = () => {

    postContainer.innerHTML = '';

    for (const blog of postData) {


        const blogContainer = document.createElement('div');
        const postUserData = document.createElement('section');
        const post = document.createElement('section');
        const article = document.createElement('article');
        const sectionTitle = document.createElement('section');
        const sectionContent = document.createElement('section');
        const sectionUser = document.createElement('section');
        const titleH3 = document.createElement('h3');
        const blogP = document.createElement('p');
        const userP = document.createElement('p');

        sectionTitle.classList.add("blog-title");
        titleH3.textContent = blog.title;
        sectionTitle.appendChild(titleH3);

        sectionContent.classList.add('blog-content');
        blogP.textContent = blog.content;
        sectionContent.appendChild(blogP);

        sectionUser.classList.add('user');
        userP.textContent = blog.username;
        sectionUser.appendChild(userP);


        blogContainer.appendChild(postUserData);
        postUserData.appendChild(post);

        post.appendChild(article);
        article.appendChild(sectionTitle);
        article.appendChild(sectionContent);
        article.appendChild(sectionUser);


        // postContainer.appendChild(article);
        postContainer.appendChild(article)



    }


}

createBlog();

