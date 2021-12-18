console.log("%c BLOCK PORTFOLIO is onloaded", "color: purple; font-size: 20px;");


let vw = document.documentElement.clientWidth / 100;
console.log(vw)

let arrowLeft = document.querySelector(".portfolio__works-slider-arrow--left")
let arrowRight = document.querySelector(".portfolio__works-slider-arrow--right")

let portfolioSliders = document.querySelectorAll(".portfolio__works-slider");

if(vw > 12.8){
    portfolioSliders.forEach(slider=>{

        $(slider).slick({
            slidesToShow: 3,
            nextArrow: $,
            prevArrow: $(arrowLeft),
            nextArrow: $(arrowRight)
        })
    })
}else{
    console.log("dsfads")

    portfolioSliders.forEach(slider => {

        $(slider).slick({
            slidesToShow: 1,
            nextArrow: $,
            prevArrow: $(arrowLeft),
            nextArrow: $(arrowRight)
        })
    })
}

import "./portfolio.scss";