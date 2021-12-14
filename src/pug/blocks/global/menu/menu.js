console.log("%c BLOCK MENU is onloaded", "color: purple; font-size: 20px;");

let menuList = document.querySelectorAll(".menu");

menuList.forEach(function(menu){
    let items = menu.querySelectorAll(".menu__items-item")
    let activeItemIndex = +menu.getAttribute("active");
    items[activeItemIndex].classList.add("menu__items-item--active");

    let menuBtn = menu.querySelector(".menu__open-btn");
    menuBtn.addEventListener("click", function(event){
        menu.querySelector(".menu__items").classList.toggle("menu__items--opened")
    })
})



import "./menu.scss";