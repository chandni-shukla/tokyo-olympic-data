/*
  scopes -> accessiblity of a variable
*/


let a = 10;//global

{
    let a = 20;
    {
        let a = 30;
        {
            let a = 40;
            console.log(a);
        }
    }
}
console.log(a);

//function scope
let greet = () => {
    let msg = 'Good Morning';
    return msg;
};
let result = greet();
console.log(result);

//let vs const

let appVersion = '1.01.1';
const APP_NAME = 'FrontEnd';

const greetMe = () => {
    console.log("Good Morning");
}

greetMe();


//let const with object

const mobile = {
    brand : 'Apple',
    color : 'silver',
    price : 35000
};

console.log(mobile);
mobile.price = 40000;
console.log(mobile);