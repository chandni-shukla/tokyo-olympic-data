/*
  setInterval();
  setTimeout();
  clearInterval();
*/

let count = 0;
let greet = () => {
    count++;
    console.log(count);
};
interval = setInterval(greet, 1000);

setTimeout( () => {
    clearInterval(interval);
}, 5000);