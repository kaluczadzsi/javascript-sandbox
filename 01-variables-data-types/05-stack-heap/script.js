// Values are stored on stack
const name = 'John';
const age = 30;

// Reference values are stored on the heap
const person = {
  name: 'Brad',
  age: 40,
};

let newName = name;
newName = 'Johnathan';
console.log(name, newName);

let newPerson = person;
console.log(person, newPerson);

newPerson.name = 'Bradley';
console.log(person, newPerson);
