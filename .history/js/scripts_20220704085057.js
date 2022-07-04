const menuToggle = document.querySelector(".header-toggle");
const menuHeader = document.querySelector(".header-menu");
const expandClass = "is-expand";

const wedoContent = document.querySelector(".wedo-content");
wedoContent.addEventListener('click',(e)=>{
  const closestItem = e.target.closest('.wedo-item');

  if (e.target.closest('.wedo-item-header').classList.contains("wedo-item-header") && !closestItem.classList.contains('wedo-is-active')){
    document.querySelectorAll(".wedo-item").forEach((item)=>{
      item.classList.remove('wedo-is-active');
      item.querySelector('.wedo-item-arrow').classList.remove('fa-angle-up').add('fa-angle-down');
    })
    closestItem.classList.add('wedo-is-active');
    closestItem.querySelector('.wedo-item-arrow').classList.add('fa-angle-up');
  }
})

menuToggle.addEventListener("click",()=>{
    menuHeader.classList.add(expandClass);
});

window.addEventListener("click",(e)=>{
    if(!menuHeader.contains(e.target) && !e.target.matches(".header-toggle")){
        menuHeader.classList.remove(expandClass);
    }
})






//Slick slider
$(document).ready(function(){
    $('.quote-container').slick({
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [
            {
              breakpoint: 767,
              settings: {
                arrows: false,
              }
            },
            
          ]
    
    });
});