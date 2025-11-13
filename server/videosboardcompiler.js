//videosboardcompiler.js 
const http = require('http');
const express = require('express');
const cors = require('cors');
const cloudinary = require('cloudinary').v2;

const app = express();
app.use(cors());
const port = 5777;
const TAG_NAME = 'video_uploads'; // Replace with your specific tag name

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'dussuas34',
  api_key: 'XXXXXXXXXXXX',
  api_secret: 'XXXXXXXXXXXXXXXX',
  secure: true
});

// Function to fetch videos by tag from Cloudinary
async function getVideosByTag(tag) {
  try {
    // Use the Search API to find resources with the specified tag and resource type 'video'
    const result = await cloudinary.search
      .expression(`resource_type:video AND tags:${tag}`)
      .sort_by('created_at', 'desc')     // Sort by creation date
      .with_field('context')             // Request contextual metadata
      .execute();
    return result.resources;
  } catch (error) {
    console.error('Error fetching videos:', error);
    return [];
  }
}

// Function to generate the HTML content with CSS and video players
function generateHtml(videos) {
  let videoHtml = '';
  if (videos.length === 0) {
    videoHtml = '<p>No videos found for this tag.</p>';
  } else {
    // Generate HTML for each video
    videos.forEach(video => {
      // Use the Cloudinary URL generation for the video source
      const videoUrl = cloudinary.url(video.public_id, {
        resource_type: 'video',
        controls: true,
        width: 400,
        height: 300,
        crop: 'fill'
      });
      
       const description = video.context && video.context.custom_desc ? video.context.custom_desc : 'No post found.';
       const author = video.context && video.context.author ? video.context.author : 'Anonymous';
      const creationDate = new Date(video.created_at).toLocaleDateString();

      videoHtml += `
        <div class="video-container">
          <h3>${video.public_id}.mp4</h3>
          <p> ${description}</p>
           <p><strong>Author:</strong> ${author}</p>
            <p><strong>Created:</strong> ${creationDate}</p>
          <video controls src="${videoUrl}">
            Your browser does not support the video tag.
          </video>
        </div>
      `;
    });
  }

  // Combine everything into a full HTML page
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Cloudinary Videos - ${TAG_NAME}</title>
        <style>
            body {
                font-family: sans-serif;
                background-color: #f0f0f0;
                padding: 20px;
            }
            .video-container {
                background-color: #fff;
                margin-bottom: 20px;
                padding: 15px;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                display: inline-block;
                margin-right: 20px;
            }
            video {
                border-radius: 5px;
            }
        </style>
    </head>
    <body>
        <div class="video-gallery">
            ${videoHtml}
        </div>
    </body>
    </html>
  `;
}

// Express route to serve the page
app.get('/', async (req, res) => {
  const videos = await getVideosByTag(TAG_NAME);
  const htmlOutput = generateHtml(videos);
  res.send(htmlOutput);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
