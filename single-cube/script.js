var cube = document.querySelector(".cube");
var container = document.querySelector(".container");
var shadow = document.querySelector(".shadow");

cube.addEventListener("click", function () {
  cube.style.animation = "none";
  shadow.style.animation = "none";

  setTimeout(function () {
    cube.style.animation = "rotate 15s infinite linear";
    shadow.style.animation = "rotate 15s infinite linear";
  }, 100);
});

var faces = document.querySelectorAll(".face");
faces.forEach((element) => {
  var grid = document.createElement("div");
  grid.className = "grid";
  element.appendChild(grid);
  for (var i = 0; i < 16; i++) {
    var cell = document.createElement("div");
    cell.className = "cell";
    grid.appendChild(cell);
    var colors = ["Red", "Blue", "Green", "Yellow", "Orange", "Purple"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    cell.style.backgroundColor = randomColor;
  }
});
