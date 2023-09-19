let formEl = document.querySelector('#register-form');
formEl.addEventListener('submit', (e) => {
    e.preventDefault();//stop the page refresh form submission
    let userName = document.querySelector('#user-input').value;
    let email = document.querySelector('#email-input').value;
    let password = document.querySelector('#password-input').value;
    let user = {
        userName,email,password
    };
    console.log(user);
});