function formatCode() {
  const htmlCode = document.getElementById("html-editor").value;
  const formattedHtmlCode = html_beautify(htmlCode, {
    indent_size: 2,
    indent_with_tabs: false,
    wrap_attributes: "force-expand-multiline",
  });
  document.getElementById("html-editor").value = formattedHtmlCode;
}

document.getElementById("format-btn").addEventListener("click", formatCode);

document.getElementById("compile-btn").addEventListener("click", () => {
  const htmlCode = document.getElementById("html-editor").value;
  const previewFrame = document.getElementById("preview-frame").contentDocument;
  previewFrame.open();
  previewFrame.write(htmlCode);
  previewFrame.close();
});

function insertSnippet(snippet) {
  const textarea = document.getElementById("html-editor");
  const startPos = textarea.selectionStart;
  const endPos = textarea.selectionEnd;
  const selection = textarea.value.substring(startPos, endPos);
  textarea.value =
    textarea.value.substring(0, startPos) +
    snippet.value +
    textarea.value.substring(endPos, textarea.value.length);
  textarea.focus();
  textarea.setSelectionRange(
    startPos + snippet.value.length,
    startPos + snippet.value.length
  );
}

// Function to display suggestions based on the type
function showSuggestions(snippets) {
  const suggestionsContainer = document.getElementById("suggestions-container");
  suggestionsContainer.innerHTML = "";

  snippets.forEach((snippet) => {
    const suggestion = document.createElement("div");
    suggestion.classList.add("suggestion");
    suggestion.innerText = snippet.label;
    suggestion.addEventListener("click", () => {
      insertSnippet(snippet);
      suggestionsContainer.style.display = "none";
    });
    suggestionsContainer.appendChild(suggestion);
  });

  suggestionsContainer.style.display = "block";
}

// Event listeners for the buttons
document
  .getElementById("html-snippet-btn")
  .addEventListener("click", () => showSuggestions(window.htmlSnippets));
document
  .getElementById("css-snippet-btn")
  .addEventListener("click", () => showSuggestions(window.cssSnippets));
// document
//   .getElementById("js-snippet-btn")
//   .addEventListener("click", () => showSuggestions(jsSnippets));
