// displayfilesize.js
// Replace with your actual cloud name and image public ID
const cloudName = 'dussuas34';
const imagePublicId = '${image.public_id}'; // Use the variable here

// Construct the delivery URL (you can add transformations if needed)
const imageUrl = `res.cloudinary.com{cloudName}/image/upload/${imagePublicId}`;e)}`;
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
async function getImageSize(url) {
    try {
        const response = await fetch(url, {
            method: 'HEAD'
        });

        if (response.ok) {
            const contentLength = response.headers.get('Content-Length');
            if (contentLength) {
                return parseInt(contentLength, 10); // Size in bytes
            } else {
                console.log('Content-Length header not available.');
                return null;
            }
        } else {
            console.error(`Error fetching image headers: ${response.statusText}`);
            return null;
        }
    } catch (error) {
        console.error('Network or CORS error:', error);
        return null;
    }
                                     }
function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
// ... (cloudName, imagePublicId, getImageSize, formatBytes functions defined above) ...

const displayElement = document.getElementById('fileSizeDisplay');

getImageSize(imageUrl).then(sizeInBytes => {
    if (sizeInBytes !== null) {
        const formattedSize = formatBytes(sizeInBytes);
        displayElement.textContent = formattedSize;
    } else {
        displayElement.textContent = 'Size not available';
    }
});
