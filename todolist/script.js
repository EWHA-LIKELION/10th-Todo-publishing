const form = document.querySelector('.todo-form');
var todoNum = 0;
var doneNum = 0;
var now = new Date();
var year = now.getFullYear();
var month = now.getMonth() + 1;
var date = now.getDate();
var today = document.querySelector('.today');

// 이전 달의 마지막 날 날짜와 요일 구하기
var startDay = new Date(year, month - 1, 0);
var prevDate = startDay.getDate();
var prevDay = startDay.getDay();

// 이번 달의 마지막날 날짜와 요일 구하기
var endDay = new Date(year, month, 0);
var nextDate = endDay.getDate();
var nextDay = endDay.getDay();
console.log(prevDate, prevDay, nextDate, nextDay);

const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let day = now.getDay();
document.querySelectorAll('.tap-btn')[0].onclick = () => {
  document.querySelectorAll('.tap-btn')[0].classList.remove('here');
  document.querySelectorAll('.tap-btn')[1].classList.remove('here');
  document.querySelectorAll('.tap-btn')[2].classList.remove('here');
  document.querySelectorAll('.tap-btn')[0].classList.add('here');
  document.querySelector('.done-area').style.display = 'block';
  document.querySelector('.to-do-list-area').style.display = 'block';
  document.querySelector('.monthly-area').style.display = 'none';
};
document.querySelectorAll('.tap-btn')[1].onclick = () => {
  document.querySelectorAll('.tap-btn')[0].classList.remove('here');
  document.querySelectorAll('.tap-btn')[1].classList.remove('here');
  document.querySelectorAll('.tap-btn')[2].classList.remove('here');
  document.querySelectorAll('.tap-btn')[1].classList.add('here');
  document.querySelector('.done-area').style.display = 'none';
  document.querySelector('.to-do-list-area').style.display = 'none';
  document.querySelector('.monthly-area').style.display = 'none';
};
document.querySelectorAll('.tap-btn')[2].onclick = () => {
  document.querySelectorAll('.tap-btn')[0].classList.remove('here');
  document.querySelectorAll('.tap-btn')[1].classList.remove('here');
  document.querySelectorAll('.tap-btn')[2].classList.remove('here');
  document.querySelectorAll('.tap-btn')[2].classList.add('here');
  document.querySelector('.done-area').style.display = 'none';
  document.querySelector('.to-do-list-area').style.display = 'none';
  document.querySelector('.monthly-area').style.display = 'block';
  document.querySelectorAll('.monthly-area').style = 'z-index:8;';
};
var a = 3;
document.querySelector('.turnleft').onclick = () => {
  a -= 1;
  console.log(2);
  for (let i = 0; i < 7; i++) {
    document.querySelectorAll('.datebox')[i].classList.remove('check');
    document.querySelectorAll('.dayofweek')[i].classList.remove('checktext');
    document.querySelectorAll('.date')[i].classList.remove('checktext');
  }
  if (a < 0) {
    a = 0;
    date -= 1;
    day -= 1;
    if (day < 0) {
      day += 7;
    }
    if (date - 3 == 0) {
      date = prevDate;
      month -= 1;
      day = prevDay;
      console.log(month);
    }
    printdate(date);
  }

  document.querySelectorAll('.datebox')[a].classList.add('check');
  document.querySelectorAll('.dayofweek')[a].classList.add('checktext');
  document.querySelectorAll('.date')[a].classList.add('checktext');
};
document.querySelector('.turnright').onclick = (e) => {
  a += 1;
  console.log(3);
  for (let i = 0; i < 7; i++) {
    document.querySelectorAll('.datebox')[i].classList.remove('check');
    document.querySelectorAll('.dayofweek')[i].classList.remove('checktext');
    document.querySelectorAll('.date')[i].classList.remove('checktext');
  }
  if (a > 6) {
    a = 6;
    date += 1;
    day += 1;
    if (day > 6) {
      day -= 7;
    }
    if (date + 3 == nextDate) {
      date = 1;
      month += 1;
      day = nextDay + 1;
    }
    printdate(date);
  }
  document.querySelectorAll('.datebox')[a].classList.add('check');
  document.querySelectorAll('.dayofweek')[a].classList.add('checktext');
  document.querySelectorAll('.date')[a].classList.add('checktext');
};

var nowdate = new Date();
var Cyear = nowdate.getFullYear();
var Cmonth = nowdate.getMonth() + 1;
var Cdate = nowdate.getDate();

// 달력 생성
const makeCalendar = (Cyear, Cmonth) => {
  // 현재의 년도와 월 받아오기
  const [nowYear, nowMonth] = [Cyear, Cmonth];

  // 이전 달의 마지막 날 날짜와 요일 구하기
  var CstartDay = new Date(Cyear, Cmonth - 1, 0);
  var CprevDate = CstartDay.getDate();
  var CprevDay = CstartDay.getDay();

  // 현재 월의 마지막 날 구하기
  var CendDay = new Date(Cyear, Cmonth, 0);
  var CnextDate = CendDay.getDate();
  var CnextDay = CendDay.getDay();
  console.log(CprevDate, CprevDay, CnextDate, CnextDay);
  let htmlDummy = '';

  // 전달 날짜 표시하기
  if (CprevDay == 6) {
  } else {
    for (let i = 0; i <= CprevDay; i++) {
      htmlDummy += `<div class="noColor"></div>`;
    }
  }

  // 현재 날짜 표시하기
  for (let i = 1; i <= CnextDate; i++) {
    htmlDummy += `<div>${i}</div>`;
  }

  // 지금까지 추가한 날짜 박스
  const maxDay = CprevDay + CnextDate;

  // 마지막날이 들어있는 열에 남은 박스 채우기
  const CalnextDay = Math.ceil(maxDay / 7) * 7 - maxDay;

  document.querySelector(`.dateBoard`).innerHTML = htmlDummy;
  document.querySelector(`.dateTitle`).innerText = `${nowYear}년 ${nowMonth}월`;
};

// Date 객체를 보내서 달력 생성
makeCalendar(Cyear, Cmonth);

// 이전달 이동
document.querySelector(`.prevDay`).onclick = () => {
  if (Cmonth == 1) {
    Cmonth = 12;
    Cyear -= 1;
  } else {
    Cmonth -= 1;
  }
  makeCalendar(Cyear, Cmonth);
};

// 다음달 이동
document.querySelector(`.nextDay`).onclick = () => {
  if (Cmonth == 12) {
    Cmonth = 1;
    Cyear += 1;
  } else {
    Cmonth += 1;
  }
  makeCalendar(Cyear, Cmonth);
};
console.log(year + ' / ' + month);
const printdate = (date) => {
  document.getElementById('day-b3').innerHTML = date - 3;
  if (day < 3) document.getElementById('num-b3').innerHTML = week[day - 3 + 7];
  else document.getElementById('num-b3').innerHTML = week[day - 3];

  document.getElementById('day-b2').innerHTML = date - 2;
  if (day < 2) document.getElementById('num-b2').innerHTML = week[day - 2 + 7];
  else document.getElementById('num-b2').innerHTML = week[day - 2];

  document.getElementById('day-b1').innerHTML = date - 1;
  if (day < 1) document.getElementById('num-b1').innerHTML = week[day - 1 + 7];
  else document.getElementById('num-b1').innerHTML = week[day - 1];

  document.getElementById('day-today').innerHTML = date;
  document.getElementById('num-today').innerHTML = week[day];

  document.getElementById('day-a1').innerHTML = date + 1;
  if (day > 5) document.getElementById('num-a1').innerHTML = week[day + 1 - 7];
  else document.getElementById('num-a1').innerHTML = week[day + 1];

  document.getElementById('day-a2').innerHTML = date + 2;
  if (day > 4) document.getElementById('num-a2').innerHTML = week[day + 2 - 7];
  else document.getElementById('num-a2').innerHTML = week[day + 2];

  document.getElementById('day-a3').innerHTML = date + 3;
  if (day > 3) document.getElementById('num-a3').innerHTML = week[day + 3 - 7];
  else document.getElementById('num-a3').innerHTML = week[day + 3];
};

//todo 리스트 개수
const printTodonum = () => {
  document.querySelector('.v93_469').innerHTML = '(' + todoNum + ')';
};
//done 리스트 개수
const printdonenum = () => {
  document.querySelector('.done-num').innerHTML = '(' + doneNum + ')';
};
const init = () => {
  form.addEventListener('submit', addTodoItem);
  printdate(date);
  printTodonum();
  printdonenum();
};
//모달창 열기
const open = () => {
  document.querySelector('.modal').classList.remove('hidden');
};
//모달창 닫기
const close = () => {
  document.querySelector('.modal').classList.add('hidden');
};
//모달창 카테고리 정하기는 버튼
var color = 'black';
const bnt1 = document.getElementById('a');
const bnt2 = document.getElementById('b');
const bnt3 = document.getElementById('c');
const bnt4 = document.getElementById('d');
//모달창 카테고리 클릭
bnt1.onclick = () => {
  color = '#0032B4';
  console.log(1);
};
bnt2.onclick = () => {
  color = '#FFC700';
  console.log(2);
};
bnt3.onclick = () => {
  color = '#3C924A';
  console.log(3);
};
bnt4.onclick = () => {
  color = '#FF5C00';
  console.log(4);
};
const addTodoItem = () => {
  event.preventDefault();
  const todoContentTitle = document.querySelector('.todo-input').value;
  const todoContentDetail = document.querySelector('.todo-detail-input').value;
  if (todoContentTitle)
    printTodoItem(todoContentTitle, todoContentDetail, color);
};

// 화면에 todo item을 추가
const printTodoItem = (title, detail, color) => {
  const newTodo = document.createElement('div');
  const newTodoCate = document.createElement('div');
  const newTodoText = document.createElement('div');
  const newTodoBtn = document.createElement('div');
  const newTodoTitle = document.createElement('span');
  const newTodoDetail = document.createElement('span');
  const br = document.createElement('br');
  const todoCheck = document.createElement('input');
  const todoDel = document.createElement('img');

  // todo item 텍스트 추가
  newTodoTitle.innerText = title;
  newTodoTitle.className = 'todo-item-text';
  newTodoText.style.cssText = 'overflow-y:auto';
  newTodoText.className = 'todotext';

  // todo item detail 텍스트 추가
  newTodoDetail.innerText = detail;
  newTodoDetail.className = 'todo-item-detail-text';
  newTodoDetail.style.cssText =
    // todo item checkbox 버튼 추가
    todoCheck.type = 'checkbox';
  todoCheck.className = 'todo-check-box';

  todoCheck.addEventListener('click', function () {
    const is_checked = todoCheck.checked;
    if (is_checked) {
      newTodoTitle.style.cssText +=
        'text-decoration:line-through;color: #8b8b8b;';
      printDoneItem(title, detail, color);
      doneNum += 1;
      printdonenum();
    }
  });

  // todo item 삭제 버튼 추가
  todoDel.src = 'delete 3.png';
  todoDel.className = 'todo-delete-button';
  todoDel.addEventListener('click', deleteTodoItem);

  newTodoText.appendChild(newTodoTitle);
  newTodoText.appendChild(br);
  newTodoText.appendChild(newTodoDetail);

  newTodoBtn.appendChild(todoCheck);
  newTodoBtn.appendChild(todoDel);
  // li에 item 추가
  newTodo.className = 'todo-list-item';
  newTodo.appendChild(newTodoCate);
  newTodo.appendChild(newTodoText);
  newTodo.appendChild(newTodoBtn);

  console.log('background-color:' + color); //color 값 잘 넘어왔는지 확인
  //style
  newTodoCate.style.cssText = 'background-color:' + color;
  newTodoCate.style.cssText +=
    ' margin-top:10%; height: 80%;width: 6%;margin-left: 60%;';

  newTodoText.style.cssText += ' height: 80%;';
  newTodoBtn.style.cssText = 'margin-top:5%;';

  document.querySelector('.todo-list').appendChild(newTodo);
  todoNum += 1;
  printTodonum();
  document.querySelector('.todo-input').value = '';
  document.querySelector('.todo-detail-input').value = '';
};

const deleteTodoItem = (e) => {
  const target = e.target.parentNode.parentNode;
  document.querySelector('.todo-list').removeChild(target);
  todoNum -= 1;
  printTodonum();
};

const printDoneItem = (title, detail, color) => {
  event.preventDefault();
  const newDone = document.createElement('div');
  const newdoneCate = document.createElement('div');
  const newdoneText = document.createElement('div');
  const newdoneBtn = document.createElement('div');
  const newdoneTitle = document.createElement('span');
  const newdoneDetail = document.createElement('span');
  const brdone = document.createElement('br');
  const donemore = document.createElement('img');

  newdoneTitle.innerText = title;
  newdoneTitle.className = 'done-item-text';

  // todo item detail 텍스트 추가
  newdoneDetail.innerText = detail;
  newdoneDetail.className = 'done-item-detail-text';

  donemore.src = 'dots 1.png';
  donemore.className = 'done-more-button';

  newdoneText.appendChild(newdoneTitle);
  newdoneText.appendChild(brdone);
  newdoneText.appendChild(newdoneDetail);
  newdoneTitle.addEventListener('click', toggleDoneToTodo);

  newdoneBtn.appendChild(donemore);
  // li에 item 추가
  newDone.className = 'done-list-item';
  newDone.appendChild(newdoneCate);
  newDone.appendChild(newdoneText);
  newDone.appendChild(newdoneBtn);
  newdoneCate.className = 'donecate';
  newdoneText.className = 'donetext';

  newdoneCate.style.cssText += 'background-color:' + color;
  newdoneCate.style.cssText +=
    ' margin-top:20%; height: 80%;width: 14%;margin-left: 80%;';
  newdoneBtn.style.cssText = 'margin-top:30%;';
  newdoneText.style.cssText = 'margin-left:8%;overflow-y:auto';
  document.querySelector('.done-list').appendChild(newDone);
};

const toggleDoneToTodo = (e) => {
  deleteDoneItem(e);
};

const deleteDoneItem = (e) => {
  const target = e.target.parentNode.parentNode;
  document.querySelector('.done-list').removeChild(target);
  doneNum -= 1;
  printdonenum();
};
document.querySelector('.monthly-area').style.display = 'none';
init();
makeCalendar(Cyear, Cmonth);
document.querySelector('.todo-input-items').addEventListener('click', open);
document.querySelector('.close-area').addEventListener('click', close);
document.querySelector('.bg').addEventListener('click', close);
