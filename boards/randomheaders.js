// randomheaders.js
// 1. Define arrays of content
const headers = [
    "Welcome to the Mountain View!",
    "Explore the Ocean Depths!",
    "City Lights Await!",
    "Desert Adventure Time!"
];

const images = [
    "https://japanga.github.io/fakechan/boards/1.png", // Example image URLs (use your own or a service like Picsum)
    "https://japanga.github.io/fakechan/boards/2.png",
    "https://japanga.github.io/fakechan/boards/3.png",
    "https://japanga.github.io/fakechan/boards/4.png
];

// 2. Function to generate a random integer within a range
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// 3. Main function to update the div
function generateRandomContent() {
    // Get a random index
    const randomHeaderIndex = getRandomInt(headers.length);
    const randomImageIndex = getRandomInt(images.length);

    // Get the HTML element by its ID
    const contentDiv = document.getElementById("contentDiv");

    // Update the innerHTML of the div with a random header (H3) and image (img)
    // We can use template literals for cleaner code
    contentDiv.innerHTML = `
     <h3>${headers[randomHeaderIndex]}</h3>
        <img src="${images[randomImageIndex]}" alt="Random image">
    `;
}

// Optional: Run the function once when the page loads
window.onload = generateRandomContent;
