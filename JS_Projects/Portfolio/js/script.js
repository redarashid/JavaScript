let navBar = document.querySelector(".navbar");
let menuButton = document.querySelector(".menu-btn");
let cancelButton = document.querySelector(".cancel-btn");
let body = document.querySelector("body")

menuButton.onclick = function() {
    navBar.classList.add("active")
    menuButton.style.opacity = "0";
    menuButton.style.pointerEvents = "none"
    body.style.overflow = "hidden"
}

cancelButton.onclick = function() {
    navBar.classList.remove("active")
    menuButton.style.opacity = "1";
    menuButton.style.pointerEvents = "auto"
    body.style.overflow = "auto"
}

let nav = document.querySelector("nav");
let val;

window.onscroll = function() {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("sticky")
    } else {
        nav.classList.remove("sticky")
    }
}




let navLinks = document.querySelectorAll(".menu li a");

for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", () => {
        navBar.classList.remove("active")
        menuButton.style.opacity = "1";
        menuButton.style.pointerEvents = "auto"
    })
    
}