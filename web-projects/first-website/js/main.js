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