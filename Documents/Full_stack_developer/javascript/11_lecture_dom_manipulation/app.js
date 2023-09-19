//DOM
console.log(document);

//head
console.log(document.head);

//body
console.log(document.body);

//title
// console.log(document.title);

// document.title = 'Welcome to Impressico';
console.log(document.title);

/*
   document.getElementById() -> id
   document.getElementsByTagName() -> tag name
   document.getElementsByClassName() -> class name  
   document.querySelector() -> for all

*/

let divTag = document.querySelector('#div-tag');
console.log(divTag);

let divClassName = document.querySelector('.div-class');
console.log(divClassName);

/*

change the content
*/

let h1Element = document.querySelector('.div-class h1');
console.log(h1Element.innerText);
h1Element.innerText = 'Welcome to Impressico';

/*
  apply style
*/

h1Element.style.backgroundColor = "lightGreen";
h1Element.style.textAlign = "center";
h1Element.style.padding = "20px";
h1Element.style.color = "red";