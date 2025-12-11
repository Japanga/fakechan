// comments.js
     document.addEventListener('DOMContentLoaded', () => {
    const commentInput = document.getElementById('comment-input');
    const postButton = document.getElementById('post-comment-btn');
    const commentsList = document.getElementById('comments-list');

    // Function to create a new comment div element
    function createCommentElement(commentText) {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment'; // Add a class for potential styling
        commentDiv.innerHTML = `<div class="comment-text">${commentText}</div>`;
        return commentDiv;
    }

    // Function to handle posting a new comment
    function postComment() {
        const text = commentInput.value.trim();
        if (text !== '') {
            const newComment = createCommentElement(text);
            // Append the new comment to the comments list
            commentsList.appendChild(newComment);
            // Clear the input area
            commentInput.value = '';
            // Optional: save to localStorage (comments will persist on refresh)
            saveCommentsToLocalStorage(); 
        }
    }

    // Event listener for the post button
    postButton.addEventListener('click', postComment);

    // --- Optional: Persistence using localStorage ---

    // Function to save comments innerHTML to localStorage
    function saveCommentsToLocalStorage() {
        localStorage.setItem('pageComments', commentsList.innerHTML);
    }

    // Function to load comments from localStorage on page load
    function loadCommentsFromLocalStorage() {
        const savedCommentsHTML = localStorage.getItem('pageComments');
        if (savedCommentsHTML) {
            commentsList.innerHTML = savedCommentsHTML;
        }
    }

    // Load existing comments when the script runs (page loads)
    loadCommentsFromLocalStorage();
});
