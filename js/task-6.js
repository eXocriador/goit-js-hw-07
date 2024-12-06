function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input[type="number"]');
const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');


create.addEventListener('click', createMarkup);
destroy.addEventListener('click', () => { boxes.innerHTML = ""; input.value=""});

function createMarkup() {
  const amount = input.value;
  if (+amount < 0 || +amount > 10) {
    return;
  }
  createBoxes(+amount);
};

function createBoxes(amount) {
  boxes.innerHTML = "";
  const defaultSize = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${defaultSize + i * 10 }px`;
    box.style.height = `${defaultSize + i * 10 }px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.append(box);
  }
}