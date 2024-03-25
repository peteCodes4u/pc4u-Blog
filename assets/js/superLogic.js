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
}
};
// post blog button
const postBlog = document.getElementById("post-blog");

postBlog.addEventListener("click", function(){

const username = document.getElementById('username');
const blogTitle = document.getElementById('blog-title');
const blogContent = document.getElementById('blog-content');

const postItem = {
username: username.value,
title: blogTitle.value,
content: blogContent.value,
}

addNuBlogPost(postItem);
});