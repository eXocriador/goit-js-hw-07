const input = document.querySelector("#name-input");
const userName = document.querySelector("#name-output");
const update = () => userName.textContent = input.value.trim() || "Anonymous";
input.addEventListener("input", update);