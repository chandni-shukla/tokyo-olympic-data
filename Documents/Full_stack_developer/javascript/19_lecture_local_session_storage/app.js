/*

  storage -> string data only
  
  setItem()
  getItem()
  removeItem()
  clear()

  JSON.stringify(); -> object to string format
  JSON.parse(); -> string -> object
*/

let userInfo = 'Archana-verma';
localStorage.setItem('userInfo', userInfo);

// get item
let localItem = localStorage.getItem('userInfo', userInfo);
console.log(localItem);

// //sessionStorage
// userInfo = 'Archana-verma';
// sessionStorage.setItem('userInfo', userInfo);

// // get item
// localItem = sessionStorage.getItem('userInfo', userInfo);
// console.log(localItem);



//remove item

// localStorage.removeItem('userInfo');

//clear

// localStorage.clear();

// //object

let person = {
    name : 'chandni',
    age : 23,
    designation : 'software engineer'
};
sessionStorage.setItem('person-info', JSON.stringify(person));

let personString = sessionStorage.getItem('person-info');
console.log(personString);
console.log(JSON.parse(personString));