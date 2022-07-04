const menuToggle = document.querySelector(".header-toggle");
const menuHeader = document.querySelector(".header-menu");
const expandClass = "is-expand";

menuToggle.addEventListener("click",()=>{
    menuHeader.classList.add(expandClass);
});

window.addEventListener("click",(e)=>{
    if(!e.target.classList.contains('.header-menu')){
        menuHeader.classList.remove(expandClass);
    }

})