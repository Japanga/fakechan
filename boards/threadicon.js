// threadicon.js
/**
 * Sets the favicon for the current page dynamically.
 * @param {string} iconPath - The URL or relative path to the new icon file.
 */
function setPageIcon(iconPath) {
    let link = document.getElementById('favicon');
    
    // If the link element with the ID 'favicon' doesn't exist, create it
    if (!link) {
        link = document.createElement('link');
        link.id = 'favicon';
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    
    link.href = iconPath; // Update the icon path
    // You might also want to update the type, e.g., if using SVG
    // link.type = 'image/png'; 
}

// Example function to call on a user action (as used in the HTML example above)
function setNewIcon() {
    // Replace with the path to your new icon file
    setPageIcon('https://japanga.github.io/fakechan/boards/fakechanthreads.png'); 
}
