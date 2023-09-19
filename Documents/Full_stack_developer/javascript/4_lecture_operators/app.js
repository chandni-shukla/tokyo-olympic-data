/*
Javascript Operators
1. Arithmetic operators : +, -, /, *, %
2. Conditional Operators : <, >, <=, >=
3. Logical Operators : && || ^
4. Ternary Operators : ?:
5. Unary Operators : ++, --
6. Shorthand math : +=, -=, *=, /=
7. Equality Operators : ==, ===
*/
//Arithmetic Operators
let a = 10;
let b = 20;

console.log(`sum : ${a+b}`);
console.log(`sub : ${a-b}`);
console.log(`mul : ${a*b}`);
console.log(`div : ${a/b}`);
console.log(`modulas : ${a%b}`);

//Shorthand math

let x = 10;
let y = 20;
let add = 10;

// add = add * (x + y); //10*10+20
add *= (x+y);
console.log(add);

//Conditional Operators

let marks = 60;

if(marks <= 35){
  console.log("You cleared the exam");
}
else{
    console.log("You failed in the exam");
}

// Logical Operators : && || ^

let interviewFinishes = true;
let offerReleases = false;

if(interviewFinishes && offerReleases){
    console.log('Joined the company');    
}
else{
    console.log('waiting for offer')
}

//ternary operators

// marks = 25;//condition failed
marks = 75;//condition pass
let message = "";
(marks <= 35) ? message = "You Failed the exam" : message = "You cleared the exam";
console.log(message);

// Unary Operators : ++, --

let p = 10;
p = p+1;
p += 1;
p++;
console.log(`p : ${p}`)

//Equality Operators : ==, ===

let num1 = 10;
let num2 = '10';

if(num1 == num2){
    console.log('both are equal')
}
else{
    console.log('both are not equal')
}
