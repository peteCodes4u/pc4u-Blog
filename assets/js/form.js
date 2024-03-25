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

// local storage (poc) solution
const username = document.getElementById('username');
const blogTitle = document.getElementById('blog-title');
const blogContent = document.getElementById('blog-content');

// post blog button 
const postBlog = document.getElementById("post-blog");


postBlog.addEventListener("click", function() {
   
    //require user to complete form
    if(
        (blogTitle.value == "") && (blogContent.value == "")  && (username.value == "") || 
        (blogTitle.value == "") || (blogContent.value == "") || (username.value == "")
    
    ) {
        // Alert user to complete the user form
         alert("Please complete the entire form to proceed")
        

    } else {
    


    // redirect to blog page after successful completion of form data entry
    window.location.href= "./blog.html"
    };
})

// back-button
document.getElementById("back-button").style.display= "none";



