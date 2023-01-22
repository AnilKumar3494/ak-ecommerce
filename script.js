const mobileEl = document.querySelector(".mobile");
const navbarEL = document.querySelector("#navbar");
const mobileXEl = document.querySelector(".mobilex");

mobileEl.addEventListener("click", () => {
  navbarEL.classList.toggle("active");
});

mobileXEl.addEventListener("click", () => {
  navbarEL.classList.toggle("active");
});
