/*
Data Types

1. Number
2. String
3. Boolean
4. null
5. object
6. array
7. undefined
*/
// String
let employeeName = "Chandni"
console.log(`value : ${employeeName} type : ${typeof employeeName}`);
//Number
let salary = '20000';
console.log(`value : ${salary} type : ${typeof salary}`);

//boolean
let isIndia = true
console.log(`value : ${isIndia} type : ${typeof isIndia}`);

//object

let mobile = {
    brand : 'Apple',
    color : 'Silver',
    price : 45000

}
console.log(`value : ${JSON.stringify(mobile)} type : ${typeof mobile}`);

//array
let numbers = [10,20,30,40,50];
console.log(numbers);

//undefined

let a;
console.log(`a, ${a}`);

//null

let xyz = null;
console.log(xyz)

//function
let greet = function(){
    console.log("I am greet function")
}
console.log(greet);