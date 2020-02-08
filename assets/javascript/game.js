var words = [
  "traffic",
  "memento",
  "magnolia",
  "monster",
  "trainspotting",
  "fargo",
  "batman",
  "inception",
  "platoon",
  "ratatouille",
  "superman",
  "dogma",
  "arrival",
  "scarface",
  "aliens",
  "halloween",
  "eraserhead",
  "jaws",
  "chinatown",
  "z"
];
var wins = 0;
var guessesLeft = 15;
var lettersGuessed = [];
var currentWord = words[Math.floor(Math.random() * words.length)];
var winsText = document.getElementById("Wins");
var guessesText = document.getElementById("Guesses");
var headerText = document.getElementById("header");
var wordText = document.getElementById("currentword");
var x;
var display;
var usedLetter = document.getElementById("guessed");
var badguess;
console.log(currentWord);
console.log(currentWord.length);

window.onload = function() {
  display = "";
  for (var i = 0; i < currentWord.length; i++) {
    display = display + " _ ";
    wordText.textContent = display;
  }
};

// declaring variables

document.onkeypress = function(event) {
  var letter = event.key.toLowerCase();
  console.log(letter);

  // THE GAME HAS STARTED NOW

  // if the guess (letter) is in our random word, then....
  if (currentWord.indexOf(letter) > -1) {
    console.log("correct guess");
    console.log(display);
    console.log(currentWord.indexOf(letter));
    var x = currentWord.indexOf(letter);
    display[x] = letter;
    console.log(display[x]);
  } else {
    console.log("wrong guess");
  }

  // console.log(lettersGuessed);
  // console.log(currentWord.length);

  // console.log(letter);
  // for (i = 0; i < currentWord.length; i++) {
  //   if (currentWord[i] === letter) {
  //     if (display.includes(currentWord[i])) {
  //       display.pop(currentWord[i]);
  //     }
  //     display.push(currentWord[i]);
  //   } else {
  //     if (lettersGuessed.includes(letter)) {
  //       lettersGuessed.pop(letter);
  //       lettersGuessed.push(letter);
  //     } else {
  //       lettersGuessed.push(letter);
  //     }
  //   }
  //   usedLetter.textContent = lettersGuessed;
  //   console.log(lettersGuessed);
  // }
};
