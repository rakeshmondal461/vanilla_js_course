'use strict';

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

// console.dir(z);

// z('Rakesh');
// z('Rajesh');
