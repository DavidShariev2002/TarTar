console.log("%c BLOCK PACKAGES is onloaded", "color: purple; font-size: 20px;");

let vw = window.innerWidth / 100;

if(vw < 12.8){
    let packagesList = document.querySelector(".packages__list");
    $(packagesList).slick({
        slideToShow: 1,
        arrows: false,
    })
}

import "./packages.scss";