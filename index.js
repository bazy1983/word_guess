console.clear();
var Word = require("./word.js");
var inquirer = require("inquirer");
var fs = require("fs");

var WordBeforeLastChange;
var randomPhrase;
var chances;
fs.readFile('./phrases.txt', 'utf8', function (err, data) { //read phrases from file and choose one for game
    if (err) throw err;
    myData = data;
    var allPhrases = data.split(",\r\n");
    var randomIndex = Math.floor(Math.random() * (allPhrases.length - 1));
    randomPhrase = allPhrases[randomIndex];
    randomPhrase = randomPhrase.toLowerCase();
});

var myword
function startWithOptions() {
    myword = new Word("test word hello everyone");
    chances = 7;
    inquirer.prompt([
        {
            type: "list",
            name: "options",
            choices: ["Play", "Add a phrase", "Quit"],
            message: "What do you want to do?"
        }
    ]).then(function (answer) {
        switch (answer.options) {
            case "Play":
                console.clear();
                myword.charArray()
                var x = myword.showWord() //this runs for the first time to show dashes
                WordBeforeLastChange = x;
                console.log(x)
                console.log("Attempts: " + chances);
                playGame()
                break;

            case "Add a phrase":
                addPhrase()
                break;

            default:
                process.exit();
        }
    })
}
startWithOptions()//starts the game


function playGame() {

    inquirer.prompt([
        {
            name: "guess",
            message: "Guess a letter"
        }
    ])
        .then(function (answer) {
            console.clear();
            myword.checkChar(answer.guess);
            var x = myword.showWord();
            console.log(x);
            console.log("Attempts: " + chances);

            if (x === WordBeforeLastChange) {
                chances--;
                console.clear();
                console.log(x);
                console.log("Attempts: " + chances);
                if (chances == 0) {
                    console.log("oops!")
                    process.exit();
                }
                WordBeforeLastChange = x;
                playGame();
            } else if (x === "test word hello everyone") {
                console.log("horray!")
                process.exit();
            } else {
                playGame();
            }
        })
}

function addPhrase() {
    inquirer.prompt([
        {
            name: "phrase",
            message: "add new phrase to the game (no special characters, plaese)",
            validate: function (input) {
                if (/^[a-zA-Z0-9\s]*$/.test(input) === false) { // checks for any special character
                    return false;
                } else {
                    return true;
                }
            }
        }
    ])
        .then(function (answer) {
            var newInput = answer.phrase + ",\r\n"
            fs.appendFile('./phrases.txt', newInput, (err) => {
                if (err) throw err;
                console.log('Added New phrase, Thank you!');
                startWithOptions()
            });
        })
}




// char = "t"
// function myGuess (char){
//     myword.checkChar(char);
//     var x = myword.showWord()
//     console.log(x)
// }

// myGuess(char)