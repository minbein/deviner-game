const randomNumber = Math.floor(Math.random() * 100) + 1;

const guessField = document.getElementById("guessField");
const guessSubmit = document.getElementById("guessSubmit");
const message = document.querySelector(".message");
const scoreDisplay = document.querySelector(".score");

let attempts = 0;
let gameOver = false;
let score = 0;

function checkGuess() {
  if (gameOver) {
    return;
  }

  const userGuess = parseInt(guessField.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = "Digite um número válido entre 1 e 100.";
    return;
  }

  attempts++;

  if (userGuess === randomNumber) {
    message.textContent = `Parabéns! Você acertou o número em ${attempts} tentativas.`;
    gameOver = true;
    score++;
    saveScore();
    displayScore();
  } else if (userGuess < randomNumber) {
    message.textContent = "Tente um número maior.";
  } else {
    message.textContent = "Tente um número menor.";
  }

  guessField.value = "";
  guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function saveScore() {
  localStorage.setItem("score", score);
}

function displayScore() {
  scoreDisplay.textContent = `Pontuação: ${score}`;
}

if (localStorage.getItem("score")) {
  score = parseInt(localStorage.getItem("score"));
  displayScore();
}
