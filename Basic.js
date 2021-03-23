// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listners
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', btnCheck)

// Functions
function addTodo(e) {
    e.preventDefault();

    // On Click will create new HTML element
    // DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // Item
    const todoItem = document.createElement('li');
    // todoItem.innerText = 'Hello';
    // Getting text from input
    todoItem.innerText = todoInput.value;
    todoItem.classList.add('todo-item');
    todoDiv.appendChild(todoItem);

    // Check Button
    const checkButton = document.createElement('button');
    checkButton.classList.add('check-button');
    checkButton.innerHTML = '<i class="fas fa-check"></i>';
    todoDiv.appendChild(checkButton);
    // Delete Button
    const delButton = document.createElement('button');
    delButton.innerHTML = '<i class="fas fa-trash"></i>';
    delButton.classList.add('del-button');
    todoDiv.appendChild(delButton);

    // Add to List
    todoList.appendChild(todoDiv);
    // Clear Input
    todoInput.value = '';
}

function btnCheck(e) {
    // console.log(e.target);
    // checks where you clickin
    const item = e.target;

    // Delete Button Functionality
    if (item.classList[0] === 'del-button') {
        // parent element to remove the parent
        const todo = item.parentElement;
        todo.remove();
    }

    // Check Button Functionality
    if (item.classList[0] === 'check-button') {
        const todo = item.parentElement;
        todo.classList.toggle('completed')    
    }

}