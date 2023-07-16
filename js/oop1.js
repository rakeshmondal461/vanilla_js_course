'use strict';

class Person {
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }
  calcage() {
    console.log(`Age is:${2023 - this.birthYear}`);
  }
}

const anewUser = new Person('Rakesh Mondal', 1995);

console.log(anewUser);
