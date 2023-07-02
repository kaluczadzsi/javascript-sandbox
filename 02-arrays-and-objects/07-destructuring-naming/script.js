const firstName = 'John';
const lastName = 'Doe';
const age = 30;

// const person = {
//   firstName: firstName,
//   lastName: lastName,
//   age: age,
// };

const person = {
  firstName,
  lastName,
  age,
};

// console.log(person.age);

// Destructuring

const todo = {
  id: 1,
  title: 'Take out trash',
  user: {
    name: 'John',
  },
};

// Destructure objects
const {
  id: todoId,
  title,
  user: { name: userName },
} = todo;

// console.log(todoId, userName);

// Destructure arrays
const numbers = [23, 67, 33, 49];

const [first, second, ...rest] = numbers;
console.log(first, second, rest);
