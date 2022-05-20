const form = document.querySelector(".todo-form");

const init = () => {
    form.addEventListener("submit", addTodoItem);
};

const addTodoItem = () => {
    const todoTitle = document.querySelector(".todo-input-title").value;
    const todoContent = document.querySelector(".todo-input-content").values;
    if (todoTitle) printTodoItem(todoContent,todoTitle);
};

const printTodoItem = text => {
    const newTodo = document.createElement("a");
    const newTodoText = document.createElement('div');
    const newToddTitle = document.createElement("span");
    const newTodoContent = document.createElement("span");
    // const todoDel = document.createElement("button");

    // todo title 텍스트 추가
    newTodoTitle.innerText = title;
    newTodoTitle.className = "todo-title";
    // newTodoTitle.addEventListener("click", toggleTodoToDone);

    // todo content detail 텍스트 추가
    newTodoContent.innerText = content;
    newTodoContent.className = 'todo-content';

    // todo item checkbox 버튼 추가
    todoCheck.type = 'checkbox';
    todoCheck.className = 'todoTodone-button';
    todoCheck.addEventListener('click', function () {
    const is_checked = todoCheck.checked;
    if (is_checked) {
        printDoneItem(title, content);
    } else {
        newTodoTitle.style.cssText = 'font-size:30px;font-weight: bold;';
        newTodoContent.style.cssText =
        'color: #8b8b8b;font-weight: Regular;font-size: 20px;';
    }
    });

    newTodoText.appendChild(newTodoTitle);
    newTodoText.appendChild(br);
    newTodoText.appendChild(newTodoContent);

    newTodoBtn.appendChild(todoCheck);
    // newTodoBtn.appendChild(todoDel);

    newTodo.className = 'todo-list';
    newTodo.appendChild(newTodoTitle);
    newTodo.appendChild(newTodoContent);

    document.querySelector('.todo-list').appendChild(newTodo);
    document.querySelector('.todo-input').value = '';
    document.querySelector('.todo-title').value = '';
    document.querySelector('.todo-content').value = '';
}

init();
