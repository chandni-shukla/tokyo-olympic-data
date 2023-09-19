//validate form inputs before adding submiting data
let validateForm = () => {
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let address = document.getElementById('address').value;
    let email = document.getElementById('email').value;
    let button = document. querySelector('#update');
    button.ariaDisabled = true;

    if(name == "") {
        alert("Name is required");
        return false;
    };

    if(age == "") {
        alert("Age is required");
        return false;
    }
    else if(age < 1){
        alert("Age must not be zero or less than zero");
        return false;
    }

    if(address == "") {
        alert("Address is required");
        return false;
    }
    if(email == "") {
        alert("Email is required");
        return false;
    }
    else if(!email.includes("@")) {
        alert("Invalid email address");
        return false;
    }
    return true;
};
//function to show Data
let showData = ()  => {
    let peopleList;
    if(localStorage.getItem("peopleList") == null) {
        peopleList = [];
    }
    else{
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }
    let html = "";
    peopleList.forEach(function (element, index) {
        html += "<tr>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.age + "</td>";               
        html += "<td>" + element.address + "</td>";
        html += "<td>" + element.email + "</td>";    
        html += '<td><button onclick = "deleteData ('+ index +')" class="btn btn-danger">Delete</button><button onclick = "updateData ('+ index +')" class="btn btn-warning m-2">Edit</button></td>';
        // html += '<td><button onclick = "updateData" class="btn btn-primary m-2" onclick="Edit">Update</button></td>'
        html +=  "</tr>"; 

    });
    document.querySelector('#crudTable tbody').innerHTML = html;
};

//Loads all data when from local storage document or page loaded
document.onload = showData();

//function to add data to local storage
 let AddData = () => {
    //if form is validate
    if(validateForm() == true) {
        let name = document.getElementById("name").value;
        let age = document.getElementById("age").value;
        let address = document.getElementById("address").value;
        let email = document.getElementById("email").value;

        let peopleList;
        if(localStorage.getItem("peopleList") == null) {
          peopleList = [];
        }
        else{
            peopleList = JSON.parse(localStorage.getItem("peopleList"));
        }
        peopleList.push({
            name : name,
            age : age,
            address : address,
            email : email,
        });
        localStorage.setItem("peopleList", JSON.stringify(peopleList));
        showData();
        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("address").value = "";
        document.getElementById("email").value = "";   
    }
 };

 //function to delete data to local storage
 let deleteData = (index) => {
    let peopleList;
    if(localStorage.getItem("peopleList") == null) {
        peopleList = [];
    }
    else{
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }
    peopleList.splice(index, 2);
    localStorage.setItem("peopleList", JSON.stringify(peopleList));
    showData();   
 }

 // Function to update/edit data in local storage
let updateData = (index) => {
    let peopleList;
    if (localStorage.getItem("peopleList") == null) {
        peopleList = [];
    } else {
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }

    // Set the form fields with the data to be edited
    document.getElementById("name").value = peopleList[index].name;
    document.getElementById("age").value = peopleList[index].age;
    document.getElementById("address").value = peopleList[index].address;
    document.getElementById("email").value = peopleList[index].email;

    // Remove the old data from the list
    peopleList.splice(index, 1);

    // Update button click event
    document.querySelector("#submit").style.display = "none"; // Hide the submit button
    document.querySelector("#update").style.display = "block"; // Show the update button

    // Function to handle the update button click
    document.querySelector("#update").onclick = function () {
        if (validateForm() == true) {
            // Update the data with new values
            let updatedData = {
                name: document.getElementById("name").value,
                age: document.getElementById("age").value,
                address: document.getElementById("address").value,
                email: document.getElementById("email").value,
            };

            // Push the updated data back to the list
            peopleList.push(updatedData);

            // Store the updated list in local storage
            localStorage.setItem("peopleList", JSON.stringify(peopleList));

            // Show the updated data
            showData();

            // Clear the form fields
            document.getElementById("name").value = "";
            document.getElementById("age").value = "";
            document.getElementById("address").value = "";
            document.getElementById("email").value = "";

            // Hide the update button and show the submit button
            document.querySelector("#submit").style.display = "block";
            document.querySelector("#update").style.display = "none";
        }
    }

}