// app.js
async function fetchImages() {
    const tag = 'nature'; // Replace with your specific tag
    const response = await fetch(`http://localhost:3000/images/${tag}`);
    const images = await response.json();
    displayImages(images);
}

function displayImages(images) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = ''; // Clear previous images
    images.forEach(image => {
        const container = document.createElement('div');
        container.classList.add('image-container');

        const img = document.createElement('img');
        img.src = image.url;
        img.alt = image.description; // Use the description as alt text

        const desc = document.createElement('p');
        desc.textContent = image.description; // Display the custom description

        container.appendChild(img);
        container.appendChild(desc);
        gallery.appendChild(container);
    });
}

fetchImages();
