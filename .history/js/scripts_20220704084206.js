const menuToggle = document.querySelector(".header-toggle");
const menuHeader = document.querySelector(".header-menu");
const expandClass = "is-expand";

const wedoContent = document.querySelector(".wedo-content");
wedoContent.addEventListener('click',(e)=>{
  const closestItem = e.target.closest('.wedo-item');
  console.log(closestItem.classList.contains('wedo-is-active'));
  // if (e.target.classList.contains("wedo-item-header") && !closestItem.classList.contains('wedo-is-active')){
  //   document.querySelectorAll(".wedo-item").forEach((item)=>{
  //     item.classList.remove('wedo-is-active');
  //   })
  //   closestItem.closest('.wedo-item').add('wedo-is-active');
  // }
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