var game = {
  wins: 0,
  guessesLeft: 15,
  winText: document.getElementById("Wins"),
  guessesText: document.getElementById("Guesses"),
  wordText: document.getElementById("currentword"),
  guessedLetters: [],
  display: [],
  words: [
    "Traffic",
    "Memento",
    "Magnolia",
    "Monster",
    "Trainspotting",
    "Fargo",
    "Batman",
    "Inception",
    "Platoon",
    "Ratatouille",
    "Superman",
    "Dogma",
    "Arrival",
    "Scarface",
    "Aliens",
    "Halloween",
    "Eraserhead",
    "Jaws",
    "Chinatown"
  ]
};
var word = game.words[Math.floor(Math.random() * game.words.length)];
//   cant figure out how to make a property in the object refer to another
// property which happens to be an array, maybe start without object
// and see if i can make the game that way first.

console.log(game.words);
console.log(word);
console.log(game.guessesLeft);

for (i = 0; i < word.length; i++) {
  game.display.push(word[i]);
}
console.log(game.display);
game.wordText.textContent = game.display.join(" - ");

// onkeypress --GAME STARTS HERE I GUESS
document.onkeypress = function(event) {
  var guess = event.key.toLowerCase();

  console.log(guess);
  for (i = 0; i < word.length; i++) {
    if (guess === word[i]) {
      var goodGuess = true;
    } else {
      var badGuess = true;
    }
  }
  if ((badGuess = true)) {if ()};
    
  
    game.guessedLetters.push(guess);
  }
  console.log(game.guessedLetters);

  // if (guess === word[i]) {
  //   game.display[i].push(guess);
  //   console.log(game.display);
};
