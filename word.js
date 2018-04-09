var Letter = require('./letter.js'); // letter constructor
var testWord = "test word hello everyone";
var myArray;



function Word (x){
    this.currentWord = x; // saves the word, because why not!!

    this.charArray = function(){ //saves new instatiated objects from Letter constructor to array
        let tempArray = [];
        for (var i = 0; i <x.length; i++){   
            var myLetter = new Letter(x[i]);
            tempArray.push(myLetter)
        };
        return tempArray;
    }

    this.showWord = function(){ // shows guess word from as saperate characters from letter objects
        
        //console.log(myArray)
        var displyWord = "";
        for (var i = 0; i<myArray.length; i++){
            displyWord += myArray[i].show();
        }
        return displyWord; //concatinated letters into words
    }

    this.checkChar = function(x){
        for (var i = 0; i<myArray.length; i++){
            myArray[i].check(x);
            //console.log(myArray[i])  // testing
        }
    }
}

var myword = new Word(testWord);
myArray = myword.charArray()

var x = myword.showWord()
console.log(x)
var myTestChar = "t";
console.log("*******************************************");
myword.checkChar(myTestChar);
var x = myword.showWord()
console.log(x)



// var userInput = process.argv[2];
// var letterA = new Letter("a")
// letterA.check(userInput); //takes user input and checks if character is correct
// letterA.show()