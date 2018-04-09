//var userInput = process.argv[2];

module.exports = function (character) {
    this.char = character;
    this.guessed = false;
    this.show = function () {
        if (this.guessed || this.char === " ") {//return dash if guessed is false and return letter if guessed is true or nbsp
            this.guessed = true; // only useful for nbsp
            return this.char;
        } else {
            return "-"
        }
    }
    this.check = function (x) {
        if (this.char === x) { //check against user input
            this.guessed = true;
        };
    }
}

