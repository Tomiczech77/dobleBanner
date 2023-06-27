const containerSlider = document.querySelector(".container-slider");
const slideLeft = document.querySelector(".slide-left");
const slideRight = document.querySelector(".slide-right");
const arrowDown = document.querySelector(".arrow-down");
const arrowUp = document.querySelector(".arrow-up");
const slidesLength = slideRight.querySelectorAll("div").length;     // count of immages

let numberActiveSlide = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

arrowUp.addEventListener("click", function(){
    changeSlide("up");
});

arrowDown.addEventListener("click", function(){
    changeSlide("down");
});

function changeSlide(direction){
    const sliderHeight = containerSlider.clientHeight;
    



    
}







