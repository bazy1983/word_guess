var Word = require("./word.js")

var testWord = "test word hello everyone";
var myArray;

var myword = new Word(testWord);

myword.charArray()


var x = myword.showWord()
console.log(x)
var myTestChar = "t";
console.log("*******************************************");
myword.checkChar(myTestChar);
var x = myword.showWord()
console.log(x)

var myTestChar = "e";
console.log("*******************************************");
myword.checkChar(myTestChar);
var x = myword.showWord()
console.log(x)