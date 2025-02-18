import buonaNotteImage from "./buona-notte.webp";

function displayHome() {
  const contentDiv = document.getElementById("content");

  const div = document.createElement("div");
  const header = document.createElement("h1");
  const image = document.createElement("img");
  const paragraph = document.createElement("p");

  header.textContent = "Welcome to Buona Notte";
  image.src = buonaNotteImage;
  paragraph.textContent = `
        Experience the finest Italian cuisine in a warm and intimate setting. At
        Buona Notte, we bring authentic flavors and a touch of home to every
        dish. Join us for an unforgettable dining experience.
      `;

  div.appendChild(header);
  div.appendChild(image);
  div.appendChild(paragraph);

  contentDiv.appendChild(div);
}

export default displayHome;
