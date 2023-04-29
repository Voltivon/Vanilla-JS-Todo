const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");


// Submit addEventListener 
todoForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const todoInput = todoForm.elements['todo-input'];
    const todoText = todoInput.value.trim();

    if(todoText !== "") {
        const todoItem = createTodo(todoText);
        todoList.appendChild(todoItem);
        todoInput.value = "";
    }
});





// Listen for checkbox

todoList.addEventListener('change', function(e) {
    e.preventDefault();
    const checkbox = e.target;
    const todoItem = checkbox.parentElement;

    if(checkbox.checked){
        todoItem.classList.add("completed")
    }else {
        todoItem.classList.remove("completed")
    }
})


// Listen for delete

todoList.addEventListener('submit', function(e){
    e.preventDefault();
    const todoItem = todoList.elements['delete'];
    todoList.remove(todoItem.parentElement);
})






// createTodo Function

function createTodo(todoText){
    const todoItem = document.createElement("li");
    const checkBox = document.createElement("input");
    checkBox.type = 'checkbox';
    const todoTextSpan = document.createElement('span');
    const todoDeleteBtn = document.createElement('button');
    todoTextSpan.textContent = todoText;
    todoDeleteBtn.textContent = "Delete"
    todoItem.appendChild(checkBox);
    todoItem.appendChild(todoTextSpan);
    todoItem.appendChild(todoDeleteBtn);
    return todoItem;
}

