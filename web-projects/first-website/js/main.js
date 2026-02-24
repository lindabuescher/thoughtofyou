// main.js
document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const correctPassword = '1234';
    
    // Handle Enter key press
    passwordInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            checkPassword();
        }
    });
    
    function checkPassword() {
        const enteredPassword = passwordInput.value;
        
        if (enteredPassword === correctPassword) {
            // Redirect to access.html (same folder as current page)
            window.location.href = 'access.html';
        } else {
            // Show error message
            alert('Incorrect password. Please try again.');
            passwordInput.value = '';
            passwordInput.focus();
        }
    }
});


