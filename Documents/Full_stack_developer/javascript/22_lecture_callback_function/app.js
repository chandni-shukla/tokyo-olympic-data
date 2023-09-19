// let sum = (a, b) => {
//     return a + b;
// };

// let multiply = (a, b) => {
//     return a * b;
// };

// let calculate = (a, b, somefn) => {
//     return somefn(a, b);
// };

// let result = calculate(10, 20, sum);
// result = calculate(10, 20, multiply);
// result = calculate(10, 20, (a, b) => {
//     return (2 * a) + (2 * b);
// });
// console.log(result);

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

let createEmployee = (employee, callback) => {
    setTimeout( () => {
        employees.push(employee);
        callback();
      }, 3000);
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
createEmployee(newEmployee, getAllEmployees);