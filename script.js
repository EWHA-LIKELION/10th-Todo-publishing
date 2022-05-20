//월 가져오기 
let date = new Date();   
let month = document.querySelector(".month");
month.innerText = date.getMonth() + 1;  

//일 가져오기
let day = document.querySelector(".day");
day.innerText = date.getDate(); 

//요일 가져오기 Date().getDay() 반환값 0~6 (일~토)에 맞는 요일 반환하는 getToday 함수
let today = document.querySelector(".today");
today.innerText = getToday();
function getToday(){ 
    var week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']; 
    var dayOfWeek = week[date.getDay()];
        return dayOfWeek;
};

const init = () => {
    form.addEventListener("submit", addTodoItem);
};
//할 일 입력창을 숨겨두었다가 popup 버튼 누르면 나타나게 하기
const form = document.querySelector(".todo-form");
const displayForm = ()=>{ 
    if (form.style.display == "block")
        form.style.display = "none";
    else form.style.display = "block";
};
const button = document.querySelector(".popup-button");
button.addEventListener("click",displayForm);

// 입력된 값을 todo list에 추가
const addTodoItem = () => {
    todoListNum = document.querySelector(".todo-list").childElementCount; //실제 갯수보다 -1 반환 (추가하기 전에 list count 하기 때문)
    event.preventDefault(); //새로 고침 방지
    const todoContent = document.querySelector(".todo-input").value;
    if (todoContent && (todoListNum <=4)) printTodoItem(todoContent); //todo-list 최대 수 5개이므로 printTodoItem 조건에 childElementCount 값 넣어줌
    else alert("최대 5개까지 입력할 수 있습니다.");
};

// 화면에 todo item을 추가
const printTodoItem = text => {
    const newTodo = document.createElement("li");
    const todoCheck = document.createElement("button");
    const newTodoText = document.createElement("span");
    const todoDel = document.createElement("IMG");
    todoDel.setAttribute("src", "delete.svg");
    
    // todo item 텍스트 추가
    newTodoText.innerText = text;
    newTodoText.className = "todo-item-text";
    newTodoText.addEventListener("click", toggleTodoToDone); //toggleTodoToDone 아래에서 만들기

    // todo check 버튼 추가
    todoCheck.className = "todo-check-button";
    todoCheck.addEventListener("click", checkTodo);
    // checkIcon.addEventListener("click",checkTodoItem);

    // todo item 삭제 버튼 추가
    todoDel.className = "todo-delete-button";
    todoDel.addEventListener("click", deleteTodoItem); //deleteTodoItem 아래에서 만들기
    // li에 item 추가
    newTodo.className = "todo-list-item"; //todo li 태그에 class명 부여
    newTodo.appendChild(newTodoText); //todo li에 자식요소로 span태그 넣기
    newTodo.appendChild(todoDel); //todo li에 자식요소로 삭제버튼 넣기 
    newTodo.appendChild(todoCheck);

    document.querySelector(".todo-list").appendChild(newTodo); //ul에 자식 요소로 li 넣기
    document.querySelector(".todo-input").value = ""; //input 받는 곳에 계속 남아있지 않도록 비우기
};

// check 누르면, check icon 추가, 글자색 변경
const checkTodo = e =>{ // 내부에서 e 사용하는 경우 인자로 e 넣어줘야함
    //chekc icon 생성
    const checkIcon = document.createElement("IMG");
    checkIcon.setAttribute("src","check.png");
    checkIcon.className = "todo-check-icon";

    //todo-list-item li에 자식 요소로 icon 넣기
    // listItem = document.querySelector(".todo-list-item"); querySelector 쓰지 않기
    //class명이 같은 경우 querySelector 쓰면, 첫번째로 생성된 list-item 즉 첫 자식요소를 선택해서 첫번째 줄에만 적용됨
    listItem = e.target.parentNode;
    listItem.appendChild(checkIcon);

    // //todo-item-text 색상 변경, event 요소의 부모요소인 li로 올라가서, li에 속한 text가 첫 자식요소이므로, .firstChild로 선택
    listText =listItem.firstChild;
    listText.style.color = "#0200764A";
    // //check-icon 누르면, check 해제
    checkIcon.addEventListener("click",uncheckTodo);
};
//check-icon 누르면, 삭제, todo-item-tex 색상변경
const uncheckTodo = e =>{
    const checkIcon = e.target;
    checkIcon.style.display ="none";
    //document.querySelector(".todo-check-icon").remove(checkIcon);
    //class명이 같은 경우 
    listItem = e.target.parentNode;
    listText = listItem.firstChild;
    listText.style.color = "#020076";
};

//todo 삭제 버튼 누르면, list 삭제
const deleteTodoItem = e => { 
    const target = e.target.parentNode; //클릭된 삭제 버튼의 parent인 li 태그로 올라감
    document.querySelector(".todo-list").removeChild(target); //li 태그의 하위, span, button 삭제
};

//todolist에 있는 것을 클릭하면 donelist로 옮겨줌
const toggleTodoToDone = e => { //e는 함수 생성에 이용되는 매개변수
    doneListNum = document.querySelector(".done-list").childElementCount;
    // todo List 에서 item 삭제후 , done list에 item 추가 (done list가 꽉 차지 않은 경우에만 실행)
    if (doneListNum<=4){
        deleteTodoItem(e);
        printDoneItem(e.target.innerText); //done-list에 최대 5개까지 들어갈 수 있게 함
    }
    else alert("최대 5개까지 옮길 수 있습니다.");
}; //e.target == 이벤트가 발생한 태그(클릭 받은 태그)

//done list 만들기
const printDoneItem = (text) => {
    //ul 자식요소인 li, span 추가함
    const newDone = document.createElement('li');
    const newTodoText = document.createElement('span'); //todo li에서 span 안에 들어간 text를 받아옴

    newTodoText.innerText = text; //todo의 inner text를 받아옴
    newTodoText.className = 'done-item-text'; //done으로 class명 지정
    newTodoText.addEventListener('click', toggleDoneToTodo); //done list 클릭하면 done->todo로 옮겨주는 함수 만들기

    // done-list의 li에 text 넣어줌 (span)
    newDone.className = 'done-list-item';
    newDone.appendChild(newTodoText);

    doneListNum = document.querySelector(".done-list").childElementCount; //갯수 0부터 시작
    //done-list에 만들어준 newdone(li)를 넣어줌, 최대 갯수가 5이므로 5개로 제한
    if(doneListNum<=4) document.querySelector('.done-list').appendChild(newDone);
    };

    //done 목록 누르는 event가 있으면 done에서 삭제하고, todo에서 나타나게함
    const toggleDoneToTodo = (e) => { 
        todoListNum = document.querySelector(".todo-list").childElementCount; //0~4
        if(todoListNum<=4){
            deleteDoneItem(e);
            printTodoItem(e.target.innerText); //눌러진 (이벤트 발생) 목록의 innertext를 todo에 넣음
        }
        else alert("최대 5개까지 옮길 수 있습니다.");
    };

    //done 목록 누르는 event 있으면 done에서 삭제
    const deleteDoneItem = (e) => {
        const target = e.target.parentNode; //눌러진 target (span)의 부모 요소(Li)로 올라감 
        document.querySelector('.done-list').removeChild(target); // li의 자식요소인 span 삭제
    };

init();
