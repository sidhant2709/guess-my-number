'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = localStorage.getItem('highscore');
console.log(secretNumber);

window.onload = e => {
  if (localStorage.getItem('highscore') === null) {
    document.querySelector('.highscore').textContent = 0;
  } else {
    document.querySelector('.highscore').textContent =
      localStorage.getItem('highscore');
  }
};

const game = function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      localStorage.setItem('highscore', score);
      document.querySelector('.highscore').textContent =
        localStorage.getItem('highscore');
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
    }
  }
};

document.querySelector('.check').addEventListener('click', game);

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);

  if (localStorage.getItem('highscore') === null) {
    document.querySelector('.highscore').textContent = 0;
  } else {
    document.querySelector('.highscore').textContent =
      localStorage.getItem('highscore');
  }

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
