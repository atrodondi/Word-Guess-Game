var words = [
  "traffic",
  "memento",
  "magnolia",
  "monster",
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
  "jaws",
  "chinatown",
  "eraserhead",
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
var usedLetter = document.getElementById("guessed");
console.log(currentWord);
console.log(currentWord.length);

var display = [];
for (var i = 0; i < currentWord.length; i++) {
  display.push(" _ ");
  var displayString = display.join("");
  wordText.textContent = displayString;
}

// declaring variables

document.onkeypress = function(event) {
  var letter = event.key.toLowerCase();
  console.log(letter);

  // THE GAME HAS STARTED NOW

  // if the guess (letter) is in our random word, then....
  if (currentWord.indexOf(letter) > -1) {
    console.log("correct guess");
    console.log(currentWord.indexOf(letter));
    console.log(currentWord.lastIndexOf(letter));
    var x = currentWord.indexOf(letter);
    var y = currentWord.lastIndexOf(letter);
    console.log(x);
    console.log(y);

    for (var i = 0; i < currentWord.length; i++) {
      if (currentWord[i] == letter) {
        display[i] = currentWord[i];
      }
    }

    console.log(display);
    displayString = display.join("");
    wordText.textContent = displayString;
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
