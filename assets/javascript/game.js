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
    for (var i = 0; i < currentWord.length; i++) {
      if (currentWord[i] == letter) {
        display[i] = currentWord[i];
      }
    }

    console.log(display);
    displayString = display.join("");
    wordText.textContent = displayString;
    if (displayString == currentWord) {
      setTimeout(function() {
        var playAgain = confirm("YOU WIN!! Play again?");
        location.reload(playAgain);
      }, 400);
    }
  } else {
    console.log("wrong guess");
    if (lettersGuessed.includes(letter)) {
      alert("you already guessed that one");
    } else {
      lettersGuessed.push(letter);
      usedLetter.append(letter);
      if (guessesLeft === 0) {
        alert(" you lose!");
      } else {
        guessesLeft--;
      }
    }
  }

  guessesText.textContent = guessesLeft;
  console.log(guessesLeft);
  console.log(guessesText);
};
