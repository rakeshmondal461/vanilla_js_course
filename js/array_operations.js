'use strict';

const arr = ['a', 'b', 'c', 'd', 'e'];

/*
// SLICE : USED TO TAKE SOME VALUES FROM ARRAY. DO NOT CHANGE THE ACTUAL ARRAY
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-1));
console.log(arr.slice(-2));
console.log(arr.slice(2, -1));
console.log(arr.slice());
console.log('\n');

// SPLICE : USED TO REMOVE SOME ELEMENTS FROM ARRAY.
console.log(arr.splice(2));
console.log(arr.splice(-1));
console.log(arr.splice(2, 4));
console.log(arr);

// REVERSE : USED TO REVERSE THE ARRAY. IT MUTATES THE MAIN ARRAY.
const arr2 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const fullArr = arr.concat(arr2);
console.log(fullArr);

// JOIN

console.log(arr2.join('-'));


const colorList = [
  {
    color: 'red',
    value: '#f00',
  },
  {
    color: 'green',
    value: '#0f0',
  },
  {
    color: 'blue',
    value: '#00f',
  },
  {
    color: 'cyan',
    value: '#0ff',
  },
  {
    color: 'magenta',
    value: '#f0f',
  },
  {
    color: 'yellow',
    value: '#ff0',
  },
  {
    color: 'black',
    value: '#000',
  },
];

colorList.forEach((item, index) => {
  console.log(index, `${item.color}=> ${item.value}`);
});



const checkDogs = (juliaData, kateData) => {
  const dogsJuliaCorrected = [...juliaData];
  const dogKateCorrected = [...kateData];
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  const bothArray = dogsJuliaCorrected.concat(dogKateCorrected);
  console.log(bothArray);
  bothArray.forEach((dogAge, i) => {
    if (dogAge >= 3) {
      console.log(`Dog number ${i + 1} is an adult and is ${dogAge} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy.`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);


// IMPORTANT USE CASE OF REDUCE METHOD
const numarr = [22, 6, 25, 35, 32, 76, 89, 27, 55];
console.log(numarr);
const minval = numarr.reduce((acc, curr) => {
  if (acc < curr) {
    return acc;
  } else {
    return curr;
  }
}, numarr[0]);

const maxVal = numarr.reduce((acc, curr) => {
  if (acc > curr) {
    return acc;
  } else {
    return curr;
  }
}, numarr[0]);

console.log(minval);
console.log(maxVal);

*/
