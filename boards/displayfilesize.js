// displayfilesize.js
// Function to format bytes into a readable size (KB, MB)
function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

async function getCloudinaryImageSize(publicId, cloudName) {
    // Construct the standard Cloudinary delivery URL
    const url = `https://res.cloudinary.com/${cloudName}/image/upload/${publicId}`;

    try {
        // Use a HEAD request to get headers without downloading the full image
        const response = await fetch(url, {
            method: 'HEAD'
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Get the Content-Length header, which is the file size in bytes
        const contentLength = response.headers.get('Content-Length');

        if (contentLength) {
            const sizeInBytes = parseInt(contentLength, 10);
            return {
                url: url,
                size: formatBytes(sizeInBytes)
            };
        } else {
            return {
                url: url,
                size: 'Size not available via HEAD request'
            };
        }
    } catch (error) {
        console.error("Could not fetch image details:", error);
        return {
            url: url,
            size: 'Error fetching size'
        };
    }
}

// Main execution function
async function displayImageAndSize() {
    const cloudName = 'dussuas34'; // e.g., 'demo'
    const publicId = '${image.public_id}';   // e.g., 'sample'

    const imageDetails = await getCloudinaryImageSize(publicId, cloudName);

    // Display details in the HTML elements
    document.getElementById('myImage').src = imageDetails.url;
    document.getElementById('fileSize').textContent = imageDetails.size;
}

// Call the function when the script loads
displayImageAndSize();
