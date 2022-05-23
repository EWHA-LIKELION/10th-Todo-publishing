let now = new Date();
let year = now.getFullYear();
let month = now.getMonth() + 1;
let date = now.getDate();
let today = document.querySelector(".today");
const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = now.getDay();

document.getElementById("date-title").innerHTML = year + " / " + month;

document.getElementById("num-b3").innerHTML = date - 3;
if (day < 3) document.getElementById("day-b3").innerHTML = week[day - 3 + 7];
else document.getElementById("day-b3").innerHTML = week[day - 3];

document.getElementById("num-b2").innerHTML = date - 2;
if (day < 2) document.getElementById("day-b2").innerHTML = week[day - 2 + 7];
else document.getElementById("day-b2").innerHTML = week[day - 2];

document.getElementById("num-b1").innerHTML = date - 1;
if (day < 1) document.getElementById("day-b1").innerHTML = week[day - 1 + 7];
else document.getElementById("day-b1").innerHTML = week[day - 1];

document.getElementById("num-today").innerHTML = date;
document.getElementById("day-today").innerHTML = week[day];

document.getElementById("num-a1").innerHTML = date + 1;
if (day > 5) document.getElementById("day-a1").innerHTML = week[day + 1 - 7];
else document.getElementById("day-a1").innerHTML = week[day + 1];

document.getElementById("num-a2").innerHTML = date + 2;
if (day > 4) document.getElementById("day-a2").innerHTML = week[day + 2 - 7];
else document.getElementById("day-a2").innerHTML = week[day + 2];

document.getElementById("num-a3").innerHTML = date + 3;
if (day > 3) document.getElementById("day-a3").innerHTML = week[day + 3 - 7];
else document.getElementById("day-a3").innerHTML = week[day + 3];

const form = document.querySelector(".todo-form");
const input = document.querySelector(".todo-input");
const button = document.querySelector(".popup-button");

const init = () => {
  form.addEventListener("submit", addTodoItem);
};

const displayForm = () => {
  //if (form.stlye.display == "none") form.style.display = "block";
  //else form.style.display == "none";
  form.style.display == "block"
    ? (form.style.display = "none")
    : (form.style.display = "block");
};
button.addEventListener("click", displayForm);

const printTodoItem = (todoContentObj) => {
  const newTodo = document.createElement("li");
  const newTodoCircle = document.createElement("img");
  const newTodoText = document.createElement("span");
  const todoDel = document.createElement("button");

  newTodoText.innerText = todoContentObj.text;
  newTodoText.id = todoContentObj.id;
  newTodoText.className = "todo-item-text";

  newTodoCircle.className = "todo-circle";
  newTodoCircle.setAttribute("src", "images/circle_empty.png");
  newTodoCircle.addEventListener("click", toggleTodoToDone);

  todoDel.innerText = "x";
  todoDel.className = "todo-delete-button";
  todoDel.addEventListener("click", deleteFromArray);

  newTodo.className = "todo-list-item";
  newTodo.appendChild(newTodoCircle);
  newTodo.appendChild(newTodoText);
  newTodo.appendChild(todoDel);

  document.querySelector(".todo-list").appendChild(newTodo);
};

const reprintTodoItem = (span) => {
  const newTodo = document.createElement("li");
  const newTodoCircle = document.createElement("img");
  const newTodoText = document.createElement("span");
  const todoDel = document.createElement("button");

  newTodoText.innerText = span.innerText;
  newTodoText.id = span.id;
  newTodoText.className = "todo-item-text";

  newTodoCircle.className = "todo-circle";
  newTodoCircle.setAttribute("src", "images/circle_empty.png");
  newTodoCircle.addEventListener("click", toggleTodoToDone);

  todoDel.innerText = "x";
  todoDel.className = "todo-delete-button";
  todoDel.addEventListener("click", deleteFromArray);

  newTodo.className = "todo-list-item";
  newTodo.appendChild(newTodoCircle);
  newTodo.appendChild(newTodoText);
  newTodo.appendChild(todoDel);

  document.querySelector(".todo-list").appendChild(newTodo);
};

const deleteTodoItem = (e) => {
  const target = e.target.parentNode;
  document.querySelector(".todo-list").removeChild(target);
};

const toggleTodoToDone = (e) => {
  deleteTodoItem(e);
  var li = e.target.parentNode;
  var span = li.childNodes[1];
  for (var i = 0; i < toDos.length; i++) {
    if (span.innerText == toDos[i].text) {
      toDos[i].place = "done";
    }
  }
  doneListNum = document.querySelector(".done-list").childElementCount;
  if (doneListNum <= 8) reprintDoneItem(span);
  saveTodo();
};

const printDoneItem = (todoContentObj) => {
  const doneItem = document.createElement("li");
  const doneItemCircle = document.createElement("img");
  const doneItemText = document.createElement("span");
  const doneDel = document.createElement("button");

  doneItemText.innerText = todoContentObj.text;
  doneItemText.id = todoContentObj.id;
  doneItemText.className = "done-item-text";

  doneItemCircle.className = "done-circle";
  doneItemCircle.setAttribute("src", "images/circle_full.png");
  doneItemCircle.addEventListener("click", toggleDoneToTodo);

  doneDel.innerText = "x";
  doneDel.className = "done-delete-button";
  doneDel.addEventListener("click", deleteFromArray);

  doneItem.className = "done-list-item";
  doneItem.appendChild(doneItemCircle);
  doneItem.appendChild(doneItemText);
  doneItem.appendChild(doneDel);

  document.querySelector(".done-list").appendChild(doneItem);
};

const reprintDoneItem = (span) => {
  const doneItem = document.createElement("li");
  const doneItemCircle = document.createElement("img");
  const doneItemText = document.createElement("span");
  const doneDel = document.createElement("button");

  doneItemText.innerText = span.innerText;
  doneItemText.id = span.id;
  doneItemText.className = "done-item-text";

  doneItemCircle.className = "done-circle";
  doneItemCircle.setAttribute("src", "images/circle_full.png");
  doneItemCircle.addEventListener("click", toggleDoneToTodo);

  doneDel.innerText = "x";
  doneDel.className = "done-delete-button";
  doneDel.addEventListener("click", deleteFromArray);

  doneItem.className = "done-list-item";
  doneItem.appendChild(doneItemCircle);
  doneItem.appendChild(doneItemText);
  doneItem.appendChild(doneDel);

  document.querySelector(".done-list").appendChild(doneItem);
};

const toggleDoneToTodo = (e) => {
  deleteDoneItem(e);
  var li = e.target.parentNode;
  var span = li.childNodes[1];
  for (var i = 0; i < toDos.length; i++) {
    if (span.innerText == toDos[i].text) {
      toDos[i].place = "todo";
    }
  } //토글 순서 유지 안됨
  todoListNum = document.querySelector(".todo-list").childElementCount;
  if (todoListNum <= 8) reprintTodoItem(span);
  saveTodo();
};

const deleteDoneItem = (e) => {
  const target = e.target.parentNode;
  document.querySelector(".done-list").removeChild(target);
};

let toDos = [];

const deleteFromArray = (e) => {
  const target = e.target.parentNode;
  if (target.className == "todo-list-item") {
    deleteTodoItem(e);
  }
  if (target.className == "done-list-item") {
    deleteDoneItem(e);
  }
  const span = target.childNodes[1];
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(span.id));
  saveTodo();
};

const addTodoItem = () => {
  todoListNum = document.querySelector(".todo-list").childElementCount;
  event.preventDefault();
  const todoContent = input.value;
  const todoContentObj = {
    text: todoContent,
    id: Date.now(),
    place: "todo",
  };
  if (todoContent && todoListNum <= 8) {
    printTodoItem(todoContentObj);
    input.value = "";
    toDos.push(todoContentObj);
    saveTodo();
  } else alert("최대 8개까지만 입력할 수 있습니다.");
};

const saveTodo = () => {
  localStorage.setItem("todos", JSON.stringify(toDos));
  console.log(toDos);
};
const savedTodos = localStorage.getItem("todos");
toDos = JSON.parse(savedTodos);
if (savedTodos) {
  const parsedTodos = JSON.parse(savedTodos);
  //console.log(parsedTodos);
  for (var i = 0; i < toDos.length; i++) {
    if (toDos[i].place == "todo") printTodoItem(toDos[i]);
    if (toDos[i].place == "done") printDoneItem(toDos[i]);
  }
}

init();
