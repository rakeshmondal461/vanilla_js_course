'use strict';

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

// const emp = {
//   id: 'EMP001',
//   empName: 'Rakesh Mondal',
//   guardianName: 'Rajib Mondal',
//   desg: 'Software developer',
//   age: 28,
//   skills: ['Javascript', 'React', 'React Native', 'Node JS'],
// };

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

// ACCESS OBJECT DATA WITH KEY=>VALUE PAIR
// for (const [key, value] of Object.entries(emp)) {
//   console.log(`${key}: ${value}`);
// }
