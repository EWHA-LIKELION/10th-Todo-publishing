const form = document.querySelector(".todo-form");

const init = () => {
    form.addEventListener("submit", addTodoItem);
};

const addTodoItem = () => {
    event.preventDefault();
    const todoTitle = document.querySelector(".todo-input-title").value;
    const todoContent = document.querySelector(".todo-input-content").value;
    if (todoTitle) printTodoItem(todoTitle, todoContent);
};

const printTodoItem = (title, content) => {
    
    const newTodo = document.createElement("li");
    const newTodoText = document.createElement('div');
    const newTodoTitle = document.createElement("span");
    const newTodoContent = document.createElement("span");
    // const todoDel = document.createElement("button");

    // todo title 텍스트 추가
    newTodoTitle.innerText = title;
    newTodoTitle.className = "todo-title";
    // newTodoTitle.addEventListener("click", toggleTodoToDone);

    // todo content detail 텍스트 추가
    newTodoContent.innerText = content;
    newTodoContent.className = 'todo-content';

    // // todo item checkbox 버튼 추가
    // todoCheck.type = 'checkbox';
    // todoCheck.className = 'todoTodone-button';
    // todoCheck.addEventListener('click', function () {
    // const is_checked = todoCheck.checked;
    // if (is_checked) {
    //     printDoneItem(title, content);
    // } else {
    //     newTodoTitle.style.cssText = 'font-size:30px;font-weight: bold;';
    //     newTodoContent.style.cssText =
    //     'color: #8b8b8b;font-weight: Regular;font-size: 20px;';
    // }
    // });

    newTodoText.appendChild(newTodoTitle);
    // newTodoText.appendChild(br);
    newTodoText.appendChild(newTodoContent);

    // newTodoBtn.appendChild(todoCheck);
    // newTodoBtn.appendChild(todoDel);

    newTodo.className = 'todo-list-item';
    newTodo.appendChild(newTodoText);

    // document.getElementById(".tb1-title").appendChild(newTodoTitle);
    document.querySelector('.todobox-title-1').appendChild(newTodoTitle);
    document.querySelector('.todobox-content-1').appendChild(newTodoContent);
    // document.querySelector('.todo-list').appendChild(newTodo);
    document.querySelector('.todo-input-title').value = '';
    document.querySelector('.todo-input-content').value = '';
};
// 박스 나타내기
// $(function(){
// 	if("조건1"){
// 		document.getElementById("").style.display = "none";
// 		document.getElementById("b_div").style.display = "";
// 	}else{//조건 1이 아닐떄
// 		document.getElementById("a_div").style.display = "";
//         document.getElementById("b_div").style.display = "none";
// 	}
// })

init();
