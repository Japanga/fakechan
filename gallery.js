<!-- Start writing your code here -->
$(document).ready(function () {
  const cloudName = 'dussuas34'; // Replace with your Cloudinary cloud name
  const gallery = $('#image-gallery');

  function fetchImagesByTag(tag) {
    const endpoint = `https://res.cloudinary.com/${cloudName}/image/list/${tag}.json`;

    $.getJSON(endpoint)
      .done(function (data) {
        gallery.empty(); // Clear old images
        data.resources.forEach(image => {
          const imageUrl = `https://res.cloudinary.com/${cloudName}/image/upload/c_fill,w_500,h_350/${image.public_id}.${image.format}`;
          const imgElement = `
            <li>
              <img src="${imageUrl}" alt="${image.public_id}" />
            </li>
          `;
          gallery.append(imgElement);
        });
      })
      .fail(function () {
        gallery.html("<p>No images found for this category.</p>");
      });
  }

  // Load default tag on page load
  fetchImagesByTag('landscape');

  // Bind click event for all tag buttons
  $('#tag-buttons').on('click', 'button', function () {
    const selectedTag = $(this).data('tag');
    fetchImagesByTag(selectedTag);
  });
});