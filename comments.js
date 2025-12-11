//comments.js
// Array to store comments (temporary storage)
const commentsArray = [];

// Select elements from the DOM
const commentForm = document.getElementById('comment-form');
const commentText = document.getElementById('comment-text');
const commentsContainer = document.getElementById('comments-container');

// Function to display comments
function displayComments() {
    // Clear the container before re-rendering
    commentsContainer.innerHTML = ''; 

    // Iterate over the comments array and create HTML elements
    commentsArray.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.textContent = comment; // Set the comment text
        commentsContainer.appendChild(commentDiv); // Add to the container
    });
}

// Event listener for the form submission
commentForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const newComment = commentText.value;

    if (newComment.trim() !== '') {
        commentsArray.push(newComment); // Add the new comment to the array
        displayComments(); // Update the display
        commentText.value = ''; // Clear the textarea
    }
});

// Initial display (in case you want to load some default comments)
displayComments();
