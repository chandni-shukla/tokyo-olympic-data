/*

Js Objects
*/

let person = {
    name : 'chandni',
    age  : 23,
    designation : 'Editor',
    location : 'Noida'
};

console.log(person);

console.log(`Designation : ${person.designation}`);//static

console.log(`location : ${person['location']}`);//dynamic

//dynamic
let props = 'age';
console.log(person[props])

//nested object
let user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
};
console.log(user);
console.log(user.address);
console.log(user.address.geo);
console.log(user.website);

//lat lng

console.log(`lat : ${user.address.geo.lat}`);
console.log(`lng : ${user.address.geo.lng}`);


//De-structuring
let {lat, lng} = user.address.geo;
console.log(`lat : ${lat}`);
console.log(`lng : ${lng}`);

//Spread Operators

let obj = {
    geo : user.address.geo
};
console.log(obj);