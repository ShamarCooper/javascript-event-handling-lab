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