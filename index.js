const open = document.querySelector("#open");
const calculatrice = document.querySelector("#calculatrice");
const close = document.querySelector("#close");

open.addEventListener("click", () => {
  calculatrice.classList.add("show");
});

close.addEventListener("click", () => {
  calculatrice.classList.remove("show");
});

calculatrice.addEventListener("click", () => {
  calculatrice.classList.remove("show");
});
