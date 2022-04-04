let calculator = {
    // x: 0, // these are not required as this.x is equal to x: same for y
    // y: 0,
    read() {
        this.x = +prompt('put in the first number')
        this.y = +prompt('put in the second number')
    },
    sum() {
        return this.x + this.y;
    },
    mul() {
        return this.x * this.y
    }
}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());