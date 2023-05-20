'use strict';

let score = 20;
document.querySelector('.score').textContent = score;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('#checkBtn').addEventListener('click', () => {
  const inputValue = document.querySelector('#numberField').value;
  if (!inputValue) {
    document.querySelector('.message').textContent = '⛔ No number';
  } else if (parseInt(inputValue) === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
    document.querySelector('body').style.background = '#1caf0c';
    document.querySelector('.number').style.width = '12rem';
    document.querySelector('.number').textContent = secretNumber;
  } else if (inputValue > secretNumber) {
    document.querySelector('.message').textContent = '📈 It is higher.';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game.';
      document.querySelector('.score').textContent = 0;
    }
  } else if (inputValue < secretNumber) {
    document.querySelector('.message').textContent = '📉 It is lower.';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game.';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('#numberField').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.background = '#222';
  document.querySelector('.number').style.width = '8rem';

  console.log('clicked on again button');
});
