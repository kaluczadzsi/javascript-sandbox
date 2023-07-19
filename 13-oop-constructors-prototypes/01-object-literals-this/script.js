const rectangle = {
  name: 'Rectangle 1',
  width: 20,
  height: 10,
  area() {
    return this.width * this.height;
  },
};

const rectangle2 = {
  name: 'Rectangle 2',
  width: 20,
  height: 30,
  area() {
    return this.width * this.height;
  },
};

console.log(rectangle.area());
console.log(rectangle2.area());
