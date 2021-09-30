'use strict';

let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// display Message functin
let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// change the width of the number box when guess correct and when Again button is clicked
let changeNumberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // if no guess has been entered
  if (!guess) {
    displayMessage('Enter A Number');
  } // if guess is correct
  else if (guess === secretNumber) {
    displayMessage('Correct Guess');
    document.querySelector('body').style.backgroundColor = '#60b347';
    changeNumberWidth('35rem');
    // to keep the high score and displayed
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too High' : 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost The Game');
      document.querySelector('.score').textContent = 0;
    }
  }

  // check button event
});

// The RESET Button Again
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.number').textContent = secretNumber;

  displayMessage('Start Guessing...');
  document.querySelector('.highscore').textContent = highScore;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  changeNumberWidth('15rem');
});
