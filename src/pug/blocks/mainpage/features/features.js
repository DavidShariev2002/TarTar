console.log("%c BLOCK FEATURES is onloaded", "color: purple; font-size: 20px;");

let features = document.querySelector(".features");
let featuresMenu = features.querySelector(".features__list-nav");
let featuresItems = features.querySelectorAll(".features__list-texts-item");

featuresMenu.addEventListener("click", function(event){
    let target = event.target;
    if(target.classList.contains("features__list-nav-item")){
        let textNumber = +target.getAttribute("num")
        document.querySelector(".features__list-texts-item--active").classList.remove("features__list-texts-item--active")
        document.querySelector(".features__list-nav-item--active").classList.remove("features__list-nav-item--active")
        target.classList.add("features__list-nav-item--active");
        featuresItems[textNumber].classList.add("features__list-texts-item--active")
    }
})

import "./features.scss";