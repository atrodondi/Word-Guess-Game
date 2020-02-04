var hangman = {
  wins: 0,
  currentWord: words[Math.floor(Math.random() * words.length)],
  guessremaining: 15,
  lettersguessed: [],
  words: []
};
