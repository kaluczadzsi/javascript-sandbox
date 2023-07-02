let x;
const person = {
  name: 'John Doe',
  age: 30,
  isAdmin: true,
  address: {
    street: '123 Main st',
    city: 'Boston',
    state: 'MA',
  },
  hobbies: ['music', 'sports'],
};

x = person.name;
x = person['age'];
x = person.address.state;
x = person;

x = person.name = 'Jane Doe';
person['isAdmin'] = false;
x = person;

delete person.age;

person.hasChildren = true;

person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

console.log(x);
