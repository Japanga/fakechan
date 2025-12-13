// threadicon.js
// Function to create and configure the favicon link
function createFaviconLink(document, href) {
    const link = document.createElement('link');
    link.id = 'favicon'; // Assign an ID for potential later updates
    link.rel = 'icon';
    link.type = 'image/png'; // Adjust type based on your image file (e.g., image/x-icon for .ico)
    link.href = href;
    return link;
}

// Function to open the window and set the icon and content
function openCustomBlankPage() {
    // Open a new, blank window
    const newWindow = window.open('about:blank', '_blank');

    if (newWindow) {
        // Ensure the new window's document is ready
        newWindow.onload = function() {
            // Append the favicon link to the head of the new document
            const faviconUrl = 'https://japanga.github.io/fakechan/boards/fakechanthreads.png'; // Replace with your icon's URL
            newWindow.document.head.appendChild(createFaviconLink(newWindow.document, faviconUrl));

         
        };
    } else {
        alert('Pop-ups blocked! Please allow pop-ups for this site.');
    }
}

// You can call this function with a button click or other event
// openCustomBlankPage();
