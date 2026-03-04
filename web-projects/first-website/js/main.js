
document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const correctPassword = '1234';
    

    passwordInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            checkPassword();
        }
    });
    
    function checkPassword() {
        const enteredPassword = passwordInput.value;
        
        if (enteredPassword === correctPassword) {
            window.location.href = 'access.html';
        } else {
            alert('Incorrect password. Please try again.');
            passwordInput.value = '';
            passwordInput.focus();
        }
    }
});


