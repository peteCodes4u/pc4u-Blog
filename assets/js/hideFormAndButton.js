const backButton = document.getElementById("back-button");
backButton.style.display = "none";

backButton.addEventListener("click", function(){
    hideUserForm();
    backButton.style.display = "none";
})

const postBlog = document.getElementById("post-blog");
postBlog.addEventListener("click", function(){

    // hide userform
    hideUserForm = () => {
        const x = document.getElementById("fullForm");
        if (x.style.display === "none") {
            x.style.display = "flex"
        } else {
            x.style.display = "none";
        }
    }
    
    // execute hide form button
    hideUserForm();

    // show back button
        const z = backButton;
        if (z.style.display === "block") {
            z.style.diplay = "none"
        } else {
            z.style.display ="block"
        }

})