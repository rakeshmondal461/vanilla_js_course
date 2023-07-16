/*

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.showDetails = function () {
  console.log(`User name is:${this.name} and age is:${this.age}`);
};

function Employee(name, age, role) {
  Person.call(this, name, age); // // Call the parent constructor with the child's context
  this.role = role;
}

Employee.prototype = Object.create(Person.prototype); // Inherit prototype of Person here

Employee.prototype.showEmpRole = function () {
  console.log(`User designation is:${this.role}`);
};

const rakesh = new Employee('Rakesh Mondal', 28, 'Software Developer');
console.log(rakesh);
rakesh.showDetails();
rakesh.showEmpRole();

*/

class Person {
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }

  getAge() {
    console.log(`Your age is: ${2023 - this.birthYear}`);
  }
}

class Employee extends Person {
  constructor(name, birthYear, role) {
    super(name, birthYear);
    this.role = role;
  }

  showIntro() {
    console.log(
      `Employee Name is:${this.name}, age is ${
        2023 - this.birthYear
      } and designation is: ${this.role}`
    );
  }
}

const newEmp = new Employee('Rakesh Mondal', 1995, 'Software Developer');
newEmp.getAge();
newEmp.showIntro();
