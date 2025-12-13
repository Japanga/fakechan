// commentsysstem.js
// Function to get a URL parameter by name
function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Get the URL ID (e.g., from ?id=1)
const pageId = getParameterByName('id') || 'general'; // Default to 'general' if no ID
document.getElementById('page-id-display').textContent = pageId;

const commentsContainer = document.getElementById('comments-container');
const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');

// Key for localStorage specific to this page
const STORAGE_KEY = `comments_${pageId}`;

// 1. Load comments from localStorage
function loadComments() {
    const comments = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    commentsContainer.innerHTML = '';
    
    // Display comments (latest first)
    comments.reverse().forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');

        const dateSpan = document.createElement('div');
        dateSpan.classList.add('comment-date');
        dateSpan.textContent = new Date(comment.date).toLocaleString();

        const contentPara = document.createElement('p');
        contentPara.textContent = comment.content;

        commentDiv.appendChild(dateSpan);
        commentDiv.appendChild(contentPara);
        commentsContainer.appendChild(commentDiv);
    });
}

// 2. Add a new comment
function addComment(event) {
    event.preventDefault();
    const content = commentInput.value.trim();

    if (content) {
        const comments = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        const newComment = {
            content: content,
            date: new Date().toISOString() // Store date in standard format
        };

        comments.push(newComment);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(comments));
        commentInput.value = '';
        loadComments(); // Reload comments to update the display
    }
}

// 3. Event listeners
commentForm.addEventListener('submit', addComment);
window.addEventListener('load', loadComments);
