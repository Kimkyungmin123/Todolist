const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos=toDos.filter((toDo) => toDo.id !==parseInt(li.id));
    saveToDos();
    
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerHTML = newTodo.text;
    const button = document.createElement("button");
    button.innerHTML = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);

    toDoList.appendChild(li);
}


function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);



const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
    const parsedToDos = JSON.parse(savedTodos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}


