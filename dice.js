const cube = document.querySelector(".cube");
const rollBtn = document.querySelector(".roll-btn");
let currentClass = "";

function getRandomInt(min, max) {
  min = Math.ceil(1);
  max = Math.floor(6);
  return Math.floor(Math.random() * (max - min) + min);
}

function rollDice() {
  const diceAudio = new Audio("./dice.mp3");
  const randNum = getRandomInt(1, 7);
  const showClass = "show-" + randNum;
  if (currentClass) {
    cube.classList.remove(currentClass);
  }
  cube.classList.add(showClass);
  currentClass = showClass;
  diceAudio.play();
}

rollBtn.addEventListener("click", rollDice);
