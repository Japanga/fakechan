// Function to handle the form submission
function handleCommentSubmit(event) {
    // Prevent the default form submission behavior (which would reload the page)
    event.preventDefault();

    // Get the comment text from the input field
    const commentInput = document.getElementById('comment-input');
    const newCommentText = commentInput.value;

    if (newCommentText.trim() !== '') {
        // Create a new div element to hold the comment
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment'); // Add a class for potential styling
        commentDiv.textContent = newCommentText;

        // Add the new comment to the comments container
        const commentsContainer = document.getElementById('comments-container');
        commentsContainer.appendChild(commentDiv);

        // Clear the input box for the next comment
        commentInput.value = '';
    }
}

// Add an event listener to the form to call the function when submitted
const commentForm = document.getElementById('comment-form');
// Use an event listener instead of an inline HTML attribute (onclick)
commentForm.addEventListener('submit', handleCommentSubmit);
