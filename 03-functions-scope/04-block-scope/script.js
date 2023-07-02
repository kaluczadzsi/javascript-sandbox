const x = 100;
const foo = 1;
// Var is added to the window object
var bar = 2;

if (true) {
  const y = 200;
  console.log(x + y);
}

// console.log(x + y); // y is not defined in the global scope

for (var i = 0; i <= 10; i++) {
  console.log(i);
}

console.log(i);

if (true) {
  // Const and Let are block scoped
  const a = 500;
  let b = 600;

  // Var is function scoped
  var c = 700;
}

// console.log(a, b, c);

function run() {
  var d = 100;
  console.log(d);
}

run();

// console.log(d);

{
  var g = 'g';
}

console.log(g);
