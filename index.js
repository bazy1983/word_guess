var Word = require("./word.js");
var inquirer = require("inquirer");

var myword = new Word("test word hello everyone");

myword.charArray()
var x = myword.showWord() //this runs for the first time to show dashes
console.log(x)

inquirer.prompt([
    {
        name: "guess",
        message: "Guess a letter"
    }
])
.then(function(answer){
    myword.checkChar(answer.guess);
    var x = myword.showWord()
    console.log(x)
})





// char = "t"
// function myGuess (char){
//     myword.checkChar(char);
//     var x = myword.showWord()
//     console.log(x)
// }

// myGuess(char)