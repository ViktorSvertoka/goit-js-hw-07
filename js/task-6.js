function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.getElementById("controls");
const input = controls.querySelector("input");
const createButton = controls.querySelector("button[data-create]");
const destroyButton = controls.querySelector("button[data-destroy]");
const boxes = document.getElementById("boxes");

function createBoxes(amount) {
  boxes.innerHTML = "";

  let size = 30;
  const elements = [];

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    elements.push(div);
    size += 10;
  }

  boxes.append(...elements);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function handleCreateButtonClick() {
  const amount = Number(input.value);

  if (amount > 0 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  }
}

createButton.addEventListener("click", handleCreateButtonClick);
destroyButton.addEventListener("click", destroyBoxes);
