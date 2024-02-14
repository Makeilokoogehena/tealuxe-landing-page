const menuButton = document.querySelector(".menu__button");
const menuClose = document.querySelector(".menu__close");
const menuList = document.querySelector(".menu__list");

menuButton.addEventListener("click", () => {
  menuList.classList.add("menu__list-open");
});

menuClose.addEventListener("click", () => {
  menuList.classList.remove("menu__list-open");
});
