const form = document.querySelector(".todo-form");

const init = () => {
  form.addEventListener("submit", addTodoItem);
};


const button = document.querySelector(".popup-button");

const displayForm= () => {
    if (form.style.display == 'block')
        form.style.display = "none";
    else form.style.display = 'block';
};

button.addEventListener("click",displayForm);

// 입력된 값을 todo list에 추가
const addTodoItem = () => {
  event.preventDefault();
  const todoContent = document.querySelector(".todo-input").value;
  if (todoContent) printTodoItem(todoContent);
};

// 화면에 todo item을 추가
const printTodoItem = text => {
  const newTodo = document.createElement("li");
  const newTodoText = document.createElement("span");
  const todoDel = document.createElement("button");

  // todo item 텍스트 추가
  newTodoText.innerText = text;
  newTodoText.className = "todo-item-text";
  newTodoText.addEventListener("click", toggleTodoToDone);

  // todo item 삭제 버튼 추가
  todoDel.innerText = "삭제";
  todoDel.className = "todo-delete-button";
  todoDel.addEventListener("click", deleteTodoItem);

  // li에 item 추가
  newTodo.className = "todo-list-item";
  newTodo.appendChild(newTodoText);
  newTodo.appendChild(todoDel);

  document.querySelector(".todo-list").appendChild(newTodo);
  document.querySelector(".todo-input").value = "";
};

const deleteTodoItem = e => {
    const target = e.target.parentNode;
    document.querySelector(".todo-list").removeChild(target);
};

const toggleTodoToDone = e => {
    deleteTodoItem(e);
    printDoneItem(e.target.innerText);
}

const printDoneItem = text => {
    const newTodoDone = document.createElement("li");
    const newTodoText = document.createElement("span");

    newTodoText.innerText = text;
    newTodoText.className = "done-item-text";
    newTodoText.addEventListener("click", toggleDoneToTodo);

    newTodoDone.className ="done-list-item";
    newTodoDone.appendChild(newTodoText);

    document.querySelector(".done-list").appendChild(newTodoDone);
};

const deleteDoneItem = e => {
    const target = e.target.parentNode;
    document.querySelector(".done-list").removeChild(target);
};

const toggleDoneToTodo = e => {
    deleteDoneItem(e);
    printTodoItem(e.target.innerText);
};


init();
