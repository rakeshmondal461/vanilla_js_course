'use strict';

/*
const h1s = document.getElementsByTagName('h4');
console.log(h1s); // RETURNS HTML COLLECTION

const boxes1 = document.querySelectorAll('.box');
console.log(boxes1); // RETURNS NODELIST

*/
const boxes = document.getElementsByClassName('box');
console.log(boxes); // RETURNS HTML COLLECTION

//CREATE A NODE

/*
const elm = document.createElement('span');
elm.classList.add('highlight');
elm.textContent = 'Hello';
const box1 = document.querySelector('.box1');
box1.append(elm);
*/
const addBtn = document.getElementById('addBtn');
const removeBtn = document.getElementById('removeBtn');
/*
removeBtn.addEventListener('click', () => {
  const boxArr = Array.from(boxes1);
  boxArr.length > 0 && boxArr[0].remove();
});
*/
addBtn.addEventListener('click', () => {
  const leftDiv = document.querySelector('.left');
  const elm = document.createElement('div');
  elm.classList.add('box');
  elm.textContent = 'BOX';
  leftDiv.append(elm);
});
removeBtn.addEventListener('click', () => {
  const boxes1 = document.querySelectorAll('.box');
  const boxArr = Array.from(boxes1);
  boxArr.length > 0 && boxArr[0].remove();
});

const toprootdiv = document.querySelector('.top-root');

const innerdiv = document.querySelector('.inner-div');
const closetel = innerdiv.closest('.top-root');
console.log(closetel);
console.log('traverse downwards>>>>', toprootdiv.closest('.top-inner-div'));

console.log({ userName: 'User 1', passwors: 'Password' });
