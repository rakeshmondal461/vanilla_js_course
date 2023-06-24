'use strict';

// IMPLEMENTATION OF CLOSURE

function x() {
  const users = [];
  function addUser(userName) {
    users.push(userName);
    console.log('users:', users);
  }
  function removeUser(userName) {
    const nameIndex = users.indexOf(userName);
    if (nameIndex > -1) {
      users.splice(nameIndex, 1);
    }
    console.log('users:', users);
  }
  return { addUser, removeUser };
}

const z = x();
console.log(z);
z.addUser('Rakesh');
z.addUser('Rajesh');
z.addUser('Rahul');
z.removeUser('Rajesh');

/*
COMMON EXAMPLE
function init() {
  var name = 'Mozilla'; 
  return function displayName() {
    console.log(name); 
  };
}
const x = init(); // Here not only a function was returned, but a closure was
x();

*/
