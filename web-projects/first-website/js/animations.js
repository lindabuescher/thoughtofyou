
// I let claude write most of these animations but I refined them myself

function fadeInAnimation(elementId, fadeSpeed = 1000) {
    const element = document.getElementById(elementId); // Target the element by ID
    element.style.opacity = 0; // Start invisible
    element.style.transition = `opacity ${fadeSpeed}ms ease-in`; // Smooth transition

    // Delay the fade-in effect slightly
    setTimeout(() => {
        element.style.opacity = 1; // Fade in
    }, 100); // 100ms delay before starting the fade-in
}

// Trigger the fade-in animation on page load
window.onload = () => {
    fadeInAnimation("fadeInAnimation", 1000); // Apply fade-in to the element with ID "fadeInAnimation"
};



function typingAnimation(elementId, text, typingSpeed = 100) {
    const typingElement = document.getElementById(elementId); // Target the element by ID
    typingElement.textContent = ""; // Clear any existing text
    let index = 0;

    function typeText() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index); // Add one letter at a time
            index++;
            setTimeout(typeText, typingSpeed); // Call the function again after typingSpeed
        }
    }

    typeText(); // Start the typing animation
}

// Start Typing Animation on Page Load
window.onload = () => {
    typingAnimation("typing-text", "Welcome to Thought of You", 100); // Call the function
};
