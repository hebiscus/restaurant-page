export default function Home() {
    const middlediv = document.querySelector(".middlediv");    
    middlediv.replaceChildren();

    function renderHome() {
      const uptextparagraph = document.createElement("p");
      uptextparagraph.classList.add("uptext");
      uptextparagraph.innerText = "Our traditional French style breakfasts have been the backbone of our success. With a commitment to our community and the focus on total guest satisfaction we have been able to provide not only a great food product," + 
      " " + "but a great overall experience as well." 
      middlediv.appendChild(uptextparagraph);

      const picture = document.createElement("img");
      picture.classList.add("homepicture")
      picture.src = "homepicture.jpg";
      middlediv.appendChild(picture);

      const downtextparagraph = document.createElement("p");
      downtextparagraph.classList.add("downtext");
      downtextparagraph.innerText = `Contact us for reservation!`
      middlediv.appendChild(downtextparagraph);
    }

    renderHome()
  }