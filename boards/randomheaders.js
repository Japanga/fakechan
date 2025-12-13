// randomheaders.js
const imageSources = [
    'fakechan/boards/1.png',
    'fakechan/boards/2.png',
    'fakechan/boards/3.png',
    'fakechan/boards/4.png',
    'fakechan/boards/5.png'
];

/**
 * Selects an image element by its data attribute and sets a random source.
 */
function randomizeImage() {
    // 1. Find the target image element using a CSS selector for the data attribute
    const targetImage = document.querySelector('.imgDiv img[data-random-image]');

    if (targetImage) {
        // 2. Generate a random index
        const randomIndex = Math.floor(Math.random() * imageSources.length);

        // 3. Set the src attribute to a random image from the array
        targetImage.src = imageSources[randomIndex];
    } else {
        console.error('Image element with data-random-image not found.');
    }
}

// Optional: Execute the function on page load
document.addEventListener('DOMContentLoaded', (event) => {
    randomizeImage();
});
