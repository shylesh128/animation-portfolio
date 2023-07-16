let tipIndex = 0;

function displaySequentialTip() {
  const tipContainer = document.getElementById("tip-container");
  const tipDescription = document.getElementById("tip-description");
  const tipCodeExample = document
    .getElementById("tip-code-example")
    .querySelector("code");

  // Get the tip at the current index
  const currentTip = window.tips[tipIndex];

  // Update the tip container with the current tip
  tipDescription.textContent = currentTip.description;
  tipCodeExample.textContent = currentTip.code;

  // Show the tip container
  tipContainer.style.display = "block";

  // Increment the tip index for the next tip
  tipIndex = (tipIndex + 1) % window.tips.length;
}

function closeTip() {
  const tipContainer = document.getElementById("tip-container");
  tipContainer.style.display = "none";
}

function copyToClipboard() {
  const codeElement = document
    .getElementById("tip-code-example")
    .querySelector("code");

  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = codeElement.textContent;

  document.body.appendChild(tempTextArea);

  tempTextArea.select();
  document.execCommand("copy");

  document.body.removeChild(tempTextArea);
  closeTip();
}

const sequentialTipButton = document.getElementById("sequential-tip-button");
sequentialTipButton.addEventListener("click", displaySequentialTip);
