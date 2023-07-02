// Loop through arrays
const items = ['book', 'table', 'chair', 'kite'];
const users = [{ name: 'Brad' }, { name: 'Kate' }, { name: 'Steve' }];

// for (const i of items) {
//   console.log(i);
// }

// for (const user of users) {
//   console.log(user);
// }

// Loop over strings
// const str = 'Hello World';

// for (const letter of str) {
//   console.log(letter);
// }

// Loop over Maps
const map = new Map([
  ['name', 'john'],
  ['age', '30'],
]);

for (const [key, value] of map) {
  console.log(key, value);
}
