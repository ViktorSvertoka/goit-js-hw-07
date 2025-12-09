const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

function updateNameOutput() {
  const trimmedValue = input.value.trim();

  if (trimmedValue === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = trimmedValue;
  }
}

input.addEventListener("input", updateNameOutput);
