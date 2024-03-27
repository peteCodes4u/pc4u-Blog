

// reference post button
const postBlog = document.getElementById("post-blog");

// reference fields for user data input
const username = document.getElementById('username');
const blogTitle = document.getElementById('blog-title');
const blogContent = document.getElementById('blog-content');


// dynamic blog post array
let blogPosts = [];

// collect post data
const collectPosts = function () {
    const currentPost = {
      username: username.value,
      title: blogTitle.value,
      content: blogContent.value,
    };

    blogPosts.push(currentPost);

    return blogPosts;
  }
// store posts object
storePost = function () {

  localStorage.setItem('posts',JSON.stringify(blogPosts))

}


// write post data
const xPost = localStorage.getItem('post');

function writePost () {

let parsedJSON = JSON.parse(xPost);
for (let i=0; i < parsedJSON; i++) {
  console.log(parsedJSON[i].title)
}


}

// write post function 
function xWritePost () {
  // Retrieve the JSON array from local storage
const jsonStr = localStorage.getItem('post');

// Parse the JSON array into a JavaScript object
const dataArray = JSON.parse(jsonStr);

// Access the data and write it to the webpage
const contentElement = document.getElementById('blogTitle');

// Clear any existing content
contentElement.innerHTML = '';

// Iterate over the data array and display each item
dataArray.forEach(item => {

    const itemElement = document.createElement('div');
    itemElement.textContent = item.value;
    contentElement.appendChild(itemElement);
});
}
