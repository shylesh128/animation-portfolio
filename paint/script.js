window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const downloadBtn = document.getElementById("download");
  let circles = [];

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight - 40; // Subtract the height of the controls

  function Circle(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = getRandomSize();
    this.color = getRandomColor();

    this.draw = function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.fill();
    };
  }

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function addCircle(x, y, size) {
    const circle = new Circle(x, y, size);
    circles.push(circle);
    circle.draw();
  }

  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function drawCircles() {
    clearCanvas();
    circles.forEach((circle) => {
      circle.draw();
    });
  }

  function handleMouseDown(e) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const size = Math.random() * 100 + 10; // Random size between 10 and 110

    addCircle(mouseX, mouseY, size);

    function handleMouseMove(e) {
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      addCircle(mouseX, mouseY, size);
    }

    function handleMouseUp() {
      canvas.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    canvas.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  }

  function handleResize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 40; // Subtract the height of the controls
    drawCircles();
  }

  function getRandomSize() {
    return Math.floor(Math.random() * 100) + 50; // Random size between 20 and 120
  }

  function downloadImage() {
    const link = document.createElement("a");
    link.href = canvas.toDataURL();
    link.download = "canvas_image.png";
    link.click();
  }

  window.addEventListener("mousedown", handleMouseDown);
  window.addEventListener("resize", handleResize);
  downloadBtn.addEventListener("click", downloadImage);

  drawCircles();
});
