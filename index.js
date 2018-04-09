var Word = require("./word.js");
var inquirer = require("inquirer");
var fs = require("fs");


var randomPhrase;
fs.readFile('./phrases.txt', 'utf8', function (err, data) { //read phrases from file and choose one for game
    if (err) throw err;
    var allPhrases = data.split(",\r\n");
    var randomIndex = Math.floor(Math.random() * (allPhrases.length-1));
    randomPhrase = allPhrases[randomIndex];
    randomPhrase = randomPhrase.toLowerCase();
  });

   


var myword = new Word("test word hello everyone");


function startWithOptions(){
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
startWithOptions()//Works upon execution


function playGame() {

    console.clear();
    myword.charArray()
    var x = myword.showWord() //this runs for the first time to show dashes
    console.log(x)

    inquirer.prompt([
        {
            name: "guess",
            message: "Guess a letter"
        }
    ])
        .then(function (answer) {
            myword.checkChar(answer.guess);
            var x = myword.showWord()
            console.log(x)
        })
}

function addPhrase (){
    inquirer.prompt([
        {
            name: "phrase",
            message: "add new phrase to the game (no special characters, plaese)",
            validate: function(input){
                if(/^[a-zA-Z0-9\s]*$/.test(input) === false){ // checks for any special character
                    return false;
                }else {
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