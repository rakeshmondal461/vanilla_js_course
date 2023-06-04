'use strict';

// const xyz = () => {
//   var abc = 115;
//   console.log(abc);
// };

// xyz();

// let x = 1000;
// console.log(x);

// let y;

// getValue();
// console.log(x);

// let drivingLisence = false;
// const passedTest = true;

// if (passedTest) driverLisence = true;
// if (drivingLisence) console.log("I can drive");

// FUNCTION DECLARATION VS EXPRESSION
// console.log(squareRootn(5));
// function squareRoot(num) {
//   return num ** 2;
// }

// const squareRootn = function () {
//   return num ** 2;
// };
// FUNCTION DECLARATION VS EXPRESSION

// FUNCTION CALLING CONCEPTS
// const calcAverage = (score1, score2, score3) => {
//   const avg = (score1 + score2 + score3) / 3;
//   return avg;
// };

// const checkWinner = (avgDolphins, avgKoalas) => {
//   if (avgDolphins > avgKoalas) {
//     console.log(`Dolphins wins (${avgDolphins} vs. ${avgKoalas})`);
//   } else {
//     console.log(`Koalas wins (${avgKoalas} vs. ${avgDolphins})`);
//   }
// };

// const avgDolphins = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);

// checkWinner(avgDolphins, avgKoalas);
// FUNCTION CALLING CONCEPTS

// INTRODUCTION TO ARRAY
// const arr1 = [101, 502, 609];
// console.log(arr1);

// const addNewItem = (arrName, newValue) => {
//   const arrayLength = arrName.length;
//   arrName[arrayLength] = newValue;
// };

// addNewItem(arr1, 812);
// arr1.shift();
// console.log(arr1);
// INTRODUCTION TO ARRAY

// INTRODUCTION TO OBJECTS
/*
const emp = {
  id: 'EMP001',
  empName: 'Rakesh Mondal',
  guardianName: 'Rajib Mondal',
  desg: 'Software developer',
  age: 28,
  skills: ['Javascript', 'React', 'React Native', 'Node JS'],
};
*/
// console.log(emp);

// ACCESSING THE OBJECT PROPERTY
// console.log(emp.id);
// const nameKey = 'Name';
// console.log(emp[`emp${nameKey}`]);
// console.log(emp[`guardian${nameKey}`]);
// const choosenProperty = prompt(
//   'Please type property name among (empName, guardianName, desg, age, skills), you want to access.'
// );
// if (emp[choosenProperty]) {
//   console.log(emp[choosenProperty]);
// } else {
//   console.log('You entered wrong property name');
// }
// ACCESSING THE OBJECT PROPERTY END

// ADDING NEW PROPERTY INTO THE OBJECT

// emp.address = 'Kolkata';
// emp['salary'] = '4LPA';
// console.log(
//   `${emp.empName} has ${emp.skills.length} skills, and his best skill is ${emp.skills[0]}`
// );

// The Object.freeze() static method freezes an object. Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. A frozen object can no longer be changed
// Object.freeze(emp);
// emp.prop = 33;
// console.log(Object.entries(emp));

// The Object.hasOwn() static method returns true if the specified object has the indicated property as its own property. If the property is inherited, or does not exist, the method returns false.
//console.log(Object.hasOwn(emp, 'empName2'));

// The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.
// console.log(Object.keys(emp));

// ACCESS OBJECT DATA WITH KEY=>VALUE PAIR
// for (const [key, value] of Object.entries(emp)) {
//   console.log(`${key}: ${value}`);
// }

// ASSIGN NEW VALUE TO EXISTING OBJECT

// const returnedEmp = Object.assign(emp, { hobbies: ['Walking', 'Cycling'] });
// console.log('returnedEmp=>', returnedEmp);

// let name = 'Rakesh';
// const user = {
//   name: 'Rakesh Mondal',
//   age: 27,
//   email: 'mondaltakesh461@gmail.com',
//   mob: '9382843427',
//   skills: ['C', 'C++', 'JavaScript'],
//   address: { vill: 'Charmahatpur', po: 'Rupdaha' },
// };

// CHANGING NAME AND SET DEFAULT VALUES OF OBJECT PROPERTY
// const { age: userAge, hobbies: userHobbies = [] } = user;

// console.log(userAge);
// console.log(userHobbies);
// MUTATING VALUES USING OBJECT PROPERTY
// ({ name } = user);
// console.log(name);

// OBJECT DESTRUCTURING
// const {
//   address: { vill, po },
// } = user;

// console.log(vill);
// console.log(po);
// const skills = ['C', 'C++', 'JavaScript'];
// const GREET = 'HELLO JAVASCRIPT';

// console.log(...skills);
// console.log(...GREET);

// const numberList = [
//   prompt('Enter first number'),
//   prompt('Enter second number'),
//   prompt('Enter third number'),
// ];

// const nnn = [...numberList];

// HERE other VARIABLE HAS REST OF THE VALUES OF ARRAY.
// const [javascript, ...others] = [
//   'Javascript',
//   'Python',
//   'PHP',
//   'JAVA',
//   'C++',
//   'HTML',
//   'CSS',
// ];

// console.log(javascript);
// console.log(others);
// HERE WE ARE USING REST PARAMS
// function showValues(...args) {
//   console.log(args);
// }

//showValues(4, 8, 12, 30, 45);

// const game = [
//   'Burki',
//   'Schulz',
//   'Hummels',
//   'Akanji',
//   'Hakimi',
//   'Weigl',
//   'Witsel',
//   'Hazard',
//   'Brandt',
//   'Sancho',
//   'Gotze',
// ];

// for (const [index, val] of game.entries()) {
//   console.log(`${index + 1} => ${val}`);
// }
/*
const fields = ['name', 'age', 'email'];

const userdet = {
  [fields[0]]: 'Rakesh Mondal',
  [fields[1]]: 27,
  [fields[2]]: 'mondalrakesh461@gmail.com',
};

console.log('userdet>>>', userdet);

const newMap = new Map();

newMap.set('userName', 'Rakesh Mondal');
newMap.set('age', 28);
newMap.set('address', 'CharMahatpur');
newMap.set('age', 29);

console.log(newMap);
*/

// var totn_string = 'TechOnTheNet';
// const lastStr = totn_string.slice(-4);
// console.log(lastStr.padStart(totn_string.length, '*'));

// const p =
//   'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

// console.log(p.replace('dog', 'monkey'));

// const hello1 = [];
// console.log('hello1 before', hello1);
// function addValue() {
//   hello1.push('Hello javascript');
// }

// addValue();
// console.log('hello1 after', hello1);

// const flight = 'LH234';
// const jonas = {
//   name: 'Rakesh Mondal',
//   passport: 4583657829,
// };

// const checkIn = function (flightNum, { ...passenger }) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;
//   console.log(`${passenger.name}, your flight number is: ${flightNum}`);
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);
