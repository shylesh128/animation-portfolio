function createdot(x, y, size) {
  const dotContainer = document.createElement("div");
  dotContainer.id = "dotContainer";
  document.body.appendChild(dotContainer);

  const dot = document.createElement("div");
  dot.className = "dot";
  dot.style.width = size + "px";
  dot.style.height = size + "px";
  dot.style.left = x - size / 2 + "px";
  dot.style.top = y - size / 2 + "px";
  dotContainer.appendChild(dot);
}
