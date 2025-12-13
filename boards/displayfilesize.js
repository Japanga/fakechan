// displayfilesize.js

            // Fetch file size asynchronously and update the display
            try {
                // Use the original image URL for accurate size (without transformations)
                const originalUrl = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${image.public_id}.${image.format}`;
                const size = await getFileSize(originalUrl);
                document.getElementById(`size-${image.public_id}`).textContent = `Size: ${formatBytes(size)}`;
               document.getElementById(`size-${image.public_id}`).innerHTML = `<strong>Size:</strong> ${image.width}x${image.height} ${formatBytes(size)}`;
            } catch (error) {
                console.error(error);
                document.getElementById(`size-${image.public_id}`).textContent = 'Size: N/A';
            }
        }
    } catch (error) {
        console.error('Error loading gallery:', error);
        galleryContainer.innerHTML = '<p>Error loading images. Check console for details and ensure your Cloudinary settings are correct.</p>';
    }
}
