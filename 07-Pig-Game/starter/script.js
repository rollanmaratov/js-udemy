'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const btnRollDice = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let currentScore = 0;
let activePlayer = 0;
let isGameFinished = false;

// scores of p0 and p1
const scores = [0, 0];

function changePlayers() {
  currentScore = 0;
  document.getElementById(
    `current--${activePlayer}`
  ).textContent = currentScore;
  activePlayer = !activePlayer ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}
function rollDice() {
  if (!isGameFinished) {
    // generate new dice
    const diceRollValue = Math.ceil(Math.random() * 6);
    console.log(diceRollValue);

    // display dice
    diceEl.src = `dice-${diceRollValue}.png`;

    // show dice for first roll
    if (diceEl.classList.contains('hidden')) diceEl.classList.remove('hidden');

    // Change Players
    if (diceRollValue == 1) {
      changePlayers();

      // Add Current Score to active player
    } else {
      currentScore += diceRollValue;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    }
  }
}

function hold() {
  if (!isGameFinished) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 20) {
      // YOU WON
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      isGameFinished = true;
      console.log(isGameFinished, 'expected: true - game finished');
      diceEl.classList.add('hidden');
    } else changePlayers();
  }
}

function startNewGame() {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  isGameFinished = false;
  diceEl.classList.add('hidden');
  activePlayer = 0;
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  currentScore = 0;
  scores[0] = 0;
  scores[1] = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
}

btnRollDice.addEventListener('click', rollDice);
btnHold.addEventListener('click', hold);
btnNew.addEventListener('click', startNewGame);
