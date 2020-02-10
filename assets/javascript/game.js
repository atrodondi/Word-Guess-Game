var words = [
  "traffic",
  "trainspotting",
  "frozen",
  "swordfish",
  "heat",
  "hackers",
  "dracula",
  "godzilla",
  "cliffhanger",
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
  "z",
  "clue",
  "her",
  "transformers",
  "braveheart"
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
function generate() {
  for (var i = 0; i < currentWord.length; i++) {
    display.push(" _ ");
    var displayString = display.join("");
    wordText.textContent = displayString;
  }
}
generate();

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

    // right below is the WinCons and what happens
    if (displayString == currentWord) {
      setTimeout(function() {
        wins++;
        winsText.textContent = wins;
        var playAgain = confirm("YOU WIN!! Play again?");
        display = [];
        currentWord = words[Math.floor(Math.random() * words.length)];
        usedLetter.textContent = "";
        lettersGuessed = [];
        generate(playAgain);
        console.log(currentWord);
        guessesLeft = 15;
        guessesText.textContent = guessesLeft;
        // cant use reload, i need wins to stay, need teo restart function
        // location.reload(playAgain);
      }, 400);
    }
  } else {
    console.log("wrong guess");
    if (lettersGuessed.includes(letter)) {
      alert("you already guessed that one");
    } else {
      lettersGuessed.push(letter);
      usedLetter.append(letter);
      // lose conditions below here
      if (guessesLeft == 0) {
        var x = alert(" you lose!");
        usedLetter.textContent = "";
        lettersGuessed = [];
        guessesLeft = 15;
        guessesText.textContent = guessesLeft;
        display = [];
        currentWord = words[Math.floor(Math.random() * words.length)];
        generate(x);
      } else {
        guessesLeft--;
      }
    }
  }

  guessesText.textContent = guessesLeft;
};
