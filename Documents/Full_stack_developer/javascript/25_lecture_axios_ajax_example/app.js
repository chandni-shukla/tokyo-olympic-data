
let users = [];
//get users from server
//Display users
let getAllUsers = () => {
    let serverUrl = 'https://jsonplaceholder.typicode.com/users';
    return axios.get(serverUrl);
};
let displayUsers = () => {
    setTimeout( () => {
        let tableBodyEl = document.querySelector('#table-body');
        let tableRowEl = "";
        for(let user of users) {
            tableRowEl += `<tr>
                              <td>${user.id}</td>
                              <td>${user.name}</td>
                              <td>${user.email}</td>
                              <td>${user.address.city}</td>
                              <td>${user.phone}</td>
                              <td>${user.company.name}</td>
                           </tr>`
        }
        tableBodyEl.innerHTML = tableRowEl;
    }, 1000);
};

// //call function with promise concept
// getAllUsers().then( (response) => {
//     users = response.data;
//     displayUsers(users);
// }).catch( (error) => {
//     console.warn(error);
// });

let init = async () => {
    try{
        let response = await getAllUsers();
        if(response) {
            users = response.data;
            displayUsers(users);
        }
    } 
    catch(error){
        console.warn(error);
        document.querySelector('#error-msg').textContent = error.message;
    }
};
init();