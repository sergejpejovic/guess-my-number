const btnAgain = document.querySelector(".btn-again");
const btnCheck = document.querySelector(".btn-check");
const number = document.querySelector(".number");
const guess = document.querySelector(".guess");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");

let randomNumber = Math.round(Math.random() * 19) + 1;
let tryNumbers = 20;
let bestScore = 0;

btnCheck.addEventListener("click", function () {
  const value = Number(guess.value);

  if (value >= 1 && value <= 20) {
    if (value != randomNumber) {
      if (tryNumbers > 1) {
        tryNumbers--;
        score.textContent = tryNumbers;
        message.innerHTML = "You guessed wrong try again!";
      } else {
        message.innerHTML = "You lost! ";
        score.textContent = 0;
        document.querySelector("body").style.backgroundColor = "red";
      }
    } else {
      message.innerHTML = "You won!";
      number.innerHTML = randomNumber;
      document.querySelector("body").style.backgroundColor = "green";
      if (tryNumbers > bestScore) {
        bestScore = tryNumbers;
        highscore.textContent = bestScore;
      }
    }
  } else message.innerHTML = "Please enter valid number! ";
});

btnAgain.addEventListener("click", function () {
  randomNumber = Math.round(Math.random() * 19) + 1;
  message.innerHTML = "Start guessing...";
  number.innerHTML = randomNumber;
  tryNumbers = 20;
  score.textContent = tryNumbers;
  guess.value = "";
  number.innerHTML = "?";

  document.querySelector("body").style.backgroundColor = "#222";
});
