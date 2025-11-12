// main.js
// Import the displayMessage function from the constants.js module
import { displayMessage } from '/fakechan/cloudinaryserverdata/display-metadata.js';

// Get the button element
const button = document.getElementById('actionButton');

// Add an event listener to the button
button.addEventListener('click', () => {
    // Call the imported function on click
    displayMessage();
});
