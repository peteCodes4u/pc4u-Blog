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
    itemElement.textContent = item.name + ' - ' + item.value;
    contentElement.appendChild(itemElement);
});