// randomheaders.js
/**
 * Array of image paths. Replace with your own image URLs.
 */
const imageUrls = [
    'https://japanga.github.io/fakechan/boards/1.png',
    'https://japanga.github.io/fakechan/boards/2.png',
    'https://japanga.github.io/fakechan/boards/3.png',
    'https://japanga.github.io/fakechan/boards/4.png',
    'https://japanga.github.io/fakechan/boards/5.png',
    'https://japanga.github.io/fakechan/boards/6.png',
    'https://japanga.github.io/fakechan/boards/7.png',
    'https://japanga.github.io/fakechan/boards/8.png',
    'https://japanga.github.io/fakechan/boards/9.png',
    'https://japanga.github.io/fakechan/boards/10.png',
    'https://japanga.github.io/fakechan/boards/11.png',
    'https://japanga.github.io/fakechan/boards/12.png',
    'https://japanga.github.io/fakechan/boards/13.png',
    'https://japanga.github.io/fakechan/boards/14.png',
    'https://japanga.github.io/fakechan/boards/15.png',
    'https://japanga.github.io/fakechan/boards/16.png',
    'https://japanga.github.io/fakechan/boards/17.png',
    'https://japanga.github.io/fakechan/boards/18.png',
    'https://japanga.github.io/fakechan/boards/19.png',
    'https://japanga.github.io/fakechan/boards/20.png',
    'https://japanga.github.io/fakechan/boards/21.png',
    'https://japanga.github.io/fakechan/boards/22.png',
    'https://japanga.github.io/fakechan/boards/23.png',
    'https://japanga.github.io/fakechan/boards/24.png',
    'https://japanga.github.io/fakechan/boards/25.png',
    'https://japanga.github.io/fakechan/boards/26.png',
    'https://japanga.github.io/fakechan/boards/27.png',
    'https://japanga.github.io/fakechan/boards/28.png',
    'https://japanga.github.io/fakechan/boards/29.png',
    'https://japanga.github.io/fakechan/boards/30.png',
    'https://japanga.github.io/fakechan/boards/31.png',
    'https://japanga.github.io/fakechan/boards/32.png',
    'https://japanga.github.io/fakechan/boards/33.png',
    'https://japanga.github.io/fakechan/boards/34.png',
    'https://japanga.github.io/fakechan/boards/35.png',
    'https://japanga.github.io/fakechan/boards/36.png',
    'https://japanga.github.io/fakechan/boards/37.png',
    'https://japanga.github.io/fakechan/boards/38.png',
    'https://japanga.github.io/fakechan/boards/39.png',
    'https://japanga.github.io/fakechan/boards/40.png'
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
