const imgs = ["forest.jpg", "cat.jpg", "sun.jpg"];
const wrapEl = document.querySelector(".wrap");

const choiseImg = imgs[Math.floor(Math.random() * imgs.length)];

wrapEl.style.background = `url(img/${choiseImg}) no-repeat center / cover`;
