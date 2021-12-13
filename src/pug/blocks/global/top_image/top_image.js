console.log("%c TOP_IMAGE BLOCK is onloaded", "color: purple; font-size: 20px;" );

import "./top_image.scss";


let topImages = document.querySelectorAll(".top-image");

topImages.forEach(function(topImage){
    console.log(topImage)
    let img = topImage.querySelector("img.top-image__img");
    let url = img.getAttribute("img-url");
    img.src = url
})
