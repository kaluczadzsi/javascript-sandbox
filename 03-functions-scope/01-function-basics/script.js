function sayHello() {
  console.log('Hello world');
}

// sayHello();

// Parameters
function add(num1, num2) {
  console.log(num1 + num2);
}

add(5, 10); // Arguments

let arg1, arg2;
function subtract(n1, n2) {
  arg1 = arguments[0];
  arg2 = arguments[1];

  return n1 - n2;
}

const result = subtract(10, 5);
console.log(`result: ${arg1} - ${arg2} = ${result}`);
