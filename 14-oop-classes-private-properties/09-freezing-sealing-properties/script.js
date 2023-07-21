/* // Sealing - Prevents properties from being added or removed. Can still be changed.

// Freezing - Prevents properties from being added, removed or changed

const rectObj = {
  name: 'Rectangle 1',
  width: 10,
  height: 10,
};

Object.seal(rectObj);

let descriptors = Object.getOwnPropertyDescriptors(rectObj);

console.log(descriptors);

rectObj.color = 'red';
delete rectObj.name;
rectObj.width = 20;

console.log(rectObj);

const circleObj = {
  name: 'Circle 1',
  radius: 30,
};

descriptors = Object.getOwnPropertyDescriptors(circleObj);
console.log(descriptors);

circleObj.color = 'blue';
circleObj.name = 'New Name';
delete circleObj.name;

console.log(circleObj);

console.log(`recObj is sealed? ${Object.isSealed(rectObj)}`);
console.log(`recObj is frozen? ${Object.isFrozen(rectObj)}`);
console.log(`circle is sealed? ${Object.isSealed(circleObj)}`);
console.log(`cirle is frozen? ${Object.isFrozen(circleObj)}`);
 */

const obj = {
  key1: 'value1',
  key2: 'value2',
  // ... (150 kulcs lehet itt)
};

const properties = {
  writable: false,
  enumerable: false,
  configurable: false,
};

for (const key in obj) {
  Object.defineProperty(obj, key, properties);
}

console.log(Object.getOwnPropertyDescriptors(obj));
