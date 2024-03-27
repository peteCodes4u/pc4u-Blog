// post blog button
const postBlog = document.getElementById("post-blog");

// dark mode toggle
const themeSwitch = document.getElementById("mode-switcher");
const container = document.querySelector('.container');

// form constants
const username = document.getElementById('username');
const blogTitle = document.getElementById('blog-title');
const blogContent = document.getElementById('blog-content');

// dark mode switch
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

// blog post content local storage solution 
let blogItems = JSON.parse(localStorage.getItem('post')) || [];

const addBlog = function (event) {
    event.preventDefault();

    // blog obj
    const postItem = {
        username: username.value,
        title: blogTitle.value,
        content: blogContent.value,
        }
    
        // form vald
    if ( !postItem.username || !postItem.title || !postItem.content) {

        alert("Please complete the entire form to proceed") 
        return;
    }

    blogItems.push(postItem);
    localStorage.setItem('post', JSON.stringify(blogItems));

    username.value = '';
    blogTitle.value ='';
    blogContent.value = '';

    location.href= "./blog.html"
}

postBlog.addEventListener("click", addBlog)

