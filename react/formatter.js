const formatJSX = (jsxString) => {
  let formattedLines = [];
  let nestingLevel = 0;
  const INDENT = "  ";
  let buffer = "";

  for (let i = 0; i < jsxString.length; i++) {
    const char = jsxString[i];
    buffer += char;

    if (
      char === ">" ||
      (buffer.trim().startsWith("<") && !buffer.trim().endsWith(">"))
    ) {
      continue;
    }

    const isOpeningTag =
      buffer.trim().startsWith("<") && !buffer.trim().startsWith("</");
    const isClosingTag = buffer.trim().startsWith("</");
    const isSelfClosingTag = buffer.trim().endsWith("/>");

    if (isClosingTag) {
      nestingLevel--;
    }

    const indentation = INDENT.repeat(nestingLevel);
    formattedLines.push(`${indentation}${buffer.trim()}`);

    if (isOpeningTag && !isSelfClosingTag) {
      nestingLevel++;
    }

    buffer = "";
  }

  return formattedLines.join("\n");
};

const letmeFomat = (codeString) => {
  let inJSX = false;
  let buffer = "";
  let formattedCode = [];

  // Keeping track of return statements and parentheses
  let returnCount = 0;
  let parenCount = 0;

  for (let line of codeString.split("\n")) {
    if (line.trim() === "return (" || returnCount > 0) {
      inJSX = true;
      returnCount++;

      if (line.includes("(")) {
        parenCount++;
      }

      if (line.includes(")")) {
        parenCount--;
      }

      buffer += line + "\n";

      if (parenCount === 0) {
        // End of JSX block
        returnCount = 0;
        inJSX = false;
        formattedCode.push(formatJSX(buffer));
        buffer = "";
      }
    } else if (inJSX) {
      buffer += line + "\n";

      if (line.includes("(")) {
        parenCount++;
      }

      if (line.includes(")")) {
        parenCount--;
      }

      if (parenCount === 0) {
        // End of JSX block
        returnCount = 0;
        inJSX = false;
        formattedCode.push(formatJSX(buffer));
        buffer = "";
      }
    } else {
      formattedCode.push(line);
    }
  }

  return formattedCode.join("\n");
};
