const terminal = document.getElementById("terminal");
let terminalVisible = true;
const suggestionsContainer = document.getElementById("suggestions");
const codeTextArea = document.getElementById("code");

codeTextArea.addEventListener("keydown", handleKeyDown);
codeTextArea.addEventListener("input", handleCodeInput);

function runCode() {
  terminal.innerHTML = "";
  const code = document.getElementById("code").value;

  const originalConsoleLog = console.log;
  console.log = function (...args) {
    originalConsoleLog.apply(console, args);
    const message = args.map((arg) => formatArgument(arg)).join(" ");
    const logElement = document.createElement("p");
    logElement.innerHTML = message;
    terminal.appendChild(logElement);
  };

  try {
    eval(code);
  } catch (error) {
    displayError(error);
  }

  console.log = originalConsoleLog;
}

function formatArgument(arg) {
  if (typeof arg === "string") {
    return arg;
  } else {
    return JSON.stringify(arg);
  }
}

function displayError(error) {
  const errorElement = document.createElement("p");
  errorElement.classList.add("error");
  errorElement.textContent = error;
  terminal.appendChild(errorElement);
}

function handleKeyDown(event) {
  if (event.key === "Enter" && suggestionsContainer.style.display !== "none") {
    event.preventDefault();
    const currentInput = getCurrentLineText(codeTextArea);
    const matchedSuggestion = window.codeSuggestions.find((suggestion) =>
      suggestion.label.toLowerCase().startsWith(currentInput.toLowerCase())
    );
    if (matchedSuggestion) {
      insertCodeSnippet(matchedSuggestion.value);
    }
  }
}

function getCurrentLineText(textarea) {
  const startPos = textarea.selectionStart;
  const endPos = textarea.selectionEnd;
  const value = textarea.value;
  let lineStart = startPos;
  let lineEnd = endPos;
  while (lineStart > 0 && value.charAt(lineStart - 1) !== "\n") {
    lineStart--;
  }
  while (lineEnd < value.length && value.charAt(lineEnd) !== "\n") {
    lineEnd++;
  }
  return value.substring(lineStart, lineEnd).trim();
}

function handleCodeInput() {
  const currentInput = codeTextArea.value;
  const lines = currentInput.split("\n");
  let matchedSuggestions = [];

  if (lines.length > 0) {
    const currentLine = lines[lines.length - 1]; // Get the current line
    matchedSuggestions = window.codeSuggestions.filter((suggestion) =>
      suggestion.label.toLowerCase().startsWith(currentLine.toLowerCase())
    );
  }
  const currentLine = getCurrentLineText(codeTextArea);
  if (currentLine.length !== 0) {
    console.log(codeTextArea.value.length);
    renderSuggestions(matchedSuggestions);
  }
}

function renderSuggestions(suggestions) {
  suggestionsContainer.innerHTML = "";
  if (codeTextArea.value.length !== 0) {
    const limitedSuggestions = suggestions.slice(0, 5); // Get the first five suggestions

    if (limitedSuggestions.length > 0) {
      const infoText = document.createElement("div");
      infoText.classList.add("suggestion-info");
      infoText.textContent = "Enter/click";
      suggestionsContainer.appendChild(infoText);
      limitedSuggestions.forEach((suggestion) => {
        const suggestionElement = document.createElement("div");
        suggestionElement.classList.add("suggestion");
        suggestionElement.textContent = suggestion.label;
        suggestionElement.addEventListener("click", () => {
          insertCodeSnippet(suggestion.value);
        });

        // Add event listener for "Enter" key press
        suggestionElement.addEventListener("keydown", (event) => {
          if (event.key === "Enter") {
            insertCodeSnippet(suggestion.value);
          }
        });

        suggestionsContainer.appendChild(suggestionElement);
      });

      suggestionsContainer.style.display = "block";
    } else {
      suggestionsContainer.style.display = "none";
    }
  }
}

function insertCodeSnippet(code) {
  const currentCode = codeTextArea.value;
  const selectionStart = codeTextArea.selectionStart;
  const selectionEnd = codeTextArea.selectionEnd;

  const currentLineIndex = getLineNumber(codeTextArea, selectionStart);
  const newLineStart = getLineStartPosition(codeTextArea, currentLineIndex);
  const newLineEnd = getLineEndPosition(codeTextArea, currentLineIndex);
  const newLine = code.substring(0, code.indexOf("\n")).trim();

  const newCode =
    currentCode.substring(0, newLineStart) +
    newLine +
    currentCode.substring(newLineEnd, selectionEnd) +
    code.substring(code.indexOf("\n"));

  codeTextArea.value = newCode;
  codeTextArea.selectionStart = newLineStart + newLine.length;
  codeTextArea.selectionEnd = newLineStart + newLine.length;
  codeTextArea.focus();
  suggestionsContainer.style.display = "none";
}

function getLineNumber(textarea, position) {
  const value = textarea.value;
  let lineNumber = 0;
  for (let i = 0; i < position; i++) {
    if (value.charAt(i) === "\n") {
      lineNumber++;
    }
  }
  return lineNumber;
}

function getLineStartPosition(textarea, lineIndex) {
  const value = textarea.value;
  let position = 0;
  let lineNumber = 0;
  while (lineNumber < lineIndex && position < value.length) {
    if (value.charAt(position) === "\n") {
      lineNumber++;
    }
    position++;
  }
  return position;
}

function getLineEndPosition(textarea, lineIndex) {
  const value = textarea.value;
  let position = getLineStartPosition(textarea, lineIndex);
  while (position < value.length && value.charAt(position) !== "\n") {
    position++;
  }
  return position;
}

function formatCode() {
  const codeTextArea = document.getElementById("code");
  const formattedCode = js_beautify(codeTextArea.value);
  codeTextArea.value = formattedCode;
}

function openSaveDialog() {
  const saveDialog = document.getElementById("save-dialog");
  saveDialog.style.display = "block";
}

function closeSaveDialog() {
  const saveDialog = document.getElementById("save-dialog");
  saveDialog.style.display = "none";
}

function saveCode() {
  const codeTextArea = document.getElementById("code");
  const code = codeTextArea.value;

  const fileNameInput = document.getElementById("file-name-input");
  const fileName = fileNameInput.value;

  if (fileName) {
    const element = document.createElement("a");
    const file = new Blob([code], { type: "application/javascript" });
    element.href = URL.createObjectURL(file);
    element.download = fileName.endsWith(".js") ? fileName : `${fileName}.js`;
    element.click();
  }

  closeSaveDialog();
}

function toggleTerminalVisibility() {
  const terminalContainer = document.getElementById("terminal-container");
  const hideTerminalButton = document.getElementById("hide-terminal-button");
  const codeEditor = document.getElementById("code-editor");

  if (terminalVisible) {
    terminalContainer.style.display = "none";
    hideTerminalButton.textContent = "Show Terminal";
  } else {
    codeEditor.style.width = "100%";
    terminalContainer.style.display = "block";
    hideTerminalButton.textContent = "Terminal";
  }

  terminalVisible = !terminalVisible;
}

function updateLineNumbers() {
  const codeTextArea = document.getElementById("code");
  const codeLines = codeTextArea.value.split("\n");
  const lineNumbersContainer = document.getElementById("line-numbers");

  lineNumbersContainer.innerHTML = "";
  codeLines.forEach((_, index) => {
    const lineNumber = index + 1;
    const lineElement = document.createElement("div");
    lineElement.textContent = lineNumber;
    lineElement.setAttribute("data-line-number", lineNumber);
    lineNumbersContainer.appendChild(lineElement);
  });
}

function syncScroll() {
  const codeTextArea = document.getElementById("code");
  const lineNumbersContainer = document.getElementById("line-numbers");
  lineNumbersContainer.scrollTop = codeTextArea.scrollTop;
}
