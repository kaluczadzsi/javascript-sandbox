// alert('Hello');
// console.log(window.innerWidth);

// Global scope
const x = 100;

console.log(x, 'in global');

function run() {
  console.log(window.innerHeight);
  console.log(x, 'in function');
  //   console.log(y); // err
}

run();

if (true) {
  console.log(x, 'in block');
}

function add() {
  // Function scope
  // Variable shadowing
  const x = 1;
  const y = 50;
  console.log(x + y);
}

// console.log(y);

add();
