// loadtextcontent.js
async function loadTxtContent() {
    const targetDivId = 'contentArea'; // The ID of the div to update
    const txtFilePath = 'https://japanga.github.io/fakechan/boards/statsdisplay.txt';    // The path to your text file

    try {
        // Fetch the content from the text file
        const response = await fetch(txtFilePath);

        // Check if the request was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Read the response body as plain text
        const textData = await response.text();

        // Find the target div and replace its content
        const contentDiv = document.getElementById(targetDivId);
        if (contentDiv) {
            // Use textContent to insert raw text safely (prevents HTML injection)
            contentDiv.textContent = textData; 
        } else {
            console.error(`Error: Div with ID "${targetDivId}" not found.`);
        }
    } catch (error) {
        console.error('Fetch error:', error);
        document.getElementById(targetDivId).textContent = 'Failed to load external content.';
    }
}
loadTxtContent();
