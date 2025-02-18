import "./styles.css";

import displayHome from "./home.js";
import displayMenu from "./menu.js";
import displayAbout from "./about.js";

const navbar = document.querySelector("nav");
const contentDiv = document.getElementById("content");
let currentPage = "home";

function renderPage(page, displayFunction) {
  if (currentPage != page) {
    currentPage = page;

    contentDiv.innerHTML = "";
    displayFunction();
  }
}

navbar.addEventListener("click", (event) => {
  let target = event.target;

  switch (target.id) {
    case "home-btn":
      renderPage("home", displayHome);
      break;
    case "menu-btn":
      renderPage("menu", displayMenu);
      break;
    case "about-btn":
      renderPage("about", displayAbout);
      break;
  }
});

displayHome();
