let calculator = {
    x: 0,
    y: 0,
    read() {
        this.x = prompt('put in the first number')
        this.y = prompt('put in the second number')
    },
    sum() {
        return Number(this.x) + Number(this.y);
    },
    mul() {
        return this.x * this.y
    }
}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());