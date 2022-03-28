บรรทัดที่มี * , ** , *** ให้ผลลัพธ์เป็นอะไร เพราะอะไร


```js
const product1 = { name: 'Coke', price: 18, size: '500mL' };

const product2 = product1;
product2.name = 'Pepsi';
product2.price = 19;

console.log(product1); // * shows object > keys: value
console.log(product2); // ** shows same as above
console.log(product1 === product2); // *** tru
```