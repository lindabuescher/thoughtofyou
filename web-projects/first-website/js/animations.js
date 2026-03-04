
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
