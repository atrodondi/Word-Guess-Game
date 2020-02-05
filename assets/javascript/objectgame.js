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
var game = {
  wins: 0,
  guessesLeft: 15
};

var currentword = game.words[Math.floor(Math.random() * words.length)];
//   cant figure out how to make a property in the object refer to another
// property which happens to be an array, maybe start without object
// and see if i can make the game that way first.
