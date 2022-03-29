// let key = prompt('enter key')
// if (key !== 'stop') {
//     let value = prompt('enter value')
// } if (value !== 'stop') {
//     while (value !== 'stop' && key !== 'stop') {
// }

// };

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
    result[key] = value
}

console.log(result)