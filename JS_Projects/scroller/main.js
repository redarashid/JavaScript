
let el = document.querySelector(".scroller");
let hieght = document.documentElement.scrollHeight - document.documentElement.clientHeight;

console.log(document.documentElement.scrollHeight)
console.log(document.documentElement.clientHeight)
console.log(hieght);

window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    el.style.width = `${(scrollTop / hieght)*100}%` 
})