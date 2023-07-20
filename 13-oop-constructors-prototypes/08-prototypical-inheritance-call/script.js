function Shape(name) {
  this.name = name;
}

Shape.prototype.logName = function () {
  console.log(`Shape name: ${this.name}`);
};

function Rectangle(name, height, width) {
  Shape.call(this, name);
  this.height = height;
  this.width = width;
}

const rect = new Rectangle('rectangle1', 20, 20);
console.log(rect);

Circle.prototype.constructor = Circle;
Circle.prototype = Object.create(Shape.prototype);

function Circle(name, radius) {
  Shape.call(this, name);
  this.radius = radius;
}

Circle.prototype.logName = function () {
  console.log(`Circle name: ${this.name}`);
};

const cir = new Circle('Circle1', 23);
console.log(cir);
cir.logName();
