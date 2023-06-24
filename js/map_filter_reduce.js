'use strict';

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newnums = nums.filter((num) => {
  return num > 5;
});

console.log('newnums@@>>>', newnums);

const array1 = [1, 2, 3];

const sumWithInitial = array1.reduce((acc, val) => acc + val, 0);

console.log(sumWithInitial);
