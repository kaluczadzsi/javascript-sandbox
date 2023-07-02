const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

const cart = [
  { id: 1, name: 'Product 1', price: 130 },
  { id: 2, name: 'Product 2', price: 170 },
  { id: 3, name: 'Product 3', price: 200 },
];

const total = cart.reduce((accumulator, value) => accumulator + value.price, 0);
console.log(total);
