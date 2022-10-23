'use strict';

//creating the secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// texting page

// document.querySelector('.between').textContent = secretNumber;

// variable creation page

let score = 20;

let highscore = 0;

// creatin a function to hold the repeated value

function messageRep(message, score) {
  document.querySelector('.message').textContent = message;
  document.querySelector('.score').textContent = score;
}
//Creating the event handler

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);

  // creating the condition for the game to start
  // 1) if the guessNumber is not a value
  if (!guessNumber) {
    messageRep('⛔⛔ No Number');
    // document.querySelector('.message').textContent = '⛔⛔ No Number';
  }
  // 2) the condition when guessNumber === secretNumber
  else if (guessNumber === secretNumber) {
    messageRep('🎉🎉Correct Number😘');
    // document.querySelector('.message').textContent = '🎉🎉Correct Number😘';
    //6) chaning the backgound colr once the [player wins]

    document.querySelector('body').style.backgroundColor = 'green';

    //7) converting the gighScore to the score once the player wins

    // document.querySelector('.highscore').textContent = score;

    // 8)Displaying the secretNumber in the question  space when the player wins

    document.querySelector('.number').textContent = secretNumber;

    // 9) creating a condition for retaining the high score
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // Refacturing the commentted out code
  else if (score > 1) {
    guessNumber > secretNumber
      ? // ? (document.querySelector('.message').textContent =

        //     'oops! Number Too High 😪')
        messageRep('oops! Number Too High 😪')
      : messageRep('oops! Number Too Low 😪');
    // : (document.querySelector('.message').textContent =
    //     'oops! Number Too Low 😤');

    score--;
    document.querySelector('.score').textContent = score;
  } else {
    messageRep('You Lost The Game 😭');
    // document.querySelector('.message').textContent = 'You Lost The Game 😭';
    // messageRep('0');
    document.querySelector('.score').textContent = 0;
  }
  //3)when the condition is greater or less than
  // else if (guessNumber > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent =
  //       'oops! Number Too High 😪';
  //     // we are decreasing the score value once the guess number is not true
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lost The Game 😭';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //   //4)when the condition is greater or less than
  // }
  // else if (guessNumber < secretNumber) {
  //   //adding a statement condition for numbers less than 1
  //   if (score > 1) {
  //     document.querySelector('.message').textContent =
  //       'oops! Number Too Low 😤';

  //     // we are decreasing the score value once the guess number is not true
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lost The Game 😭';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

// creating an addEventListener for [again]

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.between').textContent = secretNumber;
  messageRep('Start Guessing....');
  // document.querySelector('.message').textContent = 'Start Guessing.....';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = 'blue';
  document.querySelector('.number').textContent = '?';
});
