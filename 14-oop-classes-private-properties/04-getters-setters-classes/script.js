class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get firstName() {
    return this.capitalizeFirst(this._firstName);
  }

  get lastName() {
    return this.capitalizeFirst(this._lastName);
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set firstName(value) {
    this._firstName = this.capitalizeFirst(value);
  }

  set lastName(value) {
    this._lastName = this.capitalizeFirst(value);
  }

  capitalizeFirst(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}

const person1 = new Person('Uchiha', 'Obito');
console.log(person1.firstName);
console.log(person1.lastName);

person1.firstName = 'Tomas';
person1.lastName = 'Dorominy';

console.log(person1.fullName);
