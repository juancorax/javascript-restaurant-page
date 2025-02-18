import pizzaNapoletana from "./pizza-napoletana.jpg";
import risottoAllaMilanese from "./risotto-alla-milanese.jpg";
import spaghettiAglioEOlio from "./spaghetti-aglio-e-olio.jpg";

function displayMenu() {
  const contentDiv = document.getElementById("content");

  const div = document.createElement("div");
  div.id = "menu";

  const header = document.createElement("h1");
  header.textContent = "Menu";
  div.appendChild(header);

  for (let i = 0; i < 3; i++) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const itemName = document.createElement("h3");
    const itemImage = document.createElement("img");
    const itemDescription = document.createElement("p");

    itemImage.classList.add("menu-item-img");

    switch (i) {
      case 0:
        itemName.textContent = "Spaghetti Aglio e Olio";
        itemImage.src = spaghettiAglioEOlio;
        itemDescription.textContent = `
          A simple yet flavorful pasta made with garlic, olive oil, chili flakes, and parsley.
        `;
        break;
      case 1:
        itemName.textContent = "Pizza Napoletana";
        itemImage.src = pizzaNapoletana;
        itemDescription.textContent = `
          A traditional pizza topped with San Marzano tomatoes, mozzarella, basil, and extra virgin olive oil.
        `;
        break;
      case 2:
        itemName.textContent = "Risotto alla Milanese";
        itemImage.src = risottoAllaMilanese;
        itemDescription.textContent = `
          A creamy, saffron-infused risotto from Milan, rich in flavor and color.
        `;
        break;
    }

    menuItem.appendChild(itemName);
    menuItem.appendChild(itemImage);
    menuItem.appendChild(itemDescription);

    div.appendChild(menuItem);
  }

  contentDiv.appendChild(div);
}

export default displayMenu;
