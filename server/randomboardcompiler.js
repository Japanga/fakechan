//gridcompiler.js 
const http = require('http');
const cloudinary = require('cloudinary').v2;

// Replace with your actual Cloudinary secret and regular API key, ours is not provided here for obvious security reasons.
cloudinary.config({
  cloud_name: 'dussuas34',
  api_key: 'XXXXXXXXXXXXX',
  api_secret: 'XXXXXXXXXXXX',
  secure: true
});

// Function to fetch images and build the HTML
async function getImageGridHtml() {
  try {
    // Fetch resources, specifying type and that you want context (metadata) and tags
    const result = await cloudinary.search
      .expression('resource_type:image') // Fetch all images
      .expression('tags:random_uploads') // Fetch all images
      .with_field('context')             // Request contextual metadata
      .with_field('tags')                // Request tags
      .sort_by('created_at', 'desc')     // Sort by creation date
      .max_results(30)                   // Limit results
      .execute();

    const images = result.resources;

    // Build the grid HTML string
    let imagesHtml = '';
    for (const image of images) {
      const imageUrl = cloudinary.url(image.public_id, {
        width: 'auto',
        height: 300,
        crop: 'fill',
        fetch_format: 'auto',
        quality: 'auto'
      });
      const description = image.context && image.context.custom_desc ? image.context.custom_desc : 'No post found.';
      const author = image.context && image.context.author ? image.context.author : 'Anonymous';
      const creationDate = new Date(image.created_at).toLocaleDateString();
      const tags = image.tags.join(', ') || 'None';

      imagesHtml += `
        <div class="grid-item">
          <img src="${imageUrl}" alt="${description}">
          <div class="details">
            <p> ${description}</p>
            <p><strong>URL:</strong> ${image.public_id}.png </p>
            <p><strong>Author:</strong> ${author}</p>
            <p><strong>Created:</strong> ${creationDate}</p>
            <p><strong>Tags:</strong> ${tags}</p>
          </div>
        </div>
      `;
    }

    // Return the full HTML page with embedded CSS and image grid
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Cloudinary Image Grid</title>
          <style>
              .image-grid {
                  display: grid;
                   overflow: scroll;
                  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                  gap: 20px;
                  padding: 20px;
              }
              .grid-item {
                  border: 1px solid #ccc;
                  border-radius: 8px;
                  overflow: hidden;
                  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                       height: 400px; 
     width: 300px;
              }
              .grid-item img {
                  width: 60%; /* Desired display width */
    height: auto; /* Desired display height */
    object-fit: fill;
                  display: block;
              }
              .details {
                  padding: 15px;
              }
              .details p {
                  margin: 0 0 5px;
                  font-size: 0.9em;
              }
          </style>
      </head>
      <body>
          <div class="image-grid">
              ${imagesHtml}
          </div>
      </body>
      </html>
    `;

  } catch (error) {
    console.error("Error fetching images from Cloudinary:", error);
    return `<html><body><h1>Error loading images: ${error.message}</h1></body></html>`;
  }
}

// Create the Node.js server
const server = http.createServer(async (req, res) => {
  if (req.url === '/') {
    const htmlContent = await getImageGridHtml();
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlContent);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
