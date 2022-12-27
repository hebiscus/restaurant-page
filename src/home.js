export default function Home() {
    const homeButton = document.querySelector(".homeButton");
    const middlediv = document.querySelector(".middlediv");

    homeButton.addEventListener("click", function() {renderHome()});
    
    function renderHome() {
      const uptextparagraph = document.createElement("p");
      uptextparagraph.classList.add("uptext");
      uptextparagraph.innerText = `We are a restaurant located on Moody Street in Waltham, Ma. Our traditional American style breakfasts and uniquely 
      styled sandwich selection have been the backbone of our success. With a commitment to our community
      and the focus on total guest satisfaction we have been able to provide not only a great food product, 
      but a great overall experience as well. We strive every day to meet and exceed our guests expectations.  
      We know andunderstand that without our guests there is no Us.  It is very important to us that
      every guest receives the best experience they possibly can while in our restaurant`
      middlediv.appendChild(uptextparagraph);

      const picture = document.createElement("img");
      picture.classList.add("homepicture")
      picture.src = "../src/homepicture.jpg";
      middlediv.appendChild(picture);

      const downtextparagraph = document.createElement("p");
      downtextparagraph.classList.add("downtext");
      downtextparagraph.innerText = `Contact us for reservation!`
      middlediv.appendChild(downtextparagraph);
    }
  }