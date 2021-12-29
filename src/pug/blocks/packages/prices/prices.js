console.log("%c BLOCK PRICES is onloaded", "color: purple; font-size: 20px;");

let vw = window.innerWidth / 100;

if(vw > 12.8){
    let pricesSliders = document.querySelectorAll(".prices__slider-container")
    pricesSliders.forEach(sliderContainer => {
        let slider = sliderContainer.querySelector(".prices__slider");
        let arrowLeft = sliderContainer.querySelector(".prices__slider-arrow--left");
        let arrowRight = sliderContainer.querySelector(".prices__slider-arrow--right");

        $(slider).slick({
            slidesToShow: 4,
            nextArrow: $(arrowRight),
            prevArrow: $(arrowLeft)

        })
    });
}else if(vw > 7.68){
    let pricesSliders = document.querySelectorAll(".prices__slider-container")
    pricesSliders.forEach(sliderContainer => {
        let slider = sliderContainer.querySelector(".prices__slider");
        let arrowLeft = sliderContainer.querySelector(".prices__slider-arrow--left");
        let arrowRight = sliderContainer.querySelector(".prices__slider-arrow--right");

        $(slider).slick({
            slidesToShow: 2,
            nextArrow: $(arrowRight),
            prevArrow: $(arrowLeft)

        })
    });
}else{
    let pricesSliders = document.querySelectorAll(".prices__slider-container")
    pricesSliders.forEach(sliderContainer => {
        let slider = sliderContainer.querySelector(".prices__slider");
        let arrowLeft = sliderContainer.querySelector(".prices__slider-arrow--left");
        let arrowRight = sliderContainer.querySelector(".prices__slider-arrow--right");

        $(slider).slick({
            slidesToShow: 1,
            nextArrow: $(arrowRight),
            prevArrow: $(arrowLeft)

        })
    });
}



import "./prices.scss";