//boardlinks.js
/**
 * Fills the 'targetDiv' with a new paragraph element.
 */
// This function fetches links from a text file and inserts them into the page.
const externalLinks = [
    { name: "Google", url: "https://www.google.com" },
    { name: "Stack Overflow", url: "https://stackoverflow.com" },
    { name: "MDN Web Docs", url: "https://developer.mozilla.org" }
];

// Function to populate the div
function populateLinksFromArray() {
    const container = document.getElementById('links-container-js');
    let htmlContent = '<h2>Links from JS Array:</h2>';

    externalLinks.forEach(link => {
        // Use template literals to create a string of HTML for each link
        htmlContent += `<p><a href="${link.url}">${link.name}</a></p>`;
    });

    // Set the innerHTML of the container div
    container.innerHTML = htmlContent;
}

// Call the function once the script is loaded and executed
populateLinksFromArray();
