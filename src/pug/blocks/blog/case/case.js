console.log("%c BLOCK CASE is onloaded", "color: purple; font-size: 20px;");

let cases = document.querySelectorAll(".case");
cases.forEach(function (some_case) {
    let img_url = some_case.getAttribute("img_url");
    let img = document.createElement("img");
    img.src="/assets/img/"+img_url;
    some_case.querySelector(".case__img").appendChild(img)
})
import "./case.scss";