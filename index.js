var Word = require("./word.js");
var inquirer = require("inquirer");
var fs = require("fs");


var randomPhrase;
fs.readFile('./phrases.txt', 'utf8', function (err, data) { //read phrases from file and choose one for game
    if (err) throw err;
    var allPhrases = data.split(",\r\n");
    var randomIndex = Math.floor(Math.random() * (allPhrases.length-1));
    console.log(randomIndex)
    randomPhrase = allPhrases[randomIndex];
    randomPhrase = randomPhrase.toLowerCase();
  });

  var x = "this is text";
  for (i=0; i<x.length; i++){
      
      if (x[i].indexOf("e") === -1){
          console.log("bad");
      }else {
          console.log("good")
      }
  }


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
//startWithOptions()//Works upon execution


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
            // validate: function(input){
            //     for (i = 0; i<input.length; i++){
            //         if("this is text".indexOf())
            //     }
            // }
        }
    ])
        .then(function (answer) {
            var newInput = answer.phrase + ",\r\n"
            fs.appendFile('./phrases.txt', newInput, (err) => {
                if (err) throw err;
                console.log('Added New phrase, Thank you!');
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