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
var display = [];
var x;
console.log(currentWord);
console.log(currentWord.length);
// declaring variables

document.onkeypress = function(event) {
  var letter = event.key.toLowerCase();
  console.log(letter);
  //   getting the letter pressed
  for (var i = 0; i < currentWord.length; i++) {
    display[i] = " - ";
    console.log(display);
  }
  // creating an array to display the empty spaces at start to user
  x = display.join(" ");
  // googled how to turn it into a string without commas,
  wordText.textContent = x;
  headerText.textContent =
    "The Game has started! Guess the One Word Movie Title!";
  // THE GAME HAS STARTED NOW
  console.log(currentWord);
  console.log(lettersGuessed);
  console.log(currentWord.length);
  console.log(currentWord[0]);
  console.log(letter);
  for (i = 0; i < currentWord.length; i++) {
    if (currentWord[i] != letter) {
      var badguess = true;
      if (badguess === true) {
        lettersGuessed.push(letter);
      }
      console.log(lettersGuessed);
    }
  }
};
