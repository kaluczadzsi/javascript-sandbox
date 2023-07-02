// function add(a, b) {
//   return a + b;
// }

// console.log(add(1, 2));

const add = (a, b) => a + b;

const subtract = (a, b) => {
  return a - b;
};

const double = (a) => a * 2;

// prettier-ignore
const double2 = a => a * 2;

// Returning an object
const createObj = () => ({
  name: 'Brad',
});

const numbers = [1, 2, 3, 4, 5];

// prettier-ignore
numbers.forEach(n => console.log(n));

console.log(add(1, 2));
console.log(subtract(1, 2));
console.log(double2(12));
console.log(createObj());
