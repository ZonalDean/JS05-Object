

let user = {}
let user2 = {age:23}

function objectIsClear(object) {
    if (Object.keys(object).length === 0) {
        console.log('Object Empty');
    } else {
        console.log('Object not empty')
    }
}

objectIsClear(user);
objectIsClear(user2)