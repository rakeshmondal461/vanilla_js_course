/*
================ ARRAY AND OBJECT DESTRUCTURING ==============
*/
const friendList = ['Turgut', 'Bamsi', 'Dugan', 'Aliyar', 'Ahmed'];

const gaziData = {
  name: 'Ertugrul',
  father: 'Suleman sha',
  sons: ['Gunduz', 'Shbaji', 'Osman'],
  friends: friendList,
};

const [friend1, friend2, friend3] = friendList;
console.log(friend1, friend2, friend3);

const { name } = gaziData;
console.log(name);

/*
================ ARRAY AND OBJECT DESTRUCTURING ==============
*/
