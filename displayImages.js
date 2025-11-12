// displayImages.js
document.addEventListener('DOMContentLoaded', () => {
    const tag = 'random_uploads'; // The tag you are searching for
    const container = document.getElementById('image-container');
    const backendUrl = `http://localhost:3000/images-by-tag/${tag}`; // URL of your backend endpoint

    fetch(backendUrl)
        .then(response => response.json())
        .then(images => {
            images.forEach(image => {
                // Create an image element
                const imgElement = document.createElement('img');
                imgElement.src = image.secure_url;
                imgElement.alt = image.context && image.context.alt ? image.context.alt : 'Cloudinary image'; // Use custom metadata for alt text

                // Create a metadata display element
                const metadataElement = document.createElement('p');
                if (image.context) {
                    // Display specific custom metadata fields
                    metadataElement.textContent = `Caption: ${image.context.caption || 'N/A'}, Location: ${image.context.location || 'N/A'}`;
                } else {
                    metadataElement.textContent = 'No custom metadata found.';
                }

                // Append to the container
                const wrapper = document.createElement('div');
                wrapper.appendChild(imgElement);
                wrapper.appendChild(metadataElement);
                container.appendChild(wrapper);
            });
        })
        .catch(error => {
            console.error('Error fetching images:', error);
            container.textContent = 'Failed to load images.';
        });
});