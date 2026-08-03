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