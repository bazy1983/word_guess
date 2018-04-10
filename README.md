# word_guess

* Word Guess is CLI node application that utilizes many javascript and node technologies.
* The app uses constructors and exporting modules to work.
- Letter constructor is used to create character objects that have unique properties and methods to hide and show characters when user guess that character.
- Word constructor takes a word or phrase and relies on letter constructor to display either dashes or letters.
- I used node modules like fs module to read phrase.txt file and get one phrase to use in the game. also used it to write new phrases to the game and increase it's phrase bank.
- I used inquirer node module to display options and take user inputs for various parts of the game.
* 