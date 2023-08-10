const gameContainer = document.querySelector(".game-container");
const snake = document.querySelector(".snake");
const food = document.querySelector(".food");

let snakeSegments = [{ x: 0, y: 0, el: snake }];
let snakeSpeed = 2;
let foodX = 0;
let foodY = 0;
let points = 0;
let paused = false;

let snakeXSpeed = snakeSpeed;
let snakeYSpeed = 0;

const pointsDiv = document.getElementById("points");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const restartButton = document.getElementById("restart");

function getRandomPosition() {
  return (
    Math.floor(
      Math.random() * ((gameContainer.clientWidth - food.clientWidth) / 10)
    ) * 10
  );
}

function updateFoodPosition() {
  foodX = getRandomPosition();
  foodY = getRandomPosition();
  food.style.left = `${foodX}px`;
  food.style.top = `${foodY}px`;
}

function updatePoints() {
  pointsDiv.innerHTML = "Points: " + points;
}

function restartGame() {
  window.location.reload();
}

function togglePause() {
  paused = !paused;
}

startButton.addEventListener("click", () => {
  paused = false;
});

pauseButton.addEventListener("click", togglePause);

restartButton.addEventListener("click", restartGame);

function moveSnake() {
  const removedSegment = snakeSegments.pop();
  removedSegment.x = snakeSegments[0].x + snakeXSpeed;
  removedSegment.y = snakeSegments[0].y + snakeYSpeed;
  snakeSegments.unshift(removedSegment);

  for (let i = 0; i < snakeSegments.length; i++) {
    snakeSegments[i].el.style.left = `${snakeSegments[i].x}px`;
    snakeSegments[i].el.style.top = `${snakeSegments[i].y}px`;
  }
}

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      snakeXSpeed = 0;
      snakeYSpeed = -snakeSpeed;
      break;
    case "ArrowDown":
      snakeXSpeed = 0;
      snakeYSpeed = snakeSpeed;
      break;
    case "ArrowLeft":
      snakeXSpeed = -snakeSpeed;
      snakeYSpeed = 0;
      break;
    case "ArrowRight":
      snakeXSpeed = snakeSpeed;
      snakeYSpeed = 0;
      break;
  }
});

const upButton = document.getElementById("up");
const downButton = document.getElementById("down");
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");

upButton.addEventListener("click", () => {
  snakeXSpeed = 0;
  snakeYSpeed = -snakeSpeed;
});

downButton.addEventListener("click", () => {
  snakeXSpeed = 0;
  snakeYSpeed = snakeSpeed;
});

leftButton.addEventListener("click", () => {
  snakeXSpeed = -snakeSpeed;
  snakeYSpeed = 0;
});

rightButton.addEventListener("click", () => {
  snakeXSpeed = snakeSpeed;
  snakeYSpeed = 0;
});

function checkCollision() {
  const head = snakeSegments[0];

  if (
    head.x < 0 ||
    head.y < 0 ||
    head.x >= gameContainer.clientWidth ||
    head.y >= gameContainer.clientHeight
  ) {
    // Re-position snake to the center
    snakeSegments = [
      {
        x: gameContainer.clientWidth / 2,
        y: gameContainer.clientHeight / 2,
        el: snake,
      },
    ];
    snakeXSpeed = 0;
    snakeYSpeed = 0;
    return;
  }

  const distanceToFood = Math.sqrt(
    (head.x - foodX) * (head.x - foodX) + (head.y - foodY) * (head.y - foodY)
  );

  if (distanceToFood <= 10) {
    // Adjust this value to make eating the food easier or harder
    const tail = snakeSegments[snakeSegments.length - 1];
    const newTail = { x: tail.x, y: tail.y, el: document.createElement("div") };
    newTail.el.className = "snake";
    newTail.el.style.left = `${tail.x}px`;
    newTail.el.style.top = `${tail.y}px`;
    snakeSegments.push(newTail);
    gameContainer.appendChild(newTail.el);
    updateFoodPosition();
    points += 10;
    updatePoints();
  }
}

function createInitialSnake() {
  for (let i = 0; i < 3; i++) {
    const segment = document.createElement("div");
    segment.className = "snake";
    segment.style.left = `${i * 20}px`; // Set the initial x-coordinate
    segment.style.top = `0px`; // Set the initial y-coordinate
    snakeSegments.push({ x: i * 20, y: 0, el: segment }); // 20 instead of snakeSpeed for consistent sizing
    gameContainer.appendChild(segment);
  }
}

function gameLoop() {
  if (!paused) {
    moveSnake();
    checkCollision();
  }
  requestAnimationFrame(gameLoop);
}

createInitialSnake();
updateFoodPosition();
gameLoop();
