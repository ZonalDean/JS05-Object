let result = {};
while (1) {
    let key = prompt('enter key');
    if (key === ('stop')) {
        break
    }
    let value = prompt('enter value')
    if (key === ('stop')) {
        break
    }
    if (value > 1) {
        result[key + 's'] = value
    } else {
        result[key] = value
    }
    result[key] = value
}

console.log(result)
