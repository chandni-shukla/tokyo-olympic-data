/*

1. let
2. const

//Rules

1. Each variable is have a proper meaning
2. use camel case letters for more words
3. never starts with a number, !
5. allowed chars _, $, !, a-z, A-Z, 0-9 
6. No re-declaration of variable
7. Each variable case sensitive
*/

let a = 10;
let b = 20;

console.log(a + b);
a = 20;
console.log(" The sum of " + a + ',' + b + " is " + (a + b));//outdated ES6
console.log(`The sum of ${a}, ${b} is ${a+b}`);//New back tick opr

let companyName = 'Impressico'//camel case letters