// importstest.js
import { replacementText } from '/fakechan/cloudinaryserverdata/display-metadata.js';

// Function to replace the text
function replacePageText() {
    // Get the element by its ID
    const targetElement = document.getElementById('targetElement');

    // Check if the element exists before trying to modify it
    if (targetElement) {
        // Replace the text content with the imported constant
        targetElement.textContent = replacementText;
    } else {
        console.error('Target element not found!');
    }
}

// Call the function when the script runs
replacePageText();
