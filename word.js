var Letter = require('./letter.js'); // letter constructor


var myArray;
module.exports = function (x){
    this.currentWord = x; // saves the word, because why not!!

    this.charArray = function(){ //saves new instatiated objects from Letter constructor to array
        let tempArray = [];
        for (var i = 0; i <x.length; i++){   
            var myLetter = new Letter(x[i]);
            tempArray.push(myLetter)
        };
        myArray = tempArray;
    }

    this.showWord = function(a){ // shows guess word from as saperate characters from letter objects
        var displyWord = "";
        for (var i = 0; i<myArray.length; i++){
            displyWord += myArray[i].show();
        }
        return displyWord; //concatinated letters into words
    }

    this.checkChar = function(x){
        for (var i = 0; i<myArray.length; i++){
            myArray[i].check(x);
            
        }
    }
}


