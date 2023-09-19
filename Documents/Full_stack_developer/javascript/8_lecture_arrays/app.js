/*
JS Arrays
*/

let numbers = [10,20,30,40,50];
console.log(typeof numbers);
console.log(numbers);
console.log(numbers[3]);


/*
looping
  normal for loop
  for in loop
  for of loop
  forEach function
  forEach Arrow function
*/

let employee = [
    {
        id : 101,
        name : 'chandni',
        age : 23,
        designation : 'software engineer',
        location : 'Noida'
    },
    {
        id : 102,
        name : 'ramai',
        age : 22,
        designation : 'software engineer',
        location : 'Noida'

    },
    {
        id : 103,
        name : 'anu',
        age : 25,
        designation : 'data engineer',
        location : 'Noida'

    },
    {
        id : 104,
        name : 'archanan',
        age : 23,
        designation : 'junior data engineer',
        location : 'gonda'

    },
    {
        id : 105,
        name : 'shaily',
        age : 25,
        designation : 'doctor',
        location : 'gonda'

    }   
];
console.log(employee);//whole arrays
console.log(employee[0]);// chandni obj
console.log(employee[0].name);//chandni name
console.log(employee[4].designation);


//print only names in the array
let output = '';
for(let i = 0; i < employee.length; i++){
    output += ` ${employee[i].name} `;
}
console.log(output);

//for in loop

output = '';
for(let index in employee){
    output += ` ${employee[index].name} `;
}
console.log(output);

// for of loop
output = '';
for(let employe of employee){
    output += ` ${employe.name} `;
}
console.log(output);

//forEach function

output = '';
employee.forEach(function (employe){
    output += ` ${employe.name} `; 
});
console.log(output);

//forEach Arrow function ES6

output = '';
employee.forEach( (employe) => {
    output += ` ${employe.name} `; 
});
console.log(output);


//Assignments
///print all junior age <= 25

output = "";
employee.forEach(employe => {
   if(employe.age <= 24)
   output += `${employe.name}`
});
console.log(output);


//print all senior employee age > 24

output = "";
employee.forEach(employe =>{
    if(employe.age > 24) 
    output += `${employe.name}`
});
console.log(output);

//print objects of noida locations

output = "";
employee.forEach(employe => {
    if(employe.location == 'Noida') 
    output += `${employe.name}`
});
console.log(output);
