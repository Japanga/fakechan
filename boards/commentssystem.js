// commentssystem.js
document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('comment-form');
    const commentsContainer = document.getElementById('comments-container');

    // Add an event listener for the form submission
    commentForm.addEventListener('submit', function (event) {
        // Prevent the default form submission behavior (which reloads the page)
        event.preventDefault();

        // Get values from the form inputs
        const author = document.getElementById('comment-author').value;
        const commentBody = document.getElementById('comment-body').value;

        // Create new HTML elements to display the comment
        const newComment = document.createElement('div');
        newComment.classList.add('comment'); // Add a class for potential styling
        newComment.innerHTML = `
            <strong>${author}</strong>
            <p>${commentBody}</p>
            <hr>
        `;

        // Append the new comment to the comments container
        commentsContainer.appendChild(newComment);

        // Clear the form fields for the next comment
        commentForm.reset();
    });
});
