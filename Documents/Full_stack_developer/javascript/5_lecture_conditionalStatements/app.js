/*

conditional statements
1. if-else
2. switch

looping
1.for loop
2.while loop
3.do-while loop
*/

let time = 19;
let message = "";

if(time <= 12){
    message = "Good Morning";
}
else if(time >= 18 && time <= 23){
    message = "Good Afternoon";
}
else{
    message = "invalid time";
}
console.log(message);

//switch statement

let day = new Date().getDay();
let fullDay = "";
switch(day){
    case 0 :
        fullDay = "SUN";
        break;
    
    case 1 :
        fullDay = "MON";
        break;    

    case 2 :
        fullDay = "TUE";
        break;
        
    case 3 :
        fullDay = "WED";
        break;
        
    case 4 :
        fullDay = "THU";
        break; 
        
    case 5 :
        fullDay = "FRI";
        break;   
        
    case 6 :
        fullDay = "SAT";
        break;    

    default:
        fullDay = "Not valid";
        break;    
}

console.log(fullDay);