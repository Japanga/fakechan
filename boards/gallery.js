//gallery.js
const CLOUD_NAME = 'dussuas34';
const galleryElement = document.getElementById('image-gallery');

const fetchImages = async () => {
    // The URL structure for a client-side resource list of all images (without a specific tag)
    // Cloudinary caches this JSON response for 60 seconds.
    const url = `https://res.cloudinary.com/${CLOUD_NAME}/image/list/all.json`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Images fetched:", data);
        displayImages(data.resources);
    } catch (error) {
        console.error("Error fetching images:", error);
        galleryElement.innerHTML = `<p>Failed to load images. Please check your Cloudinary cloud name and ensure client-side resource list is enabled in security settings.</p>`;
    }
};

const displayImages = (images) => {
    if (images.length === 0) {
        galleryElement.innerHTML = `<p>No images found in the gallery.</p>`;
        return;
    }

    images.forEach((image, index) => {
        // Construct the image URL using the public ID and cloud name
        const imageUrl = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${image.public_id}.${image.format}`;
        
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');

        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        imgElement.alt = `Gallery image ${index + 1}`;
        // Add optional transformations, e.g., w_300,h_200,c_fill
        // const transformedUrl = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_200,h_200,c_fill/${image.public_id}.${image.format}`;
        // imgElement.src = transformedUrl;

        const numberElement = document.createElement('span');
        numberElement.classList.add('image-number');
        numberElement.textContent = index + 1; // Assign a number starting from 1

        imageContainer.appendChild(imgElement);
        imageContainer.appendChild(numberElement);
        galleryElement.appendChild(imageContainer);
    });
};

// Initialize the fetch process
fetchImages();
