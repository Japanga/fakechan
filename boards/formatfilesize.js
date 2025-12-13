//formatfilesize.js
function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// --- Helper Function 2: Get file size for an image using XHR (Asynchronous) ---
/**
 * Uses XHR to fetch the file size for a given image URL.
 * @param {string} url - The URL of the image.
 * @returns {Promise<number>} The file size in bytes.
 */
function getFileSize(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('HEAD', url, true); // Use HEAD request to get headers without downloading the full image
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const fileSize = xhr.getResponseHeader('Content-Length');
                    resolve(parseInt(fileSize, 10) || 0);
                } else {
                    reject(new Error(`Failed to get file size for ${url}: Status ${xhr.status}`));
                }
            }
        };
        xhr.send();
    });
}
