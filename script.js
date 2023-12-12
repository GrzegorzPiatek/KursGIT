document.getElementById('greetingForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;

    // Set the content of the greeting text in the modal
    document.getElementById('greetingText').innerHTML = `Welcome, <strong>${name} ${surname}</strong>! Get ready to master GIT.`;
    
    // Show the overlay and the modal
    document.getElementById('greetingModal').style.display = 'block';
});

// Close modal function
function closeModal() {
    // Hide the modal
    document.getElementById('greetingModal').style.display = 'none';
    
    // Reset the form fields
    document.getElementById('greetingForm').reset();
}

// Bind closeModal function to window so it can be called from the inline 'onclick' attribute
window.closeModal = closeModal;
