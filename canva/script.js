const shapes = [];

function refreshCanvas() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  shapes.length = 0;

  const code = document.getElementById("code").value;

  // Format the code
  const formattedCode = js_beautify(code);

  // Update the code textarea with the formatted code
  document.getElementById("code").value = formattedCode;

  eval(formattedCode);

  shapes.forEach((shape) => {
    shape.draw(ctx);
  });

  // Enable download button
  const downloadButton = document.getElementById("downloadButton");
  downloadButton.href = canvas.toDataURL();
}

function clearCanvas() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function formatCode() {
  const codeTextArea = document.getElementById("code");
  const code = codeTextArea.value;
  const formattedCode = js_beautify(code);
  codeTextArea.value = formattedCode;
}

function downloadCanvas() {
  const canvas = document.getElementById("canvas");

  const dataURL = canvas.toDataURL();

  const link = document.createElement("a");
  link.href = dataURL;
  link.download = "canvas.png";
  link.click();
}

function showSuggestions() {
  const suggestionsContainer = document.getElementById("suggestions");

  // Clear existing suggestions
  suggestionsContainer.innerHTML = "";

  if (suggestionsContainer.parentElement.style.display === "block") {
    const codeTextArea = document.getElementById("code");
    const code = codeTextArea.value;

    // Split the code into lines
    const lines = code.split("\n");

    // Get suggestions for each line and display them
    lines.forEach((line, index) => {
      const lineContainer = document.createElement("div");

      // Get suggestions based on the current line
      const suggestions = getSuggestions(line);

      // Display suggestions
      suggestions.forEach((suggestion) => {
        const suggestionElement = document.createElement("div");
        suggestionElement.textContent = suggestion;
        suggestionElement.classList.add("suggestion");
        suggestionElement.addEventListener("click", () => {
          replaceLineWithSuggestion(index, suggestion);
        });
        lineContainer.appendChild(suggestionElement);
      });

      suggestionsContainer.appendChild(lineContainer);
    });
  }
}

function getSuggestions(line) {
  const filteredSuggestions = window.snippets.filter((suggestion) =>
    suggestion.includes(line)
  );

  return filteredSuggestions;
}

function replaceLineWithSuggestion(lineIndex, suggestion) {
  const suggestionsContainer = document.getElementById("suggestions-container");
  const searchInput = document.getElementById("searchInput");
  const codeTextArea = document.getElementById("code");
  const code = codeTextArea.value;
  console.log("inserted");
  // Split the code into lines
  const lines = code.split("\n");

  // Replace the line with the suggestion
  lines[lineIndex] = suggestion;

  // Update the code textarea with the modified code
  codeTextArea.value = lines.join("\n");

  suggestionsContainer.style.display = "none";
  searchInput.style.display = "none";
}

function filterSuggestions() {
  const searchInput = document.getElementById("searchInput");
  const searchTerm = searchInput.value.toLowerCase();

  // Get all suggestion elements
  const suggestionElements = document.querySelectorAll(".suggestion");

  // Filter the suggestions based on the search term
  suggestionElements.forEach((suggestionElement) => {
    const suggestionText = suggestionElement.textContent.toLowerCase();
    if (suggestionText.includes(searchTerm)) {
      suggestionElement.style.display = "block";
    } else {
      suggestionElement.style.display = "none";
    }
  });
}

function showSuggestionsToggle() {
  const suggestionsContainer = document.getElementById("suggestions-container");
  const searchInput = document.getElementById("searchInput");

  // Toggle the display of suggestions container
  if (suggestionsContainer.style.display === "none") {
    suggestionsContainer.style.display = "block";
    searchInput.style.display = "block";
    showSuggestions();
  } else {
    suggestionsContainer.style.display = "none";
    searchInput.style.display = "none";
  }
}
