const state1 = { username: 'john', point: 100, loading: true };
const stateTrans = {loading: false, point: 75}
const state2 = {success: true};

Object.assign(state2, state1, stateTrans);

console.log(state2);