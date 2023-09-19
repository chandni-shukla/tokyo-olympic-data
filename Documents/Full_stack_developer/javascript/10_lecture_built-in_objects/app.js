/*
Math Objects
max
min
random
*/

console.log(Math.PI);

//max
let array = [10,234,24,23,34023,324543,45364453]
console.log(`Max : ${Math.max(...array)}`);

//min
console.log(`Min : ${Math.min(...array)}`);

//random

console.log(Math.floor(Math.random() * 1000000));

//date
//refernce: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

let date = new Date();
console.log(date);

//proper date

console.log(`India: ${date.toLocaleDateString()}`);

//proper time
console.log(`India : ${date.toLocaleTimeString()}`);

console.log(date.getFullYear());

//USA date

let options = {timeZone : 'America/New_York'};
let usaDate = date.toLocaleDateString('en-US', options);
console.log(`USA : ${usaDate}`);

//USA time

let usaTime = date.toLocaleTimeString('en-US', options);
console.log(`USA : ${usaTime}`);

//string
let str = 'good morning';
//lowercase
console.log(str.toLowerCase());
//uppercase
console.log(str.toUpperCase());

//substring
console.log(str.substring(0,4));
console.log(str.substring(5));

/*
1. find a char in the given string
*/
let strin = 'good morning';
let countChars = function(strin) {
    let count = 0;
    for(let i = 0; i <= strin.length; i++){
        let char = strin.charAt(i);
        if(char === 'o' || char === 'O') {
            count++;
        }
    }
    return count;
}
console.log(countChars(str));

/*
2. print reverse of the given string
*/
str = 'good morning';
let reverseString = (str) => {
    let tempStr = "";
    for(let i = str.length; i>=0; i--){
    let char = str.charAt(i);
    tempStr += char;
    }
    return tempStr;
};
console.log(reverseString(str));