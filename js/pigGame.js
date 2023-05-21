'use strict';

// SELECTING ELEMENTS
const score0EL = document.querySelector('#score--0');
const score1EL = document.querySelector('#score--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
// STARTING CONDITIONS

let scores, currentScore, currentActivePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  currentActivePlayer = 0;
  playing = true;

  score0EL.textContent = 0;
  score1EL.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;

  diceEL.classList.add('hidden');
  player0EL.classList.remove('player--winner');
  player1EL.classList.remove('player--winner');
  player0EL.classList.add('player--active');
  player1EL.classList.remove('player--active');
};
init();

// ROLLING DICE FUNCTIONALITY

btnRoll.addEventListener('click', () => {
  if (playing) {
    let diceNumber = Math.trunc(Math.random() * 6) + 1;
    diceEL.classList.remove('hidden');
    diceEL.src = `../img/dice-${diceNumber}.png`;

    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.getElementById(`current--${currentActivePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

const switchPlayer = () => {
  currentScore = 0;
  document.getElementById(`current--${currentActivePlayer}`).textContent = 0;
  currentActivePlayer = currentActivePlayer === 0 ? 1 : 0;
  player1EL.classList.toggle('player--active');
  player0EL.classList.toggle('player--active');
};

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[currentActivePlayer] += currentScore;
    document.getElementById(`score--${currentActivePlayer}`).textContent =
      scores[currentActivePlayer];
    if (scores[currentActivePlayer] >= 100) {
      playing = false;
      diceEL.classList.add('hidden');
      document
        .querySelector(`.player--${currentActivePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${currentActivePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
