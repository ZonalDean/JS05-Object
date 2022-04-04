function Accumulator(startingValue) {
    this.currentValue = startingValue;
    // this.y = 0;
    this.read = function() {
        this.currentValue += +prompt("put in a number")
        // return Number(this.currentValue) + Number(this.y)
    };
    this.show = function() {
        alert(this.currentValue);
    };
};

let calculator = new Accumulator(5);

calculator.read();
calculator.show();
