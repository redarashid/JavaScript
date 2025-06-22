let menuButtons  = document.querySelectorAll(".menu-button");
let screenOverlay = document.querySelector(".screen-overlay")
let themeButton = document.querySelector(".theme-button i")


if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    themeButton.classList.replace("uil-moon", "uil-sun");
} else {
    themeButton.classList.replace("uil-sun", "uil-moon");
}

themeButton.addEventListener("click", () => {
    const isDarkMode = document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled")
    themeButton.classList.toggle("uil-sun", isDarkMode);
    themeButton.classList.toggle("uil-moon", !isDarkMode);


    
})
menuButtons.forEach(element => {
    element.addEventListener("click", () => {
        document.body.classList.toggle("sidebar-hidden")
    })
});


screenOverlay.addEventListener("click", () => {
    document.body.classList.toggle("sidebar-hidden")
})

if (window.innerWidth >= 768) {
    document.body.classList.remove("sidebar-hidden")
}