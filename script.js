'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = '212';

document.querySelector('.guess').value = '42';
console.log(document.querySelector('.guess').value);

*/

// DRY CODE UPDATE - Refactor repetative code into functions

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const displayNumber = prop => {
  document.querySelector('.number').textContent = prop;
};

const displayScore = prop => {
  document.querySelector('.score').textContent = prop;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  //When there is no valid input
  if (!guess) {
    // document.querySelector('.message').textContent = 'Invalid Number';
    displayMessage('Invalid Number');

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number YOU WIN!!';
    displayMessage('Correct Number YOU WIN!');
    // document.querySelector('.number').textContent = secretNumber;
    displayNumber(secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //When guess wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? 'Too High!' : 'Too Low';
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low');
      score--;
      // document.querySelector('.score').textContent = score;
      displayScore(score);
    } else {
      // document.querySelector('.message').textContent = 'YOU LOSE!';
      displayMessage('YOU LOSE!');
      // document.querySelector('.score').textContent = 0;
      displayScore(0);
      document.querySelector('body').style.backgroundColor = '#FF0000';
    }
  }
  // When guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'YOU LOSE!';
  //     document.querySelector('.score').textContent = score - 1;
  //     document.querySelector('body').style.backgroundColor = '#FF0000';
  //   }
  //   // When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'YOU LOSE!';
  //     document.querySelector('.score').textContent = score - 1;
  //     document.querySelector('body').style.backgroundColor = '#FF0000';
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.number').textContent = '?';
  displayNumber('?');
  document.querySelector('.guess').value = '';
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start Guessing ...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  // document.querySelector('.score').textContent = 20;
  displayScore(20);
});
