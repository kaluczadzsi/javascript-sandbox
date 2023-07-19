function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.height * this.width;
  };
}

const rect1 = new Rectangle('Rectangle 1', 10, 10);
const rect2 = new Rectangle('Rectangle 2', 20, 20);
console.log(rect1.name);
console.log(rect1.area());
console.log(rect2.name);
console.log(rect2.area());

// 1. A new empty object is created.
// 2. The constructor function is called with the arguments that we passed in.
// 3. The 'This' keyword is set to the new empty object.
// 4.The new object is returned from the constructor function.

console.log(rect1.constructor);
console.log(rect2 instanceof Rectangle);
