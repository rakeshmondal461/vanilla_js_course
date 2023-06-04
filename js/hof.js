const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

const heyGreet = greet('Hey');
heyGreet('Rakesh');

greet('Hello Mr. ')('Rakesh Mondal');
