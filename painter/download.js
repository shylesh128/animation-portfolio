// download.js
function downloadImage() {
  const canvas = document.getElementById("canvas");
  const link = document.createElement("a");
  link.href = canvas.toDataURL();
  link.download = "canvas_image.png";
  link.click();
}

const downloadBtn = document.getElementById("download");
downloadBtn.addEventListener("click", downloadImage);

// theme.js
function handleThemeChange() {
  const themeSelect = document.getElementById("theme-select");
  const selectedTheme = themeSelect.value;
  const body = document.querySelector("body");

  if (selectedTheme === "dark") {
    body.classList.add("dark-mode");
    body.classList.remove("light-mode");
  } else if (selectedTheme === "light") {
    body.classList.add("light-mode");
    body.classList.remove("dark-mode");
  }
}

const themeSelect = document.getElementById("theme-select");
themeSelect.addEventListener("change", handleThemeChange);
