const form = document.querySelector('form');
const btn = document.querySelector('.plus');
const todayDate = document.querySelector('.current_date');
const todoList = document.querySelector('.todoList');
const doneList = document.querySelector('.doneList');

// const toDo = document.querySelector(".todoList");
// const done = document.querySelector(".doneList");

const init = () => {
  form.addEventListener('submit', addTodoItem);
};

const addTodoItem = () => {
  event.preventDefault();
  const todoContent = document.querySelector('.todoInput').value;
  if (todoContent) printTodoItem(todoContent);
};

// to do list
const printTodoItem = (text) => {
  const newTodo = document.createElement('li');
  const checkBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');

  checkBtn.innerHTML = '<img src="image/checkbox.png">';
  deleteBtn.innerHTML = '<img src="image/delete.png">';

  checkBtn.className = checkBtn;
  deleteBtn.className = deleteBtn;

  // input -> to do list로 이동
  newTodo.innerText = text;

  // newTodo에 자식 요소 추가
  newTodo.appendChild(deleteBtn);
  newTodo.appendChild(checkBtn);

  // html과 js 연결 과정. newTodo를 html의 todoList의 자식 요소로 추가
  document.querySelector('.todoList').appendChild(newTodo);
  document.querySelector('.todoInput').value = ''; // input content 초기화

  //delete button에 대한 event 추가
  deleteBtn.addEventListener('click', deleteTodoItem);

  //check button에 대한 event 추가
  checkBtn.addEventListener('click', toggleTodo2Done);
};

// to do list의 item 삭제
const deleteTodoItem = (e) => {
  const target = e.target.parentNode.parentNode; // target: img -> button -> li
  document.querySelector('.todoList').removeChild(target);
};

const deleteDoneItem = (e) => {
  const target = e.target.parentNode.parentNode; // target: img -> button -> li
  document.querySelector('.doneList').removeChild(target);
};

// to do list -> done List
const toggleTodo2Done = (e) => {
  // (1) to do list에서 삭제
  deleteTodoItem(e);
  // (2) done list에 추가
  const parent = e.target.parentNode.parentNode; // target: img -> button -> li
  printDoneItem(parent.innerText); // li의 innertext를 done에 대입
};

// done list
const printDoneItem = (text) => {
  const doneItem = document.createElement('li');
  const checkBtn = document.createElement('button');

  checkBtn.innerHTML = '<img src="image/donebox.png">';

  // to do list -> done list 이동
  doneItem.innerText = text;
  // doneItem에 자식 요소 추가
  doneItem.appendChild(checkBtn);
  // html과의 연결 과정 -> doneList에 doneItem을 자식 요소로 추가
  document.querySelector('.doneList').appendChild(doneItem);

  checkBtn.addEventListener('click', toggleDone2Todo);
};

const toggleDone2Todo = (e) => {
  // (1) done List에서 삭제
  deleteDoneItem(e);
  /// (2) to do List에 추가
  const parent = e.target.parentNode.parentNode;
  printTodoItem(parent.innerText);
};

// popup box 영역
const displayForm = () => {
  console.log(form.style.disply);
  if (form.style.display == 'block') {
    form.style.display = 'none';
  } else {
    form.style.display = 'block';
  }
};

btn.addEventListener('click', displayForm);

// today date 함수
const currentDate = () => {
  let today = new Date();

  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();

  console.log(month);
  month = monthEng(month);

  todayDate.innerHTML = month + ' ' + day + ', ' + year;
};

const monthEng = (month) => {
  switch (month) {
    case 1:
      month = 'Jan';
      break;
    case 2:
      month = 'Feb';
      break;
    case 3:
      month = 'Mar';
      break;
    case 4:
      month = 'April';
      break;
    case 5:
      month = 'May';
      break;
    case 6:
      month = 'Jun';
      break;
    case 7:
      month = 'July';
    case 8:
      month = 'Aug';
    case 9:
      month = 'Sep';
    case 10:
      month = 'Oct';
    case 11:
      month = 'Nov';
    case 12:
      month = 'Dec';
    default:
      month = '어차피 5월일텐데 머.. 어쩔';
  }
  return month;
};
// const saveTodos = localStorage.getItem('.todoList');
// if (saveTodos !== null) {
//   const parsedTodos = JSON.parse(savedTodos);
//   toDos = parsedTodos;
//   parsedTodos.forEach(printTodoItem);
// }

// date 객체를 YYYY-MM-DD형식으로 포맷하고, [YYYY,MM,DD]의 배열에 return
// const dateFormat = () => {
//   const date = new Date();
//   return date.toLocaleDateString().replace(/\./g, '').split(' ');
// };

// const getCalender = () => {
//   const date = new Date();
//   // 현재의 연도, 월 받아오기
//   const [nowYear, nowMonth] = dateFormat(date);
//   // 지난 달의 마지막 요일 받아오기
//   const prevDay = new Date(nowYear, nowMonth - 1, 1).getDay();
//   // 이벜 달이 마지막 날 가져오기
//   const lastDay = dateFormat(new Date(nowYear, nowMonth, 0))[2] * 1;

//   // html에 표시될 부분
//   // 지난 달 날짜 표시
//   for (let i = 0; i < prevDay; i++) {
//     const prevElement = document.createElement('div');
//     prevElement.innertext = i;
//   }
//   // 이번 달 날짜 표시
//   for (let i = 1; i <= lastDay; i++) {
//     const thisElement = document.createElement('div');
//     thisElement.innerText = i;
//   }
//   const maxDay = prevDay + lastDay;
//   const nextDay = Math.ceil(maxDay / 7) * 7 - maxDay;

//   for (let i = 0; i < nextDay; i++) {
//     const nextElement = document.createElement('div');
//     nextElement.innertext = 'test';
//   }

//   document.querySelector('.dateBoard').appendChild(prevElement);
//   document.querySelector('.dateBoard').appendChild(thisElement);
//   document.querySelector('.dateboard').appendChild(nextElement);

//   let month = monthEng(parseInt(nowMonth));
//   console.log(month);
// };

// getCalender();
// date.setMonth(date.getMonth() - 1);

init(); // 시작 함수
currentDate();
