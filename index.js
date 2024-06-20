const btnun = document.querySelector(".btn1");
const btnde = document.querySelector(".btn2");
const not = document.querySelector(".forscrips");
const btntwee = document.querySelector(".btn3");
const hi = document.querySelector("h1");
console.log(not);
btnun.addEventListener("click", () => {
  not.style.display = "none";
  btntwee.style.visibility = "visible";
  hi.style.visibility = "visible";
});
btntwee.addEventListener("click", () => {
  not.style.display = "block";
  btntwee.style.display = "none";
  hi.style.display = "none";
});
btnde.addEventListener("click", () => {
  alert("do you wish to cancel ?");
});
