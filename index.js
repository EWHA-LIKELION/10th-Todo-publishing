const form = document.querySelector(".todo-form");

const init = () => {
  form.addEventListener("submit", addTodoItem);
  // form.addEventListener("submit", addTodoContent);
};

const button = document.querySelector(".todo-input-button");

// 입력된 title 을 todo title list에 추가
const addTodoItem = () => {
  event.preventDefault();
  const todoTitle = document.querySelector(".todo-input-title").value;
  const todoContent = document.querySelector(".todo-input-content").value;
  if (todoTitle) printTodoItem(todoTitle,todoContent);
};

// // 입력된 content 을 content list에 추가
// const addTodoContent = () => {
//   event.preventDefault();
//   const todoContent = document.querySelector(".todo-input-content").value;
//   if (todoContent) printTodoItem(todoContent);
// };

// 화면에 todo item을 추가
const printTodoItem = (title,content) => {
  const newTodo = document.createElement("div");
  const newTodoTitle = document.createElement("span");
  const newTodoContent = document.createElement("span");
  // const todoDel = document.createElement("button");

  // todo title 텍스트 추가
  newTodoTitle.innerText = title;
  newTodoTitle.className = "todo-item-title";
  // newTodoTitle.addEventListener("click", toggleTodoToDone);

  // todo content 텍스트 추가
  newTodoContent.innerText = content;
  newTodoContent.className = "todo-item-content";
  // newTodoContent.addEventListener("click", toggleTodoToDone);


  // // todo item 삭제 버튼 추가
  // todoDel.innerText = "삭제";
  // todoDel.className = "todo-delete-button";
  // todoDel.addEventListener("click", deleteTodoItem);

  // li에 item 추가
  newTodo.className = "todo-list-item";
  newTodo.appendChild(newTodoTitle);
  newTodo.appendChild(newTodoContent);
  // newTodo.appendChild(todoDel);

  
};

// const deleteTodoItem = e => {
//     const target = e.target.parentNode;
//     document.querySelector(".todo-list").removeChild(target);
// };

// const toggleTodoToDone = e => {
//     deleteTodoItem(e);
//     printDoneItem(e.target.innerText);
// }

// const printDoneItem = text => {
//     const newTodoDone = document.createElement("li");
//     const newTodoText = document.createElement("span");

//     newTodoText.innerText = text;
//     newTodoText.className = "done-item-text";
//     newTodoText.addEventListener("click", toggleDoneToTodo);

//     newTodoDone.className ="done-list-item";
//     newTodoDone.appendChild(newTodoText);

//     document.querySelector(".done-list").appendChild(newTodoDone);
// };

// const deleteDoneItem = e => {
//     const target = e.target.parentNode;
//     document.querySelector(".done-list").removeChild(target);
// };

// const toggleDoneToTodo = e => {
//     deleteDoneItem(e);
//     printTodoItem(e.target.innerText);
// };


init();
document.querySelector(".todo-list").appendChild(newTodo);
document.querySelector(".todo-input-title").value = "";
document.querySelector(".todo-input-content").value = "";