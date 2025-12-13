//boardlinks.js
/**
 * Fills the 'targetDiv' with a new paragraph element.
 */
// This function fetches links from a text file and inserts them into the page.
async function loadLinks() {
  const container = document.getElementById('links-container');
  try {
    // Replace 'links.txt' with the actual path to your external file
    const response = await fetch('https://japanga.github.io/fakechan/boards/boardlinks.txt'); 
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const text = await response.text();
    
    // Split the text into lines (assuming one link per line, formatted as [Text](URL))
    const lines = text.trim().split('\n'); 
    
    // Format each line into an HTML anchor tag and join them with spaces or breaks
    const linksHtml = lines.map(line => {
      const match = line.match(/\[(.*?)\]\((.*?)\)/);
      if (match) {
        const linkText = match[1];
        const url = match[2];
        return `<a href="${url}">${linkText}</a>`;
      }
      return ''; // Skip lines that don't match the format
    }).join(' '); // Joins links with a space, creating a paragraph flow

    container.innerHTML = `<p>${linksHtml}</p>`;

  } catch (error) {
    console.error("Could not load links:", error);
    container.textContent = "Failed to load links.";
  }
}

// Call the function when the script runs (or when the page loads)
loadLinks();
