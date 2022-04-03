(function () {
  const spanEl = document.querySelector(".clock span");

  const time = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");
    spanEl.innerText = `${hours}:${min}:${sec}`;
  };

  time();

  setInterval(time, 1000);
})();
