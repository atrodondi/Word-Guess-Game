var words = [
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
  "Chinatown",
  "Z"
];
var wins = 0;
var guessesLeft = 15;
var lettersGuessed = [""];
var currentWord = words[Math.floor(Math.random() * words.length)];
console.log(currentWord);

document.onkeypress = function(event) {
  var letter = event.key.toLowerCase();
  console.log(letter);
  //   getting the letter pressed

  for (i = 0; i < currentWord.length; i++) {
    if (currentWord[i] != letter) {
      if (lettersGuessed.includes(letter)) {
        return;
      }
      lettersGuessed.push(letter);
      console.log(lettersGuessed);
    }

    //   if ( [currentWord].includes(letter) ){
    //       document.getElementById("currentword").innerHTML
    //   }

    //   }
  }
};
