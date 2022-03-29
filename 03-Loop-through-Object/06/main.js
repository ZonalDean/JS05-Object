let name = prompt('enter name')
let amount = prompt('enter amount')
let price = prompt('enter price')
let discount = prompt('enter discount')

const product = {
    name,
    amount,
    price,
};

if (discount > 0) {
    product.discount = discount
}

console.log(product)

const calcPrice = obj => {
    // if (obj.discount) {
    //     obj.amount * obj.price * (1-obj.discount/100)
    //     // return obj.price * obj.amount - obj.discount / 100 * obj.price * obj.amount
    // } return obj.amount * obj.price

    return obj.price * obj.amount * (1 - (obj.discount || 0 ) / 100)
}

console.log(calcPrice(product))