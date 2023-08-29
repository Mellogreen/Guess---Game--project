'use strict';

/*console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🥳 correct Nmunber!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

const messageDispaly = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    messageDispaly('⛔ choose a number');
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
  }
  // -------------Refactoring the--------------------
  else if (guess !== secretNumber) {
    if (score > 1) {
      messageDispaly(
        guess > secretNumber ? '📈 Guess too high' : '📉Guess too low'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      messageDispaly('☹️ You lost');
    }
  }

  // ---------------code before refoctoring------------

  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Guess too high';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '☹️ You lost';
  //   }
  // }
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉Guess too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '☹️ You lost';
  //   }
  // }
});
document.querySelector('.again').addEventListener('click', function () {
  messageDispaly('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = ' #222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
