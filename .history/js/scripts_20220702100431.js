const menuToggle = document.querySelector(".header-toggle");
const menuHeader = document.querySelector(".header-menu");
const expandClass = "is-expand";

menuToggle.addEventListener(()=>{
    menuHeader.classList.add(expandClass);
});