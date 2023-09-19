//oops class

class Mobile {
    constructor(){
        this.brand = "Apple";
        this.color = "Silver";
        this.price = 35000
    }
    // getBrand() {
    //     return this.brand;//blueprint of object
    // }
    // getColor() {
    //     return this.color;
    // }

    //instance method
    getSpec() {
        let spec = `Brand : ${this.brand} Color : ${this.color} Price : ${this.price}`
        console.log(spec);
    }
    //static method
    static getDate() {
        console.log(new Date().toLocaleDateString());
    }

}
let mobile = new Mobile();
mobile.getSpec();
Mobile.getDate();



//sub classes

/*

inheritance
class -> parent
Subclass -> child
Person -> Employee

*/

class Person{
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person{
    constructor(firstName, lastName, age, designation) {
        super(firstName, lastName, age, designation);
        this.age =  age;
        this.designation = designation;
    }

    getBio() {
        let bio = `FullName : ${this.getFullName()} Age : ${this.age} Designation : ${this.designation}`;
        console.log(bio);
    }
}
let employee = new Employee("john", "Doe", 22, "software Engineer");
employee.getBio();

class Customer extends Person{
    constructor(firstName, lastName, location) {
    super(firstName, lastName);
    this.location = location;
    }

    getBio() {
        let bio = `FullName : ${this.getFullName()} Location : ${this.location}`;
        console.log(bio);
    }
}
let customer = new Customer("Chandni", "Shukla", "Noida");
customer.getBio();
