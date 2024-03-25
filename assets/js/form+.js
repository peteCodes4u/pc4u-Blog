
// dark mode toggle
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


// blog post content local storage solution 
let postItem = {};

const addNuBlogPost = (nuPost) => {
const post = window.localStorage.getItem('post');

if(post === null) {
window.localStorage.setItem('post', JSON.stringify([nuPost]));
} else {
const getCurrentPost = window.localStorage.getItem('post');
const currentPost = JSON.parse(getCurrentPost);

currentPost.push(nuPost);

window.localStorage.setItem('post', JSON.stringify(currentPost));
}};

// post blog button
const postBlog = document.getElementById("post-blog");

// post blog
postBlog.addEventListener("click", function() {

    const username = document.getElementById('username');
    const blogTitle = document.getElementById('blog-title');
    const blogContent = document.getElementById('blog-content');

    const postItem = {
    username: username.value,
    title: blogTitle.value,
    content: blogContent.value,
    }
   
    //require user to complete form
    if(
        (blogTitle.value == "") && (blogContent.value == "")  && (username.value == "") || 
        (blogTitle.value == "") || (blogContent.value == "") || (username.value == "")
    
    ) {
        // Alert user to complete the user form
         alert("Please complete the entire form to proceed")
        

    } else {
    
    // add post item
    addNuBlogPost(postItem);
    // redirect to blog page after successful completion of form data entry
    window.location.href= "./blog.html"
    };
})