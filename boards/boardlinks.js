//boardlinks.js
/**
 * Fills the 'targetDiv' with a new paragraph element.
 */
// This function fetches links from a text file and inserts them into the page.
function replaceContent() {
    // 1. Define the data for the links
    const linksData = [
        { text: 'Google', url: 'https://www.google.com' },
        { text: 'OpenAI', url: 'https://www.openai.com' },
        { text: 'GitHub', url: 'https://www.github.com' }
    ];

    // 2. Find the target div by its ID
    const targetDiv = document.getElementById('targetDiv');

    // Check if the element actually exists before trying to modify it
    if (!targetDiv) {
        console.error("Error: Could not find element with ID 'targetDiv'");
        return;
    }

    // 3. Generate the new HTML content using template literals
    // We can use map to generate an array of link HTML strings,
    // then join them together. We also add line breaks <br> for spacing.
    const newHtml = linksData.map(link => {
        return `<a href="${link.url}" target="_blank">${link.text}</a>`;
    }).join('<br>'); // Join the links with a line break

    // 4. Replace the inner HTML of the div
    targetDiv.innerHTML = newHtml;
}
