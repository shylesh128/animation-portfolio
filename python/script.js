document.getElementById("runBtn").addEventListener("click", function () {
  const code = document.getElementById("code").value;

  const outputDiv = document.getElementById("output");
  outputDiv.textContent = ""; // Clear previous output

  const runCode = `
  try:
    ${code}
  except Exception as e:
    print('Error:', e)
    `;

  brythonRunScript(runCode);
});

function brythonRunScript(code) {
  const outputDiv = document.getElementById("output");

  const stdout = {
    write: function (text) {
      outputDiv.textContent += text;
    },
  };

  try {
    brython(1); // Initialize Brython

    const builtins = __BRYTHON__.builtins;
    const originalStdout = builtins.print.$d.__getattr__("write");
    builtins.print.$d.__setattr__("write", stdout.write);

    __BRYTHON__.run_script(code);

    builtins.print.$d.__setattr__("write", originalStdout);
  } catch (error) {
    console.error(error);
  }
}
