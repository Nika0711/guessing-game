class GuessingGame {
    constructor(min, max) {}

    setRange(min, max) {
   this.min = min;
   this.max = max;
    }

    guess() {
    return Math.round((this.max + this.min)/2);
    }

    lower() {
    return Math.round((this.max + this.min)/2);
    
    }

    greater() {
    return Math.round((this.max + this.min)/2);
    }
}

module.exports = GuessingGame;
