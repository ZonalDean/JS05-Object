let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
  };

// function multiplyNumeric(obj,num) {
//     for (value in obj) {
//         if (typeof(value) === 'number') {
//             value = value * num;
//         } else {
//             value += 0;
//         }
//     } return console.log(obj);
// }

// multiplyNumeric(menu,3);

const multiplyNumeric = (obj,num) => {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] = num * obj[key]
        }
    }
    return obj;
};

console.log(multiplyNumeric(menu,3))