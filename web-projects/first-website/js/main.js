// Store a reference to the <h1> in a variable
const myHeading = document.querySelector("h1");
// Update the text content of the <h1>
myHeading.textContent = "Happy Galentines, Leyla!";


const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Leyla.png") {
    myImage.setAttribute("src", "images/Linda.png");
  } else {
    myImage.setAttribute("src", "images/Leyla.png");
  }
});

// Define the correct password
const correctPassword = "yourPassword123";

// Get the input field
const passwordInput = document.getElementById("password");

// Add an event listener to the input field
passwordInput.addEventListener("keydown", (event) => {
    // Check if the pressed key is "Enter"
    if (event.key === "Enter") {
        const enteredPassword = passwordInput.value.trim(); // Get the entered password
        if (enteredPassword === correctPassword) {
            // Redirect to the access page
            window.location.href = "access.html";
        } else {
            // Show an error message
            alert("Incorrect password. Please try again.");
        }
    }
});


