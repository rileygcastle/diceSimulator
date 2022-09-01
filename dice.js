var cube = document.querySelector(".cube");
var rollBtn = document.querySelector(".roll-btn");
var currentClass = "";

// const diceAudio = new Audio('./dice.mp3')

function getRandomInt(min, max) {
  min = Math.ceil(1);
  max = Math.floor(6);
  return Math.floor(Math.random() * (max - min) + min);
}

function rollDice() {
  const diceAudio = new Audio("./dice.mp3");
  var randNum = getRandomInt(1, 7);
  console.log(randNum);
  var showClass = "show-" + randNum;
  console.log(showClass);
  if (currentClass) {
    cube.classList.remove(currentClass);
  }
  cube.classList.add(showClass);
  currentClass = showClass;
  diceAudio.play();
}
rollDice();
rollBtn.addEventListener("click", rollDice);
