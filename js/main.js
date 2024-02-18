const menuButton = document.querySelector(".menu__button");
const menuClose = document.querySelector(".menu__close");
const menuList = document.querySelector(".menu__list");
const body = document.querySelector(".body");

menuButton.addEventListener("click", () => {
  menuList.classList.add("menu__list-open");
  body.style.setProperty("--overlay-display", "block");
});

menuClose.addEventListener("click", () => {
  menuList.classList.remove("menu__list-open");
  body.style.setProperty("--overlay-display", "none");
});
