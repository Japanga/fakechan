// display-metadata.js

const cloudinary = require('cloudinary').v2;

// Configure Cloudinary using environment variables
// Ensure CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET are set
cloudinary.config({
  cloud_name: 'dussuas34',
  api_key: '423721223638219',
  api_secret: 'gkJMCXQBwhQj48HCq9_jAJLZZLc',
  secure: true
});

const getCustomDescription = async (publicId) => {
  try {
    // Use the Admin API's resource method to get image details
    const result = await cloudinary.api.resource(publicId, {
      // The context parameter ensures contextual metadata is included in the response
      context: true
    });
    // Access the custom_desc from the response
    const customDesc = result.context && result.context.custom && result.context.custom.custom_desc;

    if (customDesc) {
      console.log(`The custom_desc for image "${publicId}" is:`, customDesc);
    } else {
      console.log(`No custom_desc found for image "${publicId}" or it was not stored in 'context.custom'.`);
    }

  } catch (error) {
    console.error('Error fetching image metadata:', error.message);
  }
};

// Replace 'your_public_id' with the actual public ID of your image
getCustomDescription('ftnzsbd22tlun8ccvxag');
export const replacementText = getCustomDescription('ftnzsbd22tlun8ccvxag');
