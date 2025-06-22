
// Get the necessary elements from the DOM
let navMenu = document.getElementById("nav_menu");
let navToggle = document.getElementById("nav_toggle");
let navClose = document.getElementById("nav_close");

// Add event listener to the toggle button to show the menu
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

// Add event listener to the close button to hide the menu
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}
