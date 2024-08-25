const todoForm = document.querySelector('#todoForm'); 
const todoItems = document.querySelector('.todoItems');

todoForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const formData = new FormData(todoForm);
    const todoInput = formData.get('todoInput');
    const todoItem = document.createElement('li');
    todoItem.classList.add('todoItem');
    const todoText = document.createElement('span');
    todoText.classList.add('todoText');
    const todoComplete = document.createElement('button');
    todoComplete.classList.add('todoComplete');
    const todoDelete = document.createElement('button');
    todoDelete.classList.add('todoDelete');
    todoText.innerHTML = todoInput;
    todoComplete.innerHTML = '<i class="fa-solid fa-check"></i>';
    todoDelete.innerHTML = '<i class="fa-solid fa-trash"></i>';
    todoItem.appendChild(todoText);
    todoItem.appendChild(todoComplete);
    todoItem.appendChild(todoDelete);
    todoItems.prepend(todoItem);
    todoForm.reset();
    todoDelete.addEventListener('click', ()=>{
        const confirmDelete = confirm('Are you sure you want to delete this todo?');
        if(confirmDelete){
            todoItem.remove();
        }
    })
    todoComplete.addEventListener('click', ()=>{
        todoText.classList.add('completed');
        todoComplete.classList.add('disabled');
        todoComplete.setAttribute('disabled', 'true');
    })
})