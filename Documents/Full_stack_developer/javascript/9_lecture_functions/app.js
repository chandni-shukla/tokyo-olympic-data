// write a function to print numbers from 0 to 10 incre by 1

function printNumbers(start, end){
    if(start < end){
        let numbers = "";
        for(let i = start; i<= end; i++){
            numbers += `${i}`;
        }
        console.log(numbers);
    } 
    else{
        console.warn('start number should not be greater than end number');
    }
}
printNumbers(1, 0);


// function without parameter
/*

function types
1. normal function
2. function expression
3. arrow function
*/

//normal function
function greetNF(){
    console.log("Hello i am normal function");
}
greetNF();

// function expression

let greetFE = function(){
    console.log("hello i am function Expression");
}
greetFE();


//arrow function

let greetAF = () => {
    console.log("hello i am Arrow function");
}
greetAF();


/*
1. function without parameter
2. function with parameter
3. function with return type
4. function inside an objects
5. function with object as parameter
6. function with array as parameter
7. Nested function
8. Twisted function

*/
// function with parameter
let greetF = function(name) {
   let message = `good morning ${name}`;
   console.log(message);
}
greetF('chandni');

// function with return type

let sum = function(a, b) {
    let result = 2 * (a+b);
    return result;
}

let multiply = function(sum, c){
    let result = sum * c;
    console.log(result);
}
let finalSum = sum(10, 20);
multiply(finalSum, 10);

//function inside an object

let student = {
    firstName : 'chandni',
    lastName : 'shukla',
    fullName : function(){
        return `${this.firstName} ${this.lastName}`
    }
};
console.log(student.firstName);
console.log(student.fullName());

//5. function with object as parameter

let printObj = function(obj) {
    console.log(obj);    
}
printObj({name : 'chandni', age : 22});

let mobile = {
   brand : 'Apple',
   color : 'silver',
   price : 400000
};
printObj(mobile);


//6. function with array as parameter

let printArray = function(array){
    let result = "";
    for(let index in array){
        result += `index : ${index} - value : ${array[index]} \n`
    }
    console.log(result);
}
printArray([10,20,30,40,50]);
printArray(['html', 'css', 'javascript', 'bootstrap', 'react']);

//Nested function

let outerFn = function(){
    console.log("i am a outer function");
    let innerFn = function() {
        console.log("I am a inner function");
    }
    innerFn();
}
outerFn();

//  7. Twisted functions
let twistedFn = function (){
    let name = "Rajan";
    let printStudent = function (){
        let student = {
            name : 'Rajan',
            age : '22',
            course : 'BTech'
        }
        return student;
    }
    return printStudent;
}
let innerFn = twistedFn();
console.log(innerFn);
let studentObj = innerFn();
console.log(studentObj);