export default function Contact() {
    const middlediv = document.querySelector(".middlediv");

    middlediv.replaceChildren();
    
    function renderContact() {
      middlediv.style.justifyContent = "space-evenly"

      const contacttext = document.createElement("p");
      contacttext.classList.add("contacttext");
      contacttext.innerText = `Dont contact us under:
      +392 048 604
      Saga County, Shigatse, Tibet, China`;
      middlediv.appendChild(contacttext);

      const map = document.createElement("div");
      map.setAttribute("id","map")
      middlediv.appendChild(map);

      initMap();
    }
    
    renderContact() 
}


// Initialize and add the map
function initMap() {
  // The location of Caramelo
  const caramelo = { lat: 29.331791626907243, lng: 85.60751347831386, };
  // The map, centered at Caramelo
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: caramelo,
  });
  // The marker, positioned at Caramelo
  const marker = new google.maps.Marker({
    position: caramelo,
    map: map,
  });
  window.initMap = initMap;
}

