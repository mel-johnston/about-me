'use strict';

let userName = prompt('What is your name?');

alert(`Welcome to my site ${userName}! Here's a little quiz about me. Please answer the following questions with a yes/no or y/n`);

let question1Guess = prompt('Am I a CodeFellows student?').toLowerCase();

if (question1Guess === 'yes' || question1Guess === 'y') {
  // console.log('Correct, I am a Codefellows student!');
  alert('Correct, I am a Codefellows student!');
} else if (question1Guess === 'no' || question1Guess === 'n') {
  // console.log('Sorry, you got it wrong.');
  alert('Sorry, you got it wrong.');
}

let question2Guess = prompt('Do I have previous programming experience?').toLowerCase();

if (question2Guess === 'no' || question2Guess === 'n') {
  // console.log('Correct, I do not have any previous experience.');
  alert('Correct, I do not have any previous experience.');
} else if (question2Guess === 'yes' || question2Guess === 'y') {
  // console.log('Sorry, you got it wrong.');
  alert('Sorry, you got it wrong.');
}

let question3Guess = prompt('Do I live in Texas?').toLowerCase();

if (question3Guess === 'yes' || question3Guess === 'y') {
//  console.log('Yep, I live in Dallas, Texas.');
  alert('Yep, I live in Dallas, Texas.');
} else if (question3Guess === 'no' || question3Guess === 'n') {
  // console.log('Sorry, you got it wrong.');
  alert('Sorry, you got it wrong.');
}

let question4Guess = prompt('Am I using Windows?').toLowerCase();

if (question4Guess === 'yes' || question4Guess === 'y') {
  // console.log('Yes, my computer is Windows 10.');
  alert('Yes, my computer is Windows 10.');
} else if (question4Guess === 'no' || question4Guess === 'n') {
  // console.log('Sorry, you got it wrong.');
  alert('Sorry, you got it wrong.');
}

let question5Guess = prompt('Have I traveled out of the United States?').toLowerCase();

if (question5Guess === 'yes' || question5Guess === 'y') {
  // console.log('Good memory! My fun fact was that I went to Peru when I was a kid and ate guinea pig.');
  alert('Good memory! My fun fact was that I went to Peru when I was a kid and ate guinea pig.');
} else if (question5Guess === 'no' || question5Guess === 'n') {
  // console.log('Sorry, you got it wrong.');
  alert('Sorry, you got it wrong.');
}

alert(`Well, ${userName} thanks for playing! Feel free to have a look around.`);