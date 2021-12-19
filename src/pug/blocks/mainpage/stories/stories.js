console.log("%c BLOCK PORTFOLIO is onloaded", "color: purple; font-size: 20px;");

let stories = document.querySelectorAll(".stories");

let storiesLinks = document.querySelectorAll(".stories__links");

stories.forEach(store => {
    $(store).slick({
        arrows: false,
        dots: true,
        asNavFor: storiesLinks
    })
})

storiesLinks.forEach(link => {
    $(link).slick({
        arrows: false,
        asNavFor: $(stories)
    })
})

import "./stories.scss";