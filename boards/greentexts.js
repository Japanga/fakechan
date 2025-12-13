//greentexts.js
function applyGreenToBlockquotes() {
    // Select all paragraph elements in the document
    const paragraphs = document.querySelectorAll("p");

    // Iterate over the NodeList of paragraphs
    paragraphs.forEach(paragraph => {
        // Get the text content, trim any leading/trailing whitespace
        const textContent = paragraph.textContent.trim();

        // Check if the text content starts with a '>'
        if (textContent.startsWith(">")) {
            // If it does, change the text color to green
            paragraph.style.color = "green";
        }
    });
}
applyGreenToBlockquotes();
