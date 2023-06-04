/*
================TESTING BEHAVIOUR(this KEYWORD) OF ARROW AND REGULAR FUNCTION ==============
*/
var year = 2000;
const jonas = {
  name: 'Jonas',
  year: 1989,
  calcage: () => {
    return 2037 - this.year;
  },
};

console.log(jonas.calcage());

const chkArgument = function () {
  console.log(arguments);
};

chkArgument('hello', 'world', 'hello', 'javascript');

const regularFunction = function () {
  console.log('regularFunction>>>>>', this); // "this" refers to the object calling the function
};

const arrowFunction = () => {
  console.log('arrowFunction', this); // "this" refers to the enclosing scope (lexical "this")
};

const obj = {
  method: regularFunction,
  arrowMethod: arrowFunction,
};

obj.method(); // "this" refers to "obj" (regular function)
obj.arrowMethod(); // "this" refers to the enclosing scope (lexical "this")
/*
 ================TESTING BEHAVIOUR(this KEYWORD) OF ARROW AND REGULAR FUNCTION ==============
*/
