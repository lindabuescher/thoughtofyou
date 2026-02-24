//old
const myHeading = document.querySelector("h1");
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


const correctPassword = "1234";


const passwordInput = document.getElementById("password");


passwordInput.addEventListener("keydown", (event) => {
    
    if (event.key === "Enter") {
        const enteredPassword = passwordInput.value.trim(); 
        if (enteredPassword === correctPassword) {
            
            window.location.href = "access.html";
        } else {
            
            alert("Incorrect password. Please try again.");
        }
    }
});


