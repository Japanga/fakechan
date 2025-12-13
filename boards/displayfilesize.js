// displayfilesize.js
// Function to format bytes into a readable size (KB, MB)
// Function to format bytes into a human-readable size
function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

// Function to fetch the image and display its size
async function getImageSize() {
    const infoContainer = document.getElementById('image-info');
    const publicId = infoContainer.dataset.publicId;
    const cloudName = infoContainer.dataset.cloudName;
    const sizeDisplay = document.getElementById('file-size-display');
    const publicIdDisplay = document.getElementById('public-id-display');

    if (!publicId || !cloudName) {
        sizeDisplay.textContent = 'Error: Missing public ID or cloud name.';
        return;
    }

    // Display public ID
    publicIdDisplay.textContent = publicId;

    // Construct the Cloudinary delivery URL
    const imageUrl = `res.cloudinary.com{cloudName}/image/upload/${publicId}.jpg`; // Assuming .jpg format

    try {
        // Fetch the image as a Blob
        const response = await fetch(imageUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const blob = await response.blob();

        // Get the size from the blob object
        const fileSizeInBytes = blob.size;
        sizeDisplay.textContent = formatBytes(fileSizeInBytes);

    } catch (error) {
        console.error("Could not fetch image size:", error);
        sizeDisplay.textContent = 'Error fetching size.';
    }
}

// Run the function when the script loads
getImageSize();
