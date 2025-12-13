//boardlinks.js
/**
 * Fills the 'targetDiv' with a new paragraph element.
 */
// This function fetches links from a text file and inserts them into the page.
// Data for the links
const linksData = [
    { text: "Google", url: "https://www.google.com" },
    { text: "MDN Web Docs", url: "https://developer.mozilla.org" },
    { text: "Stack Overflow", url: "https://stackoverflow.com" }
];

// Get the target div element by its ID
const container = document.getElementById('link-container');

// Function to generate and insert the links
function populateLinks() {
    let htmlContent = '<ul>'; // Start an unordered list

    // Loop through the data and create link elements
    linksData.forEach(link => {
        htmlContent += `<li><a href="${link.url}">${link.text}</a></li>`;
    });

    htmlContent += '</ul>'; // End the list

    // Set the innerHTML of the div to the generated content
    if (container) {
        container.innerHTML = htmlContent;
    } else {
        console.error("Link container element not found!");
    }
}

// Call the function to populate the div when the script runs
populateLinks();
