'use strict';

//MANIPULATE CONTENT notes

//querySelector = class, id etc
//.textContet = gets text content of element

/*
console.log(document.querySelector('.message').textContent);

//set .message to
document.querySelector('.message').textContent = '✨ Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

//set .value
document.querySelector('.guess').value = 23;
//.value = read value
console.log(document.querySelector('.guess').value);
*/

//--------------------------

let secretNumber = Math.floor(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
document.querySelector('.score').textContent = score;

//creating a function for all the times we're writing ... 
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
/*
gets button element
listen to event > event handler function
function will be called when the event happens
*/
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // if no guess
  if (!guess) {
    displayMessage('❌ No number!');

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage('✨ Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when guess is different than secretNumber
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'To low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage() = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.removeProperty('background-color');
  document.querySelector('.number').style.removeProperty('width');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
});

/*
if congratulations add && score > to highscore
*/
