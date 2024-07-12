document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form elements
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Basic form validation
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }
    
    // If all fields are filled
    alert('Message sent!');
    
    // Optionally, reset the form
    document.getElementById('contact-form').reset();
});
