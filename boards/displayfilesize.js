// displayfilesize.js
async function displayImageDetails() {
    const dataDiv = document.getElementById('image-data');
    const publicId = dataDiv.getAttribute('data-public-id');
    const cloudName = dataDiv.getAttribute('data-cloud-name');

    if (!publicId || !cloudName) {
        dataDiv.innerHTML = '<p>Error: Public ID or Cloud Name not found.</p>';
        return;
    }

    // Construct the Cloudinary image URL (e.g., res.cloudinary.com)
    const imageUrl = `https://res.cloudinary.com/dussuas34/image/upload/${publicId}.jpg`; // Use a default format like jpg

    try {
        // Fetch the image as a Blob (binary data)
        const response = await fetch(imageUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const blob = await response.blob();

        // Get the file size in bytes from the Blob object
        const fileSizeInBytes = blob.size;

        // Calculate size in Megabytes (MB)
const megaBytes = fileSizeInBytes / (1024 * 1024);

// To format the number to a specific number of decimal places (e.g., 2)
const formattedSizeInMB = megaBytes.toFixed(2);

        // Get the format (MIME type) from the Blob object
        const imageFormat = blob.type.split('/')[1];

        // Create an object URL to display the image
        const objectURL = URL.createObjectURL(blob);

        // Display the image and details in the div area
        dataDiv.innerHTML = `
            <img src="${objectURL}" alt="Cloudinary Image" style="max-width: 300px;">
            <p><strong>Filename:</strong> <a href="https://res.cloudinary.com/dussuas34/image/upload/${publicId}">${publicId}.${imageFormat}</a></p>
            <p><strong>Size:</strong> ${formattedSizeInMB} bytes</p>
        `;

         dataDiv.style.lineHeight = '1.7';

        // Clean up the object URL after the image is loaded and displayed
        const imgElement = dataDiv.querySelector('img');
        imgElement.onload = () => {
            URL.revokeObjectURL(objectURL);
        };

    } catch (error) {
        console.error("Error fetching image details:", error);
        dataDiv.innerHTML = `<p>Error: Failed to load image details. ${error.message}</p>`;
    }
}

// Call the function when the script loads
displayImageDetails();
