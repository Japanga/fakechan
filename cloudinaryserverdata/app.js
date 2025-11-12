//app.js
const express = require('express');
const cloudinary = require('cloudinary').v2;
const cors = require('cors');

const app = express();
const PORT = 3000;

// Configure Cloudinary with your credentials
cloudinary.config({
  cloud_name: 'dussuas34',
  api_key: '423721223638219',
  api_secret: 'gkJMCXQBwhQj48HCq9_jAJLZZLc',
  secure: true
});

// Use cors to allow frontend requests
app.use(cors());

// Define a route to fetch image data
app.get('/api/images', async (req, res) => {
  try {
    // Use the Admin API to retrieve resources
    // The 'context=true' option is crucial to fetch custom metadata (descriptions)
    const result = await cloudinary.api.resources({ 
      type: 'upload', 
      prefix: '', // Optional: specify a folder prefix
      max_results: 30, // Adjust as needed for pagination
      context: true // Get custom context metadata
    });

    // Extract relevant data: public_id, URL, and custom description from context
    const images = result.resources.map(resource => {
      // The description is stored in the 'context.custom.description' field
      const description = resource.context && resource.context.custom ? resource.context.custom.description : 'No description available';
      return {
        publicId: resource.public_id,
        url: resource.secure_url,
        description: description
      };
    });

    res.json(images);

  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching images');
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});