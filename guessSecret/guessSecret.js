const guessSecret = {
    tries: 3,

    createSecret: function (val) {
        this.secret = val;
    },

    try: function (val) {
        if (this.secret === undefined) {
            console.log("I have no secrets");
        } else if (this.secret !== val && this.tries !== 0) {
            this.tries = this.tries - 1;
            console.log("You guessed wrong. Tries: " + this.tries + " left.");
        } else if (this.secret === val && this.tries !== 0) {
            console.log("The secret has been revealed!");
        }else if (this.tries === 0) {
            console.log("Sorry, no guesses left. The secret can never be revealed.");
        }
    }
};

module.exports = guessSecret;