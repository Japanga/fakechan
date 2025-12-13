// displayfilesize.js
// Function to format bytes into a readable size (KB, MB)
// Function to format bytes into a human-readable size
/**
 * Fetches the file size of a Cloudinary image and displays it in a span element.
 *
 * @param {string} publicId - The public ID of the image in Cloudinary.
 * @param {string} cloudName - Your Cloudinary cloud name.
 */
function getCloudinaryImageSize(publicId, cloudName) {
    const spanElement = document.getElementById('file-size-display');
    if (!spanElement) {
        console.error('Span element with id "file-size-display" not found.');
        return;
    }

    // Construct the image URL. Using a simple delivery URL for the HEAD request.
    const imageUrl = `res.cloudinary.com{cloudName}/image/upload/${publicId}`;

    const xhr = new XMLHttpRequest();
    xhr.open('HEAD', imageUrl, true); // Use HEAD method to only fetch headers

    xhr.onload = function () {
        if (xhr.status === 200) {
            const fileSize = xhr.getResponseHeader('Content-Length');
            if (fileSize) {
                // Format the file size for display
                const formattedSize = formatBytes(parseInt(fileSize, 10));
                spanElement.textContent = formattedSize;
            } else {
                spanElement.textContent = 'Size not available';
            }
        } else {
            spanElement.textContent = 'Error fetching size';
            console.error('Error fetching image size:', xhr.statusText);
        }
    };

    xhr.onerror = function () {
        spanElement.textContent = 'Network error';
        console.error('Network error occurred during XHR request.');
    };

    xhr.send(null); // Send the request
}

/**
 * Helper function to format bytes into a human-readable string (KB, MB).
 * @param {number} bytes - The file size in bytes.
 * @returns {string} The formatted file size.
 */
function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
window.onload = () => {
  getCloudinaryImageSize('${image.public_id}', 'dussuas34');
};
