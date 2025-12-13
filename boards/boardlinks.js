//boardlinks.js
/**
 * Fills the 'targetDiv' with a new paragraph element.
 */
// This function fetches links from a text file and inserts them into the page.
// Data for the links
const linksData = [
    { text: "/a/", url: "https://japanga.github.io/fakechan/boards/a" },
    { text: "/an/", url: "https://japanga.github.io/fakechan/boards/an" },
    { text: "/b/", url: "https://japanga.github.io/fakechan/boards/b" },
    { text: "/co/", url: "https://japanga.github.io/fakechan/boards/co" },
     { text: "/c/", url: "https://japanga.github.io/fakechan/boards/c" },
     { text: "/ck/", url: "https://japanga.github.io/fakechan/boards/ck" }
];

// Get the target div element by its ID
const container = document.getElementById('link-container');

// Function to generate and insert the links
function populateLinks() {
    let htmlContent = '['; // Start an unordered list

    // Loop through the data and create link elements
    linksData.forEach(link => {
        htmlContent += `- <b><a href="${link.url}">${link.text}</a></b>`;
    });

    htmlContent += ']'; // End the list

    // Set the innerHTML of the div to the generated content
    if (container) {
        container.innerHTML = htmlContent;
    } else {
        console.error("Link container element not found!");
    }
}

// Call the function to populate the div when the script runs
populateLinks();
