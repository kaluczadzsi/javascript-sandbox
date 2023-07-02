// Create a new string called "myNewString" that holds the value of "Developer", using the value from "myString"
const myString = 'developer';
// const [firstLetter, ...rest] = myString;

// const myNewString = firstLetter.toUpperCase() + rest.join('');
// const myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
const myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;
console.log(myNewString);
