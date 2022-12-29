import Home from "./home";
import Menu from "./menu";
import Contact from "./contact";
import "./style.css";

(function render() {
    const content = document.getElementById("content");

    const divLayer = document.createElement("div");
    divLayer.classList.add("divlayer");
    content.appendChild(divLayer);
    
    const header = document.createElement("div");
    header.classList.add("header");
    divLayer.appendChild(header);

    const middlediv = document.createElement("div");
    middlediv.classList.add("middlediv");
    divLayer.appendChild(middlediv);

    const footer = document.createElement("div")
    footer.classList.add("footer");
    divLayer.appendChild(footer);

    const caramenotitle = document.createElement("p");
    caramenotitle.innerText = "Carameno"
    caramenotitle.classList.add("caramenotitle");
    header.appendChild(caramenotitle);

    const footertext = document.createElement("p");
    footertext.innerText = "Copyright Ⓒ 2022 hebiscus";
    footertext.classList.add("footertext");
    footer.appendChild(footertext);

    const homeButton = document.createElement("button");
    homeButton.classList.add("homeButton");
    homeButton.innerText = "Home";
    header.appendChild(homeButton);

    const menuButton = document.createElement("button");
    menuButton.classList.add("menuButton");
    menuButton.innerText = "Menu";
    header.appendChild(menuButton);

    const contactButton = document.createElement("button");
    contactButton.classList.add("contactButton");
    contactButton.innerText = "Contact";
    header.appendChild(contactButton);
})();

(function tabSwitch() {
    const homeB = document.querySelector(".homeButton");
    const menuB = document.querySelector(".menuButton");
    const contactB = document.querySelector(".contactButton");

    Home();

    homeB.addEventListener("click", function() {Home()});
    menuB.addEventListener("click", function() {Menu()});
    contactB.addEventListener("click", function() {Contact()});
})();