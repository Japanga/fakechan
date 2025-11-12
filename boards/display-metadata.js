// display-metadata.js
async function displayImages() {
    const gallery = document.getElementById('gallery');

    try {
        // Fetch image data from your Node.js server
        const response = await fetch('http://localhost:3000/api/images');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const images = await response.json();

        // Create HTML elements for each image
        images.forEach(image => {
            const container = document.createElement('div');
            container.classList.add('image-container');

            const imgElement = document.createElement('img');
            imgElement.src = image.url;
            imgElement.alt = image.description; // Use custom_desc as alt text

            const descElement = document.createElement('p');
            descElement.classList.add('description');
            descElement.textContent = image.description;

            container.appendChild(imgElement);
            container.appendChild(descElement);
            gallery.appendChild(container);
        });
    } catch (error) {
        console.error('Error displaying images:', error);
        gallery.innerHTML = '<p>Failed to load images.</p>';
    }
}

// Call the function to display images when the page loads
displayImages();