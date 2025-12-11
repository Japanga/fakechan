// comments.js
     // JavaScript for dynamic functionality
        const commentContainer = document.getElementById('allComments');
        const addCommentBtn = document.getElementById('addCommentBtn');
        const newCommentTextarea = document.getElementById('newComment');

        // Function to create a new comment element
        function createCommentElement(commentText) {
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');

            const authorPara = document.createElement('p');
            authorPara.classList.add('comment-author');
            authorPara.textContent = 'Anonymous User'; // You could add user input for this

            const bodyPara = document.createElement('p');
            bodyPara.classList.add('comment-body');
            bodyPara.textContent = commentText;

            commentDiv.appendChild(authorPara);
            commentDiv.appendChild(bodyPara);

            return commentDiv;
        }

        // Function to add a new comment to the DOM and local storage
        function addComment() {
            const commentText = newCommentTextarea.value.trim();

            if (commentText !== '') {
                const commentElement = createCommentElement(commentText);
                commentContainer.appendChild(commentElement); // Append new comment
                newCommentTextarea.value = ''; // Clear textarea

                // Optional: Save comments to localStorage (as a simple innerHTML string)
                localStorage.setItem('commentListing', commentContainer.innerHTML);
            }
        }

        // Function to load comments from local storage on page load
        function loadComments() {
            const savedComments = localStorage.getItem('commentListing');
            if (savedComments) {
                commentContainer.innerHTML = savedComments;
            }
        }

        // Event listener for the add comment button
        addCommentBtn.addEventListener('click', addComment);

        // Load existing comments when the page loads
        loadComments();
