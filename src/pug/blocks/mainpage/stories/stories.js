console.log("%c BLOCK PORTFOLIO is onloaded", "color: purple; font-size: 20px;");

let stories = document.querySelectorAll(".stories");
stories.forEach(store => {
    $(store).slick({
        arrows: false,
        dots: true
    })
})

import "./stories.scss";