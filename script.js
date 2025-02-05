// script.js

// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'Sí') {
        // Flash rainbow colors
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayCatHeart(); // Display the cat-heart.gif
        });
    } else if (option === 'No') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('No-button').innerText = 'Segura?'; 
        // Increase font size of "Sí" button
        var SíButton = document.getElementById('Sí-button');
        var currentFontSize = window.getComputedStyle(SíButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
        SíButton.style.fontSize = newSize + 'px';
    } else {
        // If neither "Sí" Nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the Joshua.jpg initially
function displayJoshua() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the Joshua
    var JoshuaImage = new Image();
    // Set the source (file path) for the Joshua image
    JoshuaImage.src = 'Joshua.jpg'; // Assuming the Joshua image is named "Joshua.jpg"
    // Set alternative text for the image (for accessibility)
    JoshuaImage.alt = 'Joshua';
    // When the Joshua image is fully loaded, add it to the image container
    JoshuaImage.onload = function() {
        imageContainer.appendChild(JoshuaImage);
    };
}

// Function to display the cat-heart.gif
function displayCatHeart() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat-heart
    var catHeartImage = new Image();
    // Set the source (file path) for the cat-heart image
    catHeartImage.src = 'cat-heart.gif'; // Assuming the cat-heart image is named "cat-heart.gif"
    // Set alternative text for the image (for accessibility)
    catHeartImage.alt = 'Cat Heart';
    // When the cat-heart image is fully loaded, add it to the image container
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        // Hide the options container
        document.getElementById('options').style.display = 'none';
    };
}

// Display the Joshua.jpg initially
displayJoshua();
