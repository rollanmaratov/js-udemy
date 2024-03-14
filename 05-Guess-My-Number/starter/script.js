'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '✨ Correct Number!';

// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 20

// console.log(document.querySelector('.guess').value)

const randomNum = Math.floor(Math.random() * 20);
console.log(randomNum);
let score = 20;

document.querySelector('.check').addEventListener('click', () => {
  const guess = document.querySelector('.guess').value;
  if (!guess) {
    document.querySelector('.message').textContent = '😵‍💫 Enter a number!';
  } else if (guess == randomNum) {
    document.querySelector('.message').textContent = '🎉 Guessed correctly!';
    document.querySelector('.number').textContent = randomNum;
  } else if (guess > randomNum) {
    if (score > 0) {
        document.querySelector('.message').textContent = '📈 Too high. Try Again';
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = '🤭 You lost the game';
    }
  } else {
    document.querySelector('.message').textContent = '📉 Too low. Try Again';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
