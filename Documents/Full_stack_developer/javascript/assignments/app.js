/*
   *
   * *
   * * *
   * * * *
   * * * * *
*/

let numRows = 5;

for (let i = 1; i <= numRows; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += '* ';
  }
  console.log(row);
}


/*
   1
   1 2
   1 2 3
   1 2 3 4
   1 2 3 4 5
*/

let numRow = 5;
for (let i = 1; i <= numRow; i++) {
    // console.log(i)
    let rowPattern = '';
    // console.log(rowPattern)

    for (let j = 1; j <= i; j++) {
        // console.log(j)
        rowPattern += j + ' ';
        // console.log(rowPattern)
    }
    console.log(rowPattern);
}

/*

  5 5 5 5 5
  4 4 4 4
  3 3 3
  2 2
  1

*/
numRows = 5;

for (let i = numRows; i >= 1; i--) {
    let rowPattern = '';

    for (let j = 1; j <= numRows - i; j++) {
        rowPattern += '  '; // Add spaces for indentation
    }

    for (let k = 1; k <= i; k++) {
        rowPattern += i + ' ';
    }

    console.log(rowPattern);
}


/*
  1 2 3 4 5
  1 2 3 4
  1 2 3
  1 2
  1
*/


numRows = 5;

for (let i = numRows; i >= 1; i--) {
    let rowPattern = '';

    for (let j = 1; j <= i; j++) {
        rowPattern += j;

        if (j < i) {
            rowPattern += ' ';
        }
    }

    console.log(rowPattern);
}

/*

   1
   2 2
   3 3 3
   4 4 4 4
   5 5 5 5 5
*/

let rows = 5;

let pattern = "";

for (let n = 1; n <= rows; n++) {
    for (let num = 1; num <= n; num++) {
        pattern += n;
     }
     
     pattern += "\n";
}
console.log(pattern);

/*

   5
   4 4
   3 3 3
   2 2 2 2
   1 1 1 1 1
*/

numRows = 5;

for (let i = numRows; i >= 1; i--) {
    let rowPattern = '';

    for (let j = numRows; j >= i; j--) {
        rowPattern += i;

        if (j > i) {
            rowPattern += ' ';
        }
    }

    console.log(rowPattern);
}