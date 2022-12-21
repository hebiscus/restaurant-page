export default function Home() {
    const content = document.getElementById("content");

    const divLayer = document.createElement("div");
    divLayer.classList.add("divlayer");
    content.appendChild(divLayer);
    
    const header = document.createElement("div");
    header.classList.add("header");
    divLayer.appendChild(header);
    
  }