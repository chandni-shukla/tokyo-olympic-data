let inputElement = document.querySelector('#user-input');
inputElement.addEventListener('keyup', () => {
    let textEntered = inputElement.value;//get the value of text box
    let displayTextEl = document.querySelector('#display-text');
    displayTextEl.textContent = textEntered;
});