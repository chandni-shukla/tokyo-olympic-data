let todoForm = document.querySelector('#todo-form');
todoForm.addEventListener('submit', () => {
    let todoInput = document.querySelector('#todo-input');
    let todo = todoInput.value;
    addTodo(todo.trim());
    displayTodos();
});

let addTodo = (todo) => {
    let todoList = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
    todoList.push(todo);
    localStorage.setItem('todos', JSON.stringify(todoList));
    displayTodos();
};

let displayTodos = () => {
    let todoItemEl = "";
    let todoListEl = document.querySelector('#todo-list');
    let todoList = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
    for(let todo of todoList) {
        todoItemEl += `<li class="list-group-item mt-2 list-group-item-secondary d-flex justify-content-between align-items-center">
                        <p>${todo}</p>
                        <i class="fa fa-trash"></i>
                     </li> \n`
    }
    todoListEl.innerHTML = todoItemEl;
};
displayTodos();