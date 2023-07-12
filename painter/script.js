window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const shapeSelect = document.getElementById("shape");
  const eraseBtn = document.getElementById("erase");
  const eraseSizeInput = document.getElementById("erase-size");
  const eraseColorInput = document.getElementById("erase-color");
  const downloadBtn = document.getElementById("download");
  const shapes = [];

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight - 40;

  class Shape {
    constructor(x, y, type) {
      this.x = x;
      this.y = y;
      this.color = getRandomColor();
      this.size = getRandomSize();
      this.type = type;
    }

    draw() {
      ctx.beginPath();
      if (this.type === "erase") {
        ctx.globalCompositeOperation = "destination-out";
        ctx.lineWidth = 0;
        ctx.arc(this.x, this.y, this.size * 0.6, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.globalCompositeOperation = "source-over";
      } else if (this.type === "circle") {
        ctx.arc(this.x, this.y, this.size * 0.6, 0, Math.PI * 2, false);
      } else if (this.type === "square") {
        const halfSize = this.size / 2;
        ctx.rect(this.x - halfSize, this.y - halfSize, this.size, this.size);
      } else if (this.type === "triangle") {
        const height = (Math.sqrt(3) * this.size) / 2;
        ctx.moveTo(this.x, this.y - height / 2);
        ctx.lineTo(this.x + this.size / 2, this.y + height / 2);
        ctx.lineTo(this.x - this.size / 2, this.y + height / 2);
        ctx.closePath();
      } else if (this.type === "pentagon") {
        drawPolygon(this.x, this.y, this.size, 5);
      } else if (this.type === "hexagon") {
        drawPolygon(this.x, this.y, this.size, 6);
      } else if (this.type === "star") {
        drawStar(this.x, this.y, this.size, 5);
      } else if (this.type === "heart") {
        drawHeart(this.x, this.y, this.size);
      } else if (this.type === "diamond") {
        drawRoundedRectangle(this.x, this.y, this.size);
      } else if (this.type === "ellipse") {
        ctx.ellipse(
          this.x,
          this.y,
          this.size * 0.8,
          this.size * 0.5,
          0,
          0,
          Math.PI * 2
        );
      } else if (this.type === "rectangle") {
        ctx.rect(
          this.x - this.size / 2,
          this.y - this.size / 4,
          this.size,
          this.size / 2
        );
      } else if (this.type === "oval") {
        drawOval(this.x, this.y, this.size);
      } else if (this.type === "line") {
        drawLine(this.x, this.y, this.size);
      } else if (this.type === "rounded-rectangle") {
        drawDiamond(this.x, this.y, this.size);
      } else if (this.type === "arrow") {
        drawArrow(this.x, this.y, this.size, this.color);
      } else if (this.type === "spiral") {
        drawSpiral(this.x, this.y, this.size);
      } else if (this.type === "cloud") {
        drawCloud(this.x, this.y, this.size);
      } else if (this.type === "starburst") {
        drawStarburst(this.x, this.y, this.size);
      } else if (this.type === "octagon") {
        drawPolygon(this.x, this.y, this.size, 8);
      } else if (this.type === "crescent") {
        drawCrescent(this.x, this.y, this.size);
      } else if (this.type === "cross") {
        drawCross(this.x, this.y, this.size, this.color);
      }

      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }

  function getRandomSize() {
    return Math.floor(Math.random() * 100) + 20; // Random size between 20 and 120
  }

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function drawPolygon(x, y, radius, sides) {
    const angle = (Math.PI * 2) / sides;
    ctx.moveTo(x + radius * Math.cos(0), y + radius * Math.sin(0));
    for (let i = 1; i <= sides; i++) {
      ctx.lineTo(
        x + radius * Math.cos(angle * i),
        y + radius * Math.sin(angle * i)
      );
    }
    ctx.closePath();
  }

  function drawStar(x, y, radius, spikes) {
    const outerRadius = radius;
    const innerRadius = radius / 2;

    let rot = (Math.PI / 2) * 3;
    ctx.moveTo(x, y - outerRadius);
    for (let i = 0; i < spikes; i++) {
      const x1 = x + Math.cos(rot) * outerRadius;
      const y1 = y + Math.sin(rot) * outerRadius;
      ctx.lineTo(x1, y1);
      rot += (Math.PI / spikes) * 2;

      const x2 = x + Math.cos(rot) * innerRadius;
      const y2 = y + Math.sin(rot) * innerRadius;
      ctx.lineTo(x2, y2);
      rot += (Math.PI / spikes) * 2;
    }
    ctx.lineTo(x, y - outerRadius);
    ctx.closePath();
  }

  function drawHeart(x, y, size) {
    const controlPoint = size * 0.8;
    ctx.moveTo(x, y - size * 0.8);
    ctx.bezierCurveTo(
      x + controlPoint,
      y - controlPoint,
      x + controlPoint,
      y + controlPoint * 0.2,
      x,
      y + size * 0.4
    );
    ctx.bezierCurveTo(
      x - controlPoint,
      y + controlPoint * 0.2,
      x - controlPoint,
      y - controlPoint,
      x,
      y - size * 0.8
    );
  }

  function drawDiamond(x, y, size) {
    ctx.moveTo(x, y - size);
    ctx.lineTo(x + size, y);
    ctx.lineTo(x, y + size);
    ctx.lineTo(x - size, y);
    ctx.closePath();
  }

  function drawOval(x, y, size) {
    ctx.moveTo(x, y - size * 0.5);
    ctx.ellipse(x, y, size * 0.5, size * 0.8, 0, 0, Math.PI * 2);
  }

  function drawLine(x, y, size) {
    ctx.moveTo(x, y);
    ctx.lineTo(x + size, y - size);
  }

  function drawRoundedRectangle(x, y, size) {
    const cornerRadius = size;
    ctx.moveTo(x + cornerRadius, y);
    ctx.lineTo(x - cornerRadius, y);
    ctx.quadraticCurveTo(x, y, x, y + cornerRadius);
    ctx.lineTo(x, y - cornerRadius);
    ctx.quadraticCurveTo(x, y, x - cornerRadius, y);
    ctx.lineTo(x + cornerRadius, y);
    ctx.quadraticCurveTo(x, y, x, y - cornerRadius);
    ctx.lineTo(x, y + cornerRadius);
    ctx.quadraticCurveTo(x, y, x + cornerRadius, y);
  }

  function drawArrow(x, y, size, color) {
    const arrowSize = size * 0.5;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - arrowSize, y - arrowSize);
    ctx.moveTo(x, y);
    ctx.lineTo(x - arrowSize, y + arrowSize);
    ctx.strokeStyle = color;
    ctx.stroke();
  }

  function drawSpiral(x, y, size) {
    ctx.beginPath();
    const numLoops = 10;
    const loopSize = size * 0.1;
    const loopSpacing = size * 0.05;
    const rotationPerLoop = 0.2;
    let currentAngle = 0;

    for (let i = 0; i < numLoops; i++) {
      const radius = loopSize + i * loopSpacing;
      const startAngle = currentAngle;
      const endAngle = startAngle + Math.PI * 2 * rotationPerLoop;
      ctx.arc(x, y, radius, startAngle, endAngle, false);
      currentAngle = endAngle;
    }

    ctx.stroke();
  }

  function drawCloud(x, y, size) {
    ctx.beginPath();
    const cloudSize = size * 0.8;
    const innerRadius = cloudSize * 0.5;
    const outerRadius = cloudSize * 0.7;
    const angleOffset = Math.PI / 6;
    ctx.moveTo(x + outerRadius, y);
    for (let angle = 0; angle < Math.PI * 2; angle += angleOffset) {
      const innerX = x + innerRadius * Math.cos(angle);
      const innerY = y + innerRadius * Math.sin(angle);
      const outerX = x + outerRadius * Math.cos(angle + angleOffset / 2);
      const outerY = y + outerRadius * Math.sin(angle + angleOffset / 2);
      ctx.quadraticCurveTo(innerX, innerY, outerX, outerY);
    }
    ctx.closePath();
  }

  function drawStarburst(x, y, size) {
    ctx.beginPath();
    const numRays = 8;
    const rayLength = size * 0.7;
    const angleOffset = (Math.PI * 2) / numRays;
    const halfAngleOffset = angleOffset / 2; // Half of the angle offset

    for (let i = 0; i < numRays; i++) {
      const angle = i * angleOffset;
      const startX = x + Math.sin(angle) * rayLength;
      const startY = y - Math.cos(angle) * rayLength;

      // Draw an additional line segment to the midpoint between two rays
      const midAngle = angle + halfAngleOffset;
      const midX = x + Math.sin(midAngle) * (rayLength / 2);
      const midY = y - Math.cos(midAngle) * (rayLength / 2);

      ctx.moveTo(startX, startY);
      ctx.lineTo(midX, midY);
      ctx.lineTo(x, y);
    }

    ctx.closePath();
    ctx.stroke();
  }

  function drawCrescent(x, y, size) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2, false);
    ctx.moveTo(x + size, y);
    ctx.arc(x, y, size, 0, Math.PI / 2, true);
    ctx.closePath();
    ctx.fillStyle = "white";
    ctx.fill();
  }

  function drawCross(x, y, size, color) {
    const crossSize = size * 0.5;
    ctx.moveTo(x - crossSize, y);
    ctx.lineTo(x + crossSize, y);
    ctx.moveTo(x, y - crossSize);
    ctx.lineTo(x, y + crossSize);
    ctx.strokeStyle = color;
    ctx.stroke();
  }

  function addShape(x, y) {
    const shapeType = shapeSelect.value;
    if (shapeType === "erase") {
      const eraseSize = getEraseSize();
      const eraseColor = getEraseColor();
      shapes.push({ x, y, size: eraseSize, color: eraseColor, type: "erase" });
    } else {
      const shape = new Shape(x, y, shapeType);
      shapes.push(shape);
    }
  }

  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function drawShapes() {
    clearCanvas();
    shapes.forEach((shape) => {
      const shapeObj = new Shape(shape.x, shape.y, shape.type);
      shapeObj.color = shape.color;
      shapeObj.size = shape.size;
      shapeObj.draw();
    });
  }

  function handleMouseDown(e) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    addShape(mouseX, mouseY);
    drawShapes();
  }

  function handleMouseMove(e) {
    if (e.buttons !== 1) {
      return;
    }

    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    addShape(mouseX, mouseY);
    drawShapes();
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

  function handleShapeChange() {
    drawShapes();
  }

  function getEraseSize() {
    return parseInt(eraseSizeInput.value);
  }

  function getEraseColor() {
    return eraseColorInput.value;
  }

  function toggleEraseMenu() {
    const eraseMenu = document.getElementById("erase-menu");
    eraseMenu.style.display = eraseBtn.classList.toggle("active")
      ? "flex"
      : "none";
    drawShapes();
  }

  function handleBackgroundChange() {
    const backgroundSelect = document.getElementById("background-select");
    const backgroundColorInput = document.getElementById("background-color");
    const selectedBackground = backgroundSelect.value;

    if (selectedBackground === "custom") {
      backgroundColorInput.style.display = "inline-block";
      canvas.style.backgroundColor = backgroundColorInput.value;
    } else {
      backgroundColorInput.style.display = "none";

      if (selectedBackground === "white") {
        canvas.style.backgroundColor = "#ffffff";
      } else if (selectedBackground === "black") {
        canvas.style.backgroundColor = "#000000";
      }
    }
  }

  function handleBackgroundColorChange() {
    const backgroundColorInput = document.getElementById("background-color");
    canvas.style.backgroundColor = backgroundColorInput.value;
  }

  function init() {
    shapeSelect.addEventListener("change", handleShapeChange);
    eraseBtn.addEventListener("click", toggleEraseMenu);
    eraseSizeInput.addEventListener("input", drawShapes);
    eraseColorInput.addEventListener("input", drawShapes);
    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);

    window.addEventListener("resize", handleResize);
    downloadBtn.addEventListener("click", downloadImage);

    const themeSelect = document.getElementById("theme-select");
    themeSelect.addEventListener("change", function () {
      const selectedTheme = this.value;
      const body = document.querySelector("body");
      if (selectedTheme === "dark") {
        body.classList.add("dark-mode");
        body.classList.remove("light-mode");
      } else if (selectedTheme === "light") {
        body.classList.add("light-mode");
        body.classList.remove("dark-mode");
      }
    });

    const backgroundSelect = document.getElementById("background-select");
    const backgroundColorInput = document.getElementById("background-color");

    backgroundSelect.addEventListener("change", handleBackgroundChange);
    backgroundColorInput.addEventListener("input", handleBackgroundColorChange);

    drawShapes();
  }

  init();
});