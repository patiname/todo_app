(function () {
  const formEl = document.querySelector(".username_form");
  const inputEl = document.querySelector(".username_input");
  const usernameEl = document.querySelector(".username");

  const HIDDEN = "user_form_hidden";

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = inputEl.value;
    if (inputValue === "") {
      alert("이름을 입력 해주셔야 돼요..");
      return;
    }
    localStorage.setItem("username", inputValue);

    inputEl.value = "";
    formEl.classList.add(HIDDEN);

    showUsername(inputValue);
  };

  const showUsername = (username) => {
    usernameEl.innerText = `안녕하세요! ${username}님`;
    formEl.classList.add(HIDDEN);
    usernameEl.classList.remove(HIDDEN);
  };

  const saveUsername = localStorage.getItem("username");

  if (saveUsername === null) {
    formEl.addEventListener("submit", handleSubmit);
  } else {
    showUsername(saveUsername);
  }
})();
