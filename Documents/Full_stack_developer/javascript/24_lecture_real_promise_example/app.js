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
createEmployee(newEmployee).then( (msg) => {
    console.log(msg);
    getAllEmployees();
}).catch( (error) => {
    console.warn(error);
});