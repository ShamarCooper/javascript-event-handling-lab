       // Mouse Events:

// Select the mouse event elements
const hoverButton = document.getElementById("hoverButton");
const mouseMessage = document.getElementById("mouseMessage");

// Runs when the mouse enters the button
hoverButton.addEventListener("mouseenter", function () {
    mouseMessage.textContent = "Your mouse is hovering over the button!";
});

// Runs when the mouse leaves the button
hoverButton.addEventListener("mouseleave", function () {
    mouseMessage.textContent = "Your mouse has left the button.";
});


       // Keyboard Events:

// Select the keyboard event elements
const keyboardInput = document.getElementById("keyboardInput");
const keyboardMessage = document.getElementById("keyboardMessage");

// Runs whenever the user releases a keyboard key
keyboardInput.addEventListener("keyup", function (event) {
    keyboardMessage.textContent =
        "The last key you pressed was: " + event.key;
});


         // Form Events:

// Select the form elements
const messageForm = document.getElementById("messageForm");
const nameInput = document.getElementById("nameInput");
const formMessage = document.getElementById("formMessage");

// Handle the form submission
messageForm.addEventListener("submit", function (event) {
    // Prevent the page from refreshing
    event.preventDefault();

    // Display a submission message
    formMessage.textContent =
        "Thank you, " + nameInput.value + "! Your form was submitted.";

    // Clear the input field
    nameInput.value = "";
});