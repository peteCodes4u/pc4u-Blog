// get local storage item
const postData = JSON.parse(localStorage.getItem('post')) || [];

const postContainer = document.getElementById("post");

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


                // <article class="blog-article">
                //     <section class="blog-title">
                //         <h3>Blog Title 1</h3>
                //     </section>
                //     <section class="blog-content">
                //         <p>Blog 1 content</p>
                //     </section>
                //     <section class="user">
                //         <p>peter.appliedanalyticalsciences@gmail.com</p>
                //     </section>
                // </article>

                // const postItem = {
                //     username: username.value,
                //     title: blogTitle.value,
                //     content: blogContent.value,




const createBlog = () => {

    postContainer.innerHTML = '';

    for (const blog of postData) {

        const post = document.getElementById('post')
        const article = document.createElement('article')
        const sectionTitle = document.createElement('section')
        const sectionContent = document.createElement('section')
        const sectionUser = document.createElement('section')
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

        article.appendChild(sectionTitle);
        article.appendChild(sectionContent);
        article.appendChild(sectionUser);

        postContainer.appendChild(article);


    }


}

createBlog();

