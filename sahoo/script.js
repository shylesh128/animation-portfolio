function handleClick(event) {
  const x = event.clientX;
  const y = event.clientY;
  console.log(`${x},${y}`);
}

document.addEventListener("click", handleClick);

function createDiagonalLine(startX, startY, endX, endY, animationSteps, color) {
  return new Promise((resolve) => {
    const deltaX = endX - startX;
    const deltaY = endY - startY;
    const length = Math.sqrt(deltaX ** 2 + deltaY ** 2);

    const diagonalLineContainer = document.createElement("div");
    diagonalLineContainer.style.position = "absolute";
    diagonalLineContainer.style.left = startX + "px";
    diagonalLineContainer.style.top = startY + "px";
    document
      .getElementById("glowing-line-container")
      .appendChild(diagonalLineContainer);

    const diagonalLine = document.createElement("div");
    diagonalLine.className = "glowing-line";
    diagonalLine.style.backgroundColor = color;
    diagonalLine.style.width = "0px";
    diagonalLineContainer.appendChild(diagonalLine);

    const angle = Math.atan2(deltaY, deltaX);
    diagonalLineContainer.style.transform = `rotate(${angle}rad)`;

    const stepLength = length / animationSteps;
    let currentLength = 0;

    const animateDiagonalLine = () => {
      if (currentLength <= length) {
        diagonalLine.style.width = currentLength + "px";
        currentLength += stepLength;
        requestAnimationFrame(animateDiagonalLine);
      } else {
        resolve();
      }
    };

    animateDiagonalLine();
  });
}

async function runletter_S_animation() {
  await createDiagonalLine(288, 380, 425, 380, 30, "#fff");
  await createDiagonalLine(424, 380, 464, 340, 25, "#fff");
  await createDiagonalLine(463, 343, 463, 294, 20, "#fff");
  await createDiagonalLine(463, 298, 330, 298, 15, "rgba(255, 255, 255, 1)");
  await createDiagonalLine(337, 297, 363, 275, 10, "#fff");
  await createDiagonalLine(363, 277, 449, 277, 10, "#fff");
  await createDiagonalLine(449, 276, 478, 247, 10, "#fff");
  await createDiagonalLine(480, 247, 344, 247, 10, "#fff");
  await createDiagonalLine(344, 248, 305, 288, 10, "#fff");
  await createDiagonalLine(306, 285, 305, 330, 10, "#fff");
  await createDiagonalLine(304, 328, 429, 328, 10, "#fff");
  await createDiagonalLine(430, 329, 406, 353, 10, "#fff");
  await createDiagonalLine(407, 350, 317, 350, 10, "#fff");
  await createDiagonalLine(317, 350, 288, 379, 10, "#fff");
}

async function runletter_a_animation() {
  await createDiagonalLine(598, 379, 570, 353, 30, "#fff");
  await createDiagonalLine(570, 353, 570, 316, 25, "#fff");
  await createDiagonalLine(571, 316, 512, 316, 20, "#fff");
  await createDiagonalLine(512, 316, 512, 355, 20, "#fff");
  await createDiagonalLine(512, 355, 480, 355, 20, "#fff");
  await createDiagonalLine(480, 355, 480, 245, 20, "#fff");
  await createDiagonalLine(480, 245, 601, 245, 10, "#fff");
  await createDiagonalLine(601, 245, 601, 379, 5, "#fff");
}

async function runletter_a2_animation() {
  await createDiagonalLine(610, 380, 638, 353, 25, "#fff");
  await createDiagonalLine(638, 353, 637, 315, 25, "#fff");
  await createDiagonalLine(637, 315, 696, 315, 25, "#fff");
  await createDiagonalLine(699, 315, 699, 355, 25, "#fff");
  await createDiagonalLine(699, 351, 726, 351, 25, "#fff");
  await createDiagonalLine(726, 351, 726, 247, 25, "#fff");
  await createDiagonalLine(726, 247, 608, 247, 25, "#fff");
  await createDiagonalLine(610, 247, 610, 379, 25, "#fff");
}

async function inside_a() {
  await createDiagonalLine(637, 277, 699, 277, 20, "#fff");
  await createDiagonalLine(697, 277, 697, 287, 20, "#fff");
  await createDiagonalLine(697, 287, 637, 287, 20, "#fff");
  await createDiagonalLine(637, 287, 637, 277, 20, "#fff");
}

async function sync_inside_a() {
  await createDiagonalLine(512, 277, 570, 277, 30, "#fff");
  await createDiagonalLine(572, 277, 572, 287, 25, "#fff");
  await createDiagonalLine(572, 287, 512, 287, 20, "#fff");
  await createDiagonalLine(512, 287, 512, 277, 20, "#fff");
}

async function left_H() {
  await createDiagonalLine(736, 379, 736, 245, 40, "#fff");
  await createDiagonalLine(736, 245, 765, 245, 30, "#fff");
  await createDiagonalLine(765, 245, 765, 284, 25, "#fff");
  await createDiagonalLine(765, 284, 837, 284, 20, "#fff");
  await createDiagonalLine(837, 284, 836, 246, 15, "#fff");
}

async function right_H() {
  await createDiagonalLine(865, 219, 867, 353, 40, "#fff");
  await createDiagonalLine(867, 353, 837, 353, 30, "#fff");
  await createDiagonalLine(837, 353, 837, 315, 25, "#fff");
  await createDiagonalLine(837, 315, 764, 315, 20, "#fff");
  await createDiagonalLine(764, 315, 764, 353, 15, "#fff");
}

async function letter_o() {
  await createDiagonalLine(876, 379, 1009, 379, 40, "#fff");
  await createDiagonalLine(1007, 379, 1007, 245, 40, "#fff");
  await createDiagonalLine(1007, 247, 875, 247, 40, "#fff");
  await createDiagonalLine(876, 247, 876, 379, 40, "#fff");
}

async function inside_o() {
  await createDiagonalLine(975, 292, 904, 292, 60, "#fff");
  await createDiagonalLine(904, 292, 904, 347, 60, "#fff");
}

async function inside_o_2() {
  await createDiagonalLine(975, 292, 977, 348, 60, "#fff");
  await createDiagonalLine(977, 348, 904, 348, 60, "#fff");
}

function created() {
  createDiagonalLine(836, 246, 865, 219, 1, "#fff");
  createDiagonalLine(736, 379, 765, 351, 1, "#fff");
}

setTimeout(() => {
  created();
  runletter_S_animation();
  runletter_a_animation();
  inside_a();
  left_H();
  right_H();
  letter_o();
  runletter_a2_animation();
  sync_inside_a();
  inside_o();
  inside_o_2();
}, 1000);

setTimeout(() => {
  createFlareLine(344, 245, 50);
  createFlareLine(570, 314, 50);
  createFlareLine(836, 315, 50);
  createFlareLine(725, 244, 50);
  createFlareLine(976, 290, 50);
}, 500);

function createFlare(x, y, size) {
  const flareContainer = document.createElement("div");
  flareContainer.id = "flareContainer";
  document.body.appendChild(flareContainer);

  const flare = document.createElement("div");
  flare.className = "flare";
  flare.style.width = size + "px";
  flare.style.height = size + "px";
  flare.style.left = x - size / 2 + "px";
  flare.style.top = y - size / 2 + "px";
  flareContainer.appendChild(flare);
}

function createFlareLine(x, y, size) {
  const flareContainer = document.createElement("div");
  flareContainer.id = "flareContainer";
  document.body.appendChild(flareContainer);

  const flare = document.createElement("div");
  flare.className = "flare-line";
  flare.style.width = size + "px";
  flare.style.left = x - size / 2 + "px";
  flare.style.top = y - 1 + "px";
  flareContainer.appendChild(flare);
}

createFlare(344, 245, 20);
createFlare(570, 314, 20);
createFlare(836, 315, 20);
createFlare(725, 244, 20);
createFlare(976, 290, 20);
