const gameContainer = document.querySelector(".game-container");
const snake = document.querySelector(".snake");
const food = document.querySelector(".food");
let automated = false;

const toggleAutoButton = document.getElementById("toggleAuto");

toggleAutoButton.addEventListener("click", () => {
  automated = !automated;
});

let snakeSegments = [{ x: 0, y: 0, el: snake }];
let snakeSpeed = 5;
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

function autoMoveSnake() {
  if (!automated) return;
  const head = snakeSegments[0];
  if (head.x < foodX) {
    snakeXSpeed = snakeSpeed;
    snakeYSpeed = 0;
  } else if (head.x > foodX) {
    snakeXSpeed = -snakeSpeed;
    snakeYSpeed = 0;
  } else if (head.y < foodY) {
    snakeXSpeed = 0;
    snakeYSpeed = snakeSpeed;
  } else if (head.y > foodY) {
    snakeXSpeed = 0;
    snakeYSpeed = -snakeSpeed;
  }
}

function getRandomPosition() {
  return (
    Math.floor(
      Math.random() * ((gameContainer.clientWidth - food.clientWidth - 50) / 10)
    ) *
      10 +
    10
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
  const tail = snakeSegments.pop();
  const head = snakeSegments[0];

  const newHead = {
    x: head.x + snakeXSpeed,
    y: head.y + snakeYSpeed,
    el: tail.el,
  };

  newHead.el.style.left = `${newHead.x}px`;
  newHead.el.style.top = `${newHead.y}px`;

  snakeSegments.unshift(newHead);
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
    let segmentsToAdd = 1;
    if (points >= 50 && points < 100) segmentsToAdd = 2;
    else if (points >= 100) segmentsToAdd = 3;

    for (let i = 0; i < segmentsToAdd; i++) {
      const tail = snakeSegments[snakeSegments.length - 1];
      const newTail = {
        x: tail.x,
        y: tail.y,
        el: document.createElement("div"),
      };
      newTail.el.className = "snake";
      newTail.el.style.left = `${tail.x}px`;
      newTail.el.style.top = `${tail.y}px`;
      snakeSegments.push(newTail);
      gameContainer.appendChild(newTail.el);
    }

    updateFoodPosition();

    points += 10;
    updatePoints();
  }
}

function createInitialSnake() {
  const initialLength = 100;
  for (let i = 0; i < initialLength; i++) {
    const segment = document.createElement("div");
    segment.className = "snake";
    segment.style.left = `${i * 20}px`;
    segment.style.top = `0px`;
    snakeSegments.push({ x: i * 20, y: 0, el: segment });
    gameContainer.appendChild(segment);
  }
}

function gameLoop() {
  if (!paused) {
    autoMoveSnake();
    moveSnake();
    checkCollision();
  }
  requestAnimationFrame(gameLoop);
}

createInitialSnake();
updateFoodPosition();
gameLoop();
