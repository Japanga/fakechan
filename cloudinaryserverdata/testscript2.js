//tagtests.js
const cloudinary = require('cloudinary').v2;

// Configure Cloudinary with your credentials (cloud_name, api_key, api_secret)
cloudinary.config({
  cloud_name: 'dussuas34',
  api_key: '423721223638219',
  api_secret: 'gkJMCXQBwhQj48HCq9_jAJLZZLc',
  secure: true
});

async function getAllCustomDescByTag(tag) {
  try {
    // Use the search API to find resources with the specified tag
    // Ensure you request "context" as custom_desc is likely stored there
    const searchResult = await cloudinary.search
      .expression(`tags:${tag}`)
      .with_field('context') // This is crucial to get custom metadata/context
      .max_results(100) // Set max_results per page (max 500), handle pagination for more
      .execute();

    const resources = searchResult.resources;

    if (resources.length > 0) {
      console.log(`Found ${resources.length} resources with tag "${tag}":`);
      
      // Iterate through the resources and extract the custom_desc
      resources.forEach(resource => {
        const customDesc = resource.context && resource.context.custom_desc;
        if (customDesc) {
          console.log(`Public ID: ${resource.public_id}, Description: ${customDesc}`);
          document.getElementById("demo").innerHTML = `Public ID: ${resource.public_id}, Description: ${customDesc}`;
        } else {
          console.log(`Public ID: ${resource.public_id}, No custom_desc found`);
        }
      });
    } else {
      console.log(`No resources found with tag "${tag}".`);
    }

  } catch (error) {
    console.error('Error fetching resources:', error);
  }
}

// Call the function with your specific tag
getAllCustomDescByTag('random_uploads');
