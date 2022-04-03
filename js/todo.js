// (function () {
//   const formEl = document.querySelector(".todo_form");
//   const inputEl = document.querySelector(".todo_form input");
//   const todoListEl = document.querySelector(".todo_list");

//   let todoList = [];

//   const localSaveTodo = () => {
//     localStorage.setItem("list", JSON.stringify(todoList));
//   };

//   const deleteTodo = (e) => {
//     const {
//       target: { parentNode: currentLi },
//     } = e;

//     currentLi.remove();

//     todoList = todoList.filter(
//       (todo) => todo.id !== parseInt(currentLi.className)
//     );
//     localSaveTodo();
//     // console.log(typeof todoList[0].id);
//     // console.log(typeof currentLi.className);
//   };

//   const showTodo = (todo) => {
//     const li = document.createElement("li");
//     const span = document.createElement("span");
//     const btn = document.createElement("button");

//     li.className = todo.id;

//     li.appendChild(span);
//     span.innerText = todo.text;

//     li.appendChild(btn);
//     btn.innerText = "삭제";

//     todoListEl.appendChild(li);

//     btn.addEventListener("click", deleteTodo);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const inputValue = inputEl.value;

//     if (inputEl === "") {
//       alert("할 일을 적어주세요!");
//       return;
//     }

//     inputEl.value = "";

//     const todoObj = {
//       id: Date.now(),
//       text: inputValue,
//     };

//     todoList.push(todoObj);

//     localSaveTodo();
//     showTodo(todoObj);
//   };

//   formEl.addEventListener("submit", handleSubmit);

//   const saveTodo = localStorage.getItem("list");

//   if (inputEl.value === null) {
//     alert("할 일을 적어주셔야 돼요..");
//   } else {
//     const parseTodo = JSON.parse(saveTodo);
//     todoList = parseTodo;
//     parseTodo.forEach(showTodo);
//   }
// })();

(function () {
  const formEl = document.querySelector(".todo_form");
  const inputEl = document.querySelector(".todo_form input");
  const todoListEl = document.querySelector(".todo_list");

  let todoList = [];

  const saveTodo = () => {
    localStorage.setItem("list", JSON.stringify(todoList));
  };

  const deleteTodo = (e) => {
    // const {
    //   target: { parentNode: currentLi },
    // } = e;
    const currentLi = e.target.parentNode;

    currentLi.remove();
    todoList = todoList.filter(
      (todo) => todo.id !== parseInt(currentLi.className)
    );
    saveTodo();
  };

  const showTodo = (todo) => {
    const li = document.createElement("li");
    li.className = todo.id;

    const span = document.createElement("span");
    span.innerText = "• " + todo.text;

    const btn = document.createElement("p");
    btn.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(btn);

    todoListEl.appendChild(li);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = inputEl.value;
    inputEl.value = "";

    const todoObj = {
      id: Date.now(),
      text: inputValue,
    };

    todoList.push(todoObj);
    showTodo(todoObj);
    saveTodo();
  };

  formEl.addEventListener("submit", handleSubmit);

  const getTodo = localStorage.getItem("list");

  if (getTodo !== null) {
    const parseTodo = JSON.parse(getTodo);
    todoList = parseTodo;
    parseTodo.forEach(showTodo);
  }
})();
