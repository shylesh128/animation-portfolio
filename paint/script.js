window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const circles = [];

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  function Circle(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = getRandomColor();

    this.draw = function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
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

  function addCircle(x, y) {
    const radius = Math.random() * 50 + 10;
    const circle = new Circle(x, y, radius);
    circles.push(circle);
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

    addCircle(mouseX, mouseY);
    drawCircles();
  }

  function handleMouseMove(e) {
    if (e.buttons !== 1) {
      return;
    }

    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    addCircle(mouseX, mouseY);
    drawCircles();
  }

  function handleResize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawCircles();
  }

  window.addEventListener("mousedown", handleMouseDown);
  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("resize", handleResize);
});
