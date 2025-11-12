// importstest.js
import { newParagraphText } from './testscript3.js';

function replaceParagraphContent() {
    // Get the paragraph element by its ID
    const paragraphElement = document.getElementById('main-paragraph');

    // Check if the element exists before trying to change its content
    if (paragraphElement) {
        paragraphElement.textContent = newParagraphText;
        alert("Paragraph content updated successfully!");
    } else {
        alert("Paragraph element with ID 'main-paragraph' not found.");
    }
}

// You can call the function when the script runs or in response to an event
document.addEventListener('DOMContentLoaded', replaceParagraphContent);
