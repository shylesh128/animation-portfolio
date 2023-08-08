var animations = [
  {
    imageSrc: "./images/code-editor.png",
    altText: "JavaScript Code Compiler Preview",
    title: "JavaScript Code Compiler",
    description:
      "Compile and run JavaScript code with ease using our simple code editor. Test your programming skills and see instant results!",
    duration: "1 minute",
    link: "./code-editor-js/index.html",
  },
  {
    imageSrc: "./images/painter.png",
    altText: "Paint Tool Preview",
    title: "Paint Tool",
    description:
      "Unleash your creativity with our easy-to-use paint tool. Create beautiful digital artwork and let your imagination soar!",
    duration: "1 minute",
    link: "./painter/index.html",
  },
  {
    imageSrc: "./images/interactive-balls-animation.png",
    altText: "Animation: The Collision Craze",
    title: "The Collision Craze",
    description:
      "Watch an exciting animation of balls colliding, bouncing, and creating fascinating patterns. It's a visual treat for all!",
    duration: "2 minutes",
    link: "./ball/index.html",
  },
  {
    imageSrc: "./images/basic-cube.png",
    altText: "Simple 3D Cube Preview",
    title: "3D Cube",
    description:
      "Explore a rotating 3D cube in a basic yet mesmerizing animation. Discover the magic of simple 3D graphics!",
    duration: "1 minute",
    link: "./basic-cube/index.html",
  },
  {
    imageSrc: "./images/multiple-rubics.png",
    altText: "Animation: 3D Rubik's Cubes",
    title: "3D Rubik's Cubes",
    description:
      "Witness multiple Rubik's cubes twisting and turning in a captivating animation. It's a delight for puzzle enthusiasts!",
    duration: "1 minute",
    link: "./multi/rubkis.html",
  },
  {
    imageSrc: "./images/circles-circles.png",
    altText: "Circles Animation Preview",
    title: "Circles spray",
    description:
      "Experience the joy of painting with clicks in a mesmerizing animation of colorful circles. Create your own abstract masterpiece!",
    duration: "1 minute",
    link: "./paint/index.html",
  },
  {
    imageSrc: "./images/single-4x4-rubics.png",
    altText: "Preview: 4x4 Rubik's Cube",
    title: "4x4 Rubik's Cube",
    description:
      "Challenge yourself with a 4x4 Rubik's cube and unravel its secrets. Can you solve this classic puzzle?",
    duration: "1 minute",
    link: "./single-cube/index.html",
  },
  {
    imageSrc: "./images/html-complier.png",
    altText: "Preview: HTML Compiler with output",
    title: "HTML compiler",
    description:
      "An interactive code editor offering real-time previews, code suggestions, and handy formatting tools for web development.",
    duration: "1 minute",
    link: "./html/index.html",
  },
  {
    imageSrc: "./images/canva-complier.png",
    altText: "Preview: Canva Compiler with output",
    title: "Canva compiler",
    description:
      "An interactive code editor offering real-time previews, code suggestions, and handy formatting tools for canva development.",
    duration: "1 minute",
    link: "./canva/index.html",
  },
  {
    imageSrc: "./images/sahoo.png",
    altText: "Preview: Sahoo title",
    title: "Sahoo Title",
    description: "A replica of Sahoo title card.",
    duration: "1 minute",
    link: "./sahoo/index.html",
  },
];

function addCard(imageSrc, altText, title, description, duration, link) {
  var cardContainer = document.createElement("div");
  cardContainer.className = "card";

  var image = document.createElement("img");
  image.src = imageSrc;
  image.alt = altText;

  var heading = document.createElement("h2");
  heading.textContent = title;

  var descParagraph = document.createElement("p");
  descParagraph.textContent = description;
  cardContainer.addEventListener("click", function () {
    window.open(link, "_blank");
  });

  cardContainer.appendChild(image);
  cardContainer.appendChild(heading);
  cardContainer.appendChild(descParagraph);
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
  setTheme("blue");
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

setSystemDefaultTheme();
