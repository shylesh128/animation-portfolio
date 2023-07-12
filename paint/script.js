window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const shapes = document.getElementById("shape");
  const sizeInput = document.getElementById("size");
  const downloadBtn = document.getElementById("download");
  let circles = [];

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight - 40; // Subtract the height of the controls

  function Shape(x, y, size, shapeType) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = getRandomColor();
    this.shapeType = shapeType;

    this.draw = function () {
      ctx.beginPath();
      if (this.shapeType === "circle") {
        ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2, false);
      } else if (this.shapeType === "square") {
        ctx.rect(
          this.x - this.size / 2,
          this.y - this.size / 2,
          this.size,
          this.size
        );
      } else if (this.shapeType === "triangle") {
        ctx.moveTo(this.x, this.y - this.size / 2);
        ctx.lineTo(this.x + this.size / 2, this.y + this.size / 2);
        ctx.lineTo(this.x - this.size / 2, this.y + this.size / 2);
        ctx.closePath();
      }
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

  function addShape(x, y, size) {
    const shapeType = shapes.value;
    const shape = new Shape(x, y, size, shapeType);
    circles.push(shape);
    shape.draw();
  }

  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function drawShapes() {
    clearCanvas();
    circles.forEach((shape) => {
      shape.draw();
    });
  }

  function handleMouseDown(e) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    addShape(mouseX, mouseY, sizeInput.value);
  }

  function handleResize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 40; // Subtract the height of the controls
    drawShapes();
  }

  function downloadImage() {
    const link = document.createElement("a");
    link.href = canvas.toDataURL();
    link.download = "canvas_image.png";
    link.click();
  }

  shapes.addEventListener("change", () => {
    drawShapes();
  });

  window.addEventListener("mousedown", handleMouseDown);
  window.addEventListener("resize", handleResize);
  downloadBtn.addEventListener("click", downloadImage);

  drawShapes();
});
