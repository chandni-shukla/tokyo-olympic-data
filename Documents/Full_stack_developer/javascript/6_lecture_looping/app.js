/*
Looping

1. For loop


  for(Initialization; condition; incre/decre){
    statement
  }

2. while loop

  initialization;
  while(condition){
   statements
   incre/decre;
  }

3. do-while

    initialization;
    do{
    statements
    incre/decre;
    }
    while(condition)

*/

//print value 0 to 10 incr by 1

output = "";
for(let i=0; i<=10; i++){
    output += ` ${i} `;
}
console.log(output);

//while
output = "";
let i = 0;
while(i <= 20){
  output += ` ${i} `;
  i++;
}
console.log(output);

//do-while
output = "";
i = 0;
do{
    output += ` ${i} `;
    i++;
}
while(i <= 10);
console.log(output);


//print value 20 to 0 decr by 2
output = "";
for(let i = 20; i >= 0; i -= 2){
   output += ` ${i} `;
}
console.log(output);

//Assignments
/*
   
   *
   * *
   * * *
   * * * *
   * * * * *

*/

/*

   1
   1 2
   1 2 3
   1 2 3 4
   1 2 3 4 5

*/

/*

   5
   4 4
   3 3 3
   2 2 2 2
   1 1 1 1 1
*/
/*

   1
   2 2
   3 3 3
   4 4 4 4
   5 5 5 5 5
*/

/*
  1 2 3 4 5
  1 2 3 4
  1 2 3
  1 2
  1
*/

/*

  5 5 5 5 5
  4 4 4 4
  3 3 3
  2 2
  1
*/