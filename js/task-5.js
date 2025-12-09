function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function handlerBtn() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  spn.textContent = newColor;
}

const btn = document.querySelector(".change-color");
const spn = document.querySelector(".color");

btn.addEventListener("click", handlerBtn);
