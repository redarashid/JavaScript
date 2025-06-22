let searchBox = document.querySelector(".search-box");

document.querySelector("#search-icon").onclick = () => {
    searchBox.classList.toggle("active");
    navbar.classList.remove("active");
}

let navbar = document.querySelector(".navbar");

document.querySelector("#menu-icon").onclick = () => {
    navbar.classList.toggle("active");
    searchBox.classList.remove("active");
}

window.onscroll = () => {
    navbar.classList.remove("active");
    searchBox.classList.remove("active");
}

let shadow = document.querySelector("header");

window.addEventListener("scroll", () => {
    shadow.classList.toggle("shadow", window.scrollY > 0);
});