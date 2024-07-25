document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

    // For now, just log the input. In a real application, you could send this data to a server.
    alert('Message sent!');

    // Clear the form
    document.getElementById('contact-form').reset();
});
