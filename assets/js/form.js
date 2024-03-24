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

// post blog button 

document.getElementById("back-button").style.display= "none";

const postBlog = document.getElementById("post-blog");
postBlog.addEventListener("click", function() {
    window.location.href= "./blog.html"
})

