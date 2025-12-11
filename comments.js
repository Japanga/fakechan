// comments.js
document.getElementById('comment-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents the page from reloading

    const commentInput = document.getElementById('comment-input');
    const commentText = commentInput.value;

    if (commentText.trim() !== '') {
        // Retrieve existing comments or initialize an empty array
        const existingComments = JSON.parse(localStorage.getItem('pageComments')) || [];

        // Add new comment
        existingComments.push(commentText);

        // Save back to localStorage (must stringify for storage)
        localStorage.setItem('pageComments', JSON.stringify(existingComments));

        // Display the new comment without reloading
        displayComments();
        commentInput.value = ''; // Clear input
    }
});

function displayComments() {
    const commentsDisplay = document.getElementById('comments-display');
    commentsDisplay.innerHTML = ''; // Clear current display

    const storedComments = JSON.parse(localStorage.getItem('pageComments')) || [];

    storedComments.forEach(comment => {
        const commentPara = document.createElement('p');
        commentPara.textContent = comment;
        commentsDisplay.appendChild(commentPara);
    });
}

// Load comments when the script first runs
displayComments();
