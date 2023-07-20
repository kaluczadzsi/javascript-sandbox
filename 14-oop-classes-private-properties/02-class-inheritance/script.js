// Parent class
class Shape {
  constructor(name) {
    this.name = name;
  }

  logName() {
    console.log(`Shape name: ${this.name}`);
  }
}

// Sub class
class Rectangle extends Shape {
  constructor(name, width, height) {
    super(name);

    this.width = width;
    this.height = height;
  }
}

// Sub class
class Circle extends Shape {
  constructor(name, radius) {
    super(name);
    this.radius = radius;
  }

  logName() {
    console.log(`Circle name: ${this.name}`);
  }
}

const rect = new Rectangle('Rectangle - 1', 30, 30);
const cir = new Circle('Circle - 1', 46);

rect.logName();
cir.logName();

console.log(rect instanceof Rectangle);
console.log(rect instanceof Shape);
console.log(rect.__proto__);
