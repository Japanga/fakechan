//script.js
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const serviceID = "service_5lfdh8p"; // Replace with your EmailJS Service ID
    const templateID = "template_5au6hk6"; // Replace with your EmailJS Template ID

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            document.getElementById('response-message').textContent = 'Message sent successfully!';
            document.getElementById('response-message').className = 'success';
            document.getElementById('contact-form').reset(); // Clear the form
        }, (error) => {
            document.getElementById('response-message').textContent = 'Failed to send message. Please try again.';
            document.getElementById('response-message').className = 'error';
            console.error('EmailJS Error:', error);
        });
});
