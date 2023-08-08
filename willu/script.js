var question = document.getElementById("question");
var message = document.getElementById("message");
var button1 = document.getElementById("Close1");
var button2 = document.getElementById("Close2");
var noCount = 0;

// Step 1: Define the images to preload
var images = [];
var screenSize = window.innerWidth;
if (screenSize <= 768) {
  for (var i = 0; i < 16; i++) {
    images[i] = "https://source.unsplash.com/random/768x1024/?romantic," + i;
  }
} else {
  for (var i = 0; i < 16; i++) {
    images[i] = "https://source.unsplash.com/random/768x1024/?romantic," + i;
  }
}

// Step 2: Preload the images
var preloadedImages = [];
for (var i = 0; i < images.length; i++) {
  preloadedImages[i] = new Image();
  preloadedImages[i].src = images[i];
}

function answerYes() {
  question.innerHTML = "";
  message.innerHTML = "I love you a lot for giving me a chance. 💖";
  button1.style.display = "none";
  button2.style.display = "none";

  // Create heart animation
  var heartContainer = document.getElementById("hearts");
  var numberOfHearts = 100;

  for (var i = 0; i < numberOfHearts; i++) {
    var heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = Math.random() * 100 + "vh";
    heart.style.animation = `floatHeart ${2 + Math.random() * 3}s linear ${
      Math.random() * 2
    }s infinite`;
    heartContainer.appendChild(heart);
  }
}

// Add keyframe animation for floating hearts

function answerNo() {
  var modalContent = document.querySelector(".modal-content");
  modalContent.style.opacity = 0;
  noCount++;

  // Step 3: Change the background image using preloaded images
  if (noCount < images.length) {
    document.body.style.backgroundImage = 'url("' + images[noCount] + '")';
  }

  setTimeout(function () {
    switch (noCount) {
      case 1:
        question.innerHTML = "Really? 🙁 Please give it another chance!";
        break;
      case 2:
        question.innerHTML = "Still no? 😔 How about now?";
        break;
      case 3:
        question.innerHTML = "Please reconsider! 💔";
        break;
      case 4:
        question.innerHTML = "I promise to be the best! 🌺";
        break;
      case 5:
        question.innerHTML = "Babe please? 🌟";
        break;
      case 6:
        question.innerHTML = "Let's give it a shot? 🥺";
        break;
      case 7:
        question.innerHTML = "I'll wait for you forever! ⏳";
        break;
      case 8:
        question.innerHTML = "I believe in us! 💑";
        break;
      case 9:
        question.innerHTML = "Just one chance! 🙏";
        break;
      case 10:
        question.innerHTML =
          "I'm really heartbroken. 😭 Can you please reconsider?";
        break;
      case 11:
        question.innerHTML = "I know we can make it! 🌈";
        break;
      case 12:
        question.innerHTML = "Trust me on this one! 🌟";
        break;
      case 13:
        question.innerHTML = "Let's try together! 💑";
        break;
      case 14:
        question.innerHTML = "I won't let you down! 💪";
        break;
      case 15:
        question.innerHTML = "Give me a chance, I'll prove it! 🏆";
        break;
      default:
        question.innerHTML = "I love you and I will  😘💕💕";
        break;
    }
    modalContent.style.opacity = 1;
  }, 500);
}

var styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerHTML =
  "@keyframes floatHeart {0% {transform: scale(0) rotate(45deg); opacity: 0;} 50% {transform: scale(0.6) rotate(45deg); opacity: 1;} 100% {transform: scale(1) rotate(45deg); opacity: 0; top: -100vh;}}";
document.head.appendChild(styleSheet);
