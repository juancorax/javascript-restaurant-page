function displayAbout() {
  const contentDiv = document.getElementById("content");

  const div = document.createElement("div");
  const header = document.createElement("h1");
  const paragraph = document.createElement("p");

  header.textContent = "About Buona Notte";
  paragraph.textContent = `
        Buona Notte is more than just a restaurant, it's a celebration of authentic Italian flavors. 
        Our menu is carefully crafted with passion, using only the finest ingredients sourced locally 
        and inspired by traditional Italian recipes. Whether you're here for a quick bite or a long evening 
        with loved ones, we promise an unforgettable experience.
      `;

  div.appendChild(header);
  div.appendChild(paragraph);

  contentDiv.appendChild(div);
}

export default displayAbout;
