const myMap = new Map();

myMap.set('name', 'John');
myMap.set('1', 'blue');
myMap.set('2', 'red');

console.log(myMap.get('name'));
console.log(myMap.get('1'));
console.log(myMap.get('2'));
console.log(myMap.size);
console.log(myMap.has('1'));
console.log(myMap.has('3'));

myMap.delete('2');

console.log(myMap);

const peopleMap = new Map();
peopleMap.set('Brad', { phone: '555-555-555', email: 'brad@mail.com' });
peopleMap.set('Jack', { phone: '444-444-444', email: 'jack@mail.com' });
peopleMap.set('Jill', { phone: '333-333-333', email: 'jill@mail.com' });

peopleMap.forEach((person) => console.log(person.email));

console.log(peopleMap.keys());
// const [brad, ...rest] = peopleMap.keys();
console.log(peopleMap.values());
const [phone] = Array.from(peopleMap.values());

console.log(peopleMap.values());
console.log(peopleMap.entries());

const iterator = peopleMap.values();
console.log(iterator.next());

const peopleArray = Array.from(peopleMap);
console.log(peopleArray);
