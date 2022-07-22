let adviceId = document.querySelector("span");
let article = document.querySelector("article");
const dice = document.querySelector(".dice");

async function getRandomAdvice() {
  let response = await fetch("https://api.adviceslip.com/advice");
  let data = await response.json();
  let id = data.slip.id;
  let randomAdvice = data.slip.advice;
  adviceId.innerHTML = id;
  article.innerHTML = randomAdvice;
}
dice.addEventListener("click", getRandomAdvice);
