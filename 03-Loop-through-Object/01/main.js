let salaries = {
    // John: 100,
    // Ann: 160,
    // Pete: 130
  };

function sumSalary(object) {

    let total = 0;
    for (let value in object) {
        if (value === undefined) {
            total = 0;
        } else {
            total += object[value];
        }
    } return console.log(total);
}

sumSalary(salaries);