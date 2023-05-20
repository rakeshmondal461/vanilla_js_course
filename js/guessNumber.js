'use strict';

let score = 20;
let highScore = 0;
document.querySelector('.score').textContent = score;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('#checkBtn').addEventListener('click', () => {
  const inputValue = document.querySelector('#numberField').value;
  if (!inputValue) {
    setMessage('⛔ No number');
  } else if (parseInt(inputValue) === secretNumber) {
    setMessage('🎉 Correct Number');
    document.querySelector('body').style.background = '#1caf0c';
    document.querySelector('.number').style.width = '12rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector('.highscore').textContent = highScore;
  } else if (parseInt(inputValue) !== secretNumber) {
    reduceScoreOnWrongGuess(inputValue);
  }
});

function reduceScoreOnWrongGuess(inputValue) {
  setMessage(
    inputValue > secretNumber ? '📈 It is higher.' : '📉 It is lower.'
  );
  if (score > 1) {
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    setMessage('💥 You lost the game.');
    document.querySelector('.score').textContent = 0;
  }
}

const setMessage = (message) => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  setMessage('Start guessing...');
  document.querySelector('#numberField').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.background = '#222';
  document.querySelector('.number').style.width = '8rem';
});
