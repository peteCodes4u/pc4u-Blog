
const itemToAdd = {

    id: 'username',
    name: 'blog-title',
    slug: 'blog-content',
};

const addToCartCookie = (cartItem) => {
    const cart = window.localStorage.getItem('cart');

    if(cart === null) {
        window.localStorage.setItem('cart', JSON.stringify([cartItem]));
    } else {
        const getCurrentCart = window.localStorage.getItem('cart');
        const currentCart = JSON.parse(getCurrentCart);

        currentCart.push(cartItem);

        window.localStorage.setItem('cart', JSON.stringify(currentCart));
    }
};


// post blog button 
const postBlog = document.getElementById("post-blog");

postBlog.addEventListener("click", function(){

    addToCartCookie(itemToAdd);

})

