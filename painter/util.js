function getRandomSize() {
  return Math.floor(Math.random() * 100) + 20;
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

window.getRandomColor = getRandomColor;
window.getRandomSize = getRandomSize;
