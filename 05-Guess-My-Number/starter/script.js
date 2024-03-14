'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '✨ Correct Number!';

// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 20

// console.log(document.querySelector('.guess').value)

const randomNum = Math.floor(Math.random() * 20);
console.log(randomNum);
let score = 20;
let highschore;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', () => {
  const guess = document.querySelector('.guess').value;

  //when there is no input
  if (!guess) {
    displayMessage('😵‍💫 Enter a number!');

    // when player wins
  } else if (guess == randomNum) {
    displayMessage('🎉 Guessed correctly!');
    document.querySelector('.number').textContent = randomNum;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (!highschore) highschore = score;
    else if (score > highschore) {
      highschore = score;
    }
    document.querySelector('.highscore').textContent = highschore;

    // guess incorrect
  } else {
    if (score > 1) {
      displayMessage(
        guess > randomNum ? '📈 Too high. Try Again' : '📉 Too low. Try Again'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      score--;
      displayMessage('🤭 You lost the game');
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  randomNum = Math.floor(Math.random() * 20);
});
