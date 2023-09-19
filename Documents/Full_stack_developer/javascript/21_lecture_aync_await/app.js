// console.log('person 1');
// console.log('person 2');
// setTimeout( () => {
//     console.log('person 3');//call back
// }, 5000);
// console.log('person 4');
// console.log('person 5');
// console.log('person 6');
// console.log('person 7');

//Database
let employees = [
    {
        sno : '101',
        name : 'chandni',
        age : '22',
        designation : 'software Engineer'
    },
    {
        sno : '102',
        name : 'shaily',
        age : '23',
        designation : 'data Engineer'
    }
];

//create

let createEmployee = (employee) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            let length = employees.push(employee);
            if(length) {
                resolve("Employee is created");
            }
            else{
                reject("Employee creation failed");
            }
          }, 3000);
    })
};

//Read Employees

let getAllEmployees = () => {
    setTimeout( () => {
        let tableBodyEl = document.querySelector('#table-body');
        let tableRowEl = "";
        for(let employee of employees) {
            tableRowEl += `<tr>
                              <td>${employee.sno}</td>
                              <td>${employee.name}</td>
                              <td>${employee.age}</td>
                              <td>${employee.designation}</td>
                           </tr>`
        }
        tableBodyEl.innerHTML = tableRowEl;
    }, 1000);
};
//create new employee, display on html

let newEmployee = {
    sno : '103',
    name : 'archana',
    age : '24',
    designation : 'teacher'
};

let init = async() => {
    await createEmployee(newEmployee);
    getAllEmployees();
};
init();