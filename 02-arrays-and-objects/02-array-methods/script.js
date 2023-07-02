let x;
const arr = [34, 55, 95, 20, 15];

// arr.push(100);
// arr.pop();

// arr.unshift(11);
// arr.shift();

x = arr.includes(200);
x = arr.indexOf(15);

x = arr.slice(1, 4);

// x = arr.splice(1, 4);

// x = arr.splice(3, 1);

x = +arr.slice(0, 3).reverse().toString().charAt(1);

console.log(x);
