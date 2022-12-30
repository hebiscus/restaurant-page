export default function Menu() {
    const middlediv = document.querySelector(".middlediv");
    middlediv.replaceChildren();
    
    function renderMenu() {
      const menutext = document.createElement("p");
      menutext.classList.add("menutext");
      menutext.innerText = `1. 
      Belgian waffle with fruit and whipped cream
      2.
      Dutch baby - lemon wedges and powdered sugar
      3.
      Chia seed pudding with real chia seeds
      4.
      Cinnamon toast crepe without real cinnamon
      5.
      Le chocolat - chocolate 
      6. 
      Soupe aus betteraves
      7.
      Frog`
      middlediv.appendChild(menutext);
    }

    renderMenu() 
  }