var animations = [
  {
    imageSrc: "./images/interactive-balls-animation.png",
    altText: "Animation 1",
    title: "The Collision Craze:",
    description: "This is a description of Animation 1.",
    duration: "2 minutes",
    link: "./ball/index.html",
  },
  {
    imageSrc: "./images/basic-cube.png",
    altText: "Animation 2",
    title: "Simple 3D cube",
    description: "This is a description of Animation 2.",
    duration: "1 minute",
    link: "./basic-cube/index.html",
  },
  {
    imageSrc: "./images/multiple-rubics.png",
    altText: "Animation 2",
    title: "3D Rubics cubes animation",
    description: "This is a description of Animation 2.",
    duration: "1 minute",
    link: "./multi/rubkis.html",
  },
  {
    imageSrc: "./images/circles-circles.png",
    altText: "preview of circles animations",
    title: "click to paint",
    description: "This is a description of Animation 2.",
    duration: "1 minute",
    link: "./paint/index.html",
  },
  {
    imageSrc: "./images/single-4x4-rubics.png",
    altText: "preview of 4 by 4 rubics animations",
    title: "Simple 4 by 4 rubiks cube",
    description: "This is a description of Animation 2.",
    duration: "1 minute",
    link: "./single-cube/index.html",
  },
  // Add more objects for additional animations
];

function addCard(imageSrc, altText, title, description, duration, link) {
  // Create the necessary HTML elements
  var cardContainer = document.createElement("div");
  cardContainer.className = "card";

  var image = document.createElement("img");
  image.src = imageSrc;
  image.alt = altText;

  var heading = document.createElement("h2");
  heading.textContent = title;

  var descParagraph = document.createElement("p");
  descParagraph.textContent = "Description: " + description;

  var durationParagraph = document.createElement("p");
  durationParagraph.textContent = "Duration: " + duration;

  // Create a click event listener on the card container
  cardContainer.addEventListener("click", function () {
    window.open(link, "_blank");
  });

  // Append the elements to the card container
  cardContainer.appendChild(image);
  cardContainer.appendChild(heading);
  cardContainer.appendChild(descParagraph);
  cardContainer.appendChild(durationParagraph);

  // Append the card container to the grid container
  var gridContainer = document.querySelector(".grid-container");
  gridContainer.appendChild(cardContainer);
}

function addCards() {
  for (var i = 0; i < animations.length; i++) {
    var animation = animations[i];
    addCard(
      animation.imageSrc,
      animation.altText,
      animation.title,
      animation.description,
      animation.duration,
      animation.link
    );
  }
}

addCards();
const themeDropdown = document.getElementById("theme-dropdown");

const themes = {
  light: {
    "--header-background": "#F5F5F5",
    "--header-color": "#333",
    "--body-background": "#FFFFFF",
    "--body-color": "#333",
    "--card-background": "#F9F9F9",
    "--card-shadow": "0 2px 4px rgba(0, 0, 0, 0.2)",
    "--link-color": "#007BFF",
  },

  dark: {
    "--header-background": "#222",
    "--header-color": "#eee",
    "--body-background": "#111",
    "--body-color": "#eee",
    "--card-background": "#444",
    "--card-shadow": "0 2px 4px rgba(0, 0, 0, 0.4)",
    "--link-color": "#4b8cff",
  },
  blue: {
    "--header-background": "#002750",
    "--header-color": "#fff",
    "--body-background": "#f1f1f1",
    "--body-color": "#000",
    "--card-background": "#c8e2f7",
    "--card-shadow": "0 2px 4px rgba(0, 123, 255, 0.3)",
    "--link-color": "#0056b3",
  },
  custom: {
    "--header-background": "#3c003c",
    "--header-color": "#fff",
    "--body-background": "#f8f8f8",
    "--body-color": "#333",
    "--card-background": "#c989c9",
    "--card-shadow": "0 2px 4px rgba(128, 0, 128, 0.3)",
    "--link-color": "#3c003c",
  },
};

let selectedTheme = "dark";

function setTheme(theme) {
  const selectedColors = themes[theme];
  if (selectedColors) {
    for (const [property, value] of Object.entries(selectedColors)) {
      document.documentElement.style.setProperty(property, value);
    }
    selectedTheme = theme; // Update the selected theme
  }
}

function setSystemDefaultTheme() {
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  setTheme(systemTheme);
}

themeDropdown.addEventListener("change", function () {
  const newlySelectedTheme = this.value;

  if (newlySelectedTheme in themes) {
    setTheme(newlySelectedTheme);
  } else {
    // Fallback to system default theme
    setSystemDefaultTheme();
  }
});

// Set initial theme based on system default
setSystemDefaultTheme();
