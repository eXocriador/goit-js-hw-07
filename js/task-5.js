
const body = document.querySelector("body");
const colorButton = document.querySelector(".change-color");
let colorValue = document.querySelector(".color");
const changeColor = (event) => {
  console.log("suck++");
  const randomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
      .padStart(6, 0)}`;
  }
  const backColor = randomHexColor();
  body.style.backgroundColor = backColor;
  colorValue.textContent = backColor;
}
colorButton.addEventListener("click", changeColor);