
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




// Start Typing Animation on Page Load
window.onload = () => {
    typingAnimation("typing-text" ,100); // Call the function
};

function typingAnimation(elementId, speed) {
    const element = document.getElementById(elementId);
    if (!element) {
        console.error("Element not found:", elementId);
        return;
    }
    
    const text = element.textContent;
    console.log("Starting animation with text:", text);
    element.textContent = ''; // Clear the text
    
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
            console.log("Animation complete");
        }
    }, speed);
}

window.onload = () => {
    typingAnimation("typing-text", 100);
};
