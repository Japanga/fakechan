// randomheaders.js
/**
 * Array of image paths. Replace with your own image URLs.
 */
const imageUrls = [
    'https://japanga.github.io/fakechan/boards/1.png',
    'https://japanga.github.io/fakechan/boards/2.png',
    'https://japanga.github.io/fakechan/boards/3.png',
    // Add more image URLs here
];

/**
 * Helper function to get a random image URL from the array.
 * @returns {string} A randomly selected image URL.
 */
function getRandomImageUrl() {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
}

/**
 * Looks for all elements with the class "content-box" and fills each
 * with a randomly selected image by setting its background image style.
 */
function fillContentBoxesWithRandomImages() {
    // Get all elements with the class "content-box"
    const contentBoxes = document.getElementsByClassName('content-box');

    // Loop through the collection of elements
    for (let i = 0; i < contentBoxes.length; i++) {
        const box = contentBoxes[i];
        const randomImageUrl = getRandomImageUrl();

        // Set the background image style
        box.style.backgroundImage = `url('${randomImageUrl}')`;
        // Optional: Add other background styles for better presentation
        box.style.backgroundRepeat = 'no-repeat';
        box.style.backgroundPosition = 'center';
        box.style.backgroundSize = 'cover';
    }
}

// Call the function automatically when the script loads
fillContentBoxesWithRandomImages();
