document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your message!");
    // Clear form fields
    document.getElementById("contactForm").reset();
});
