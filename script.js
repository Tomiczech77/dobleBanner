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
    
    if(direction === "up"){
        numberActiveSlide++;    // the same: numberActiveSlide = numberActiveSlide + 1;
        if(numberActiveSlide > slidesLength - 1){
            numberActiveSlide = 0;
        }
    } else {
        numberActiveSlide--;
        if(numberActiveSlide < 0){
            numberActiveSlide = slidesLength - 1;
        }
    }

    slideRight.style.transform = `translateY(-${numberActiveSlide * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${numberActiveSlide * sliderHeight}px)`;
}







