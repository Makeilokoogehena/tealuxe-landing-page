const menuButton = document.querySelector(".menu__button");
const menuClose = document.querySelector(".mobile-menu__close-button");
const menuList = document.querySelector(".mobile-menu");
const body = document.querySelector(".body");

function onOpenButtonClick() {
  menuList.classList.add("mobile-menu__list-open");
  body.style.setProperty("--overlay-display", "block");
}

function onCloseButtonClick() {
  menuList.classList.remove("mobile-menu__list-open");
  body.style.setProperty("--overlay-display", "none");
}

function onDocumentClick(e) {
  if (!menuList.classList.contains("mobile-menu__list-open")) return;
  if (menuList.contains(e.target) || menuButton.contains(e.target)) {
    console.log("click");
    return;
  }
  onCloseButtonClick();
}

function onDocumentKeydown(e) {
  if (!menuList.classList.contains("mobile-menu__list-open")) return;
  if (e.code === "Escape") {
    console.log("keydown");
    onCloseButtonClick();
  }
}

function onWindowResize() {
  if (!menuList.classList.contains("mobile-menu__list-open")) return;
  if (window.innerWidth >= 770) onCloseButtonClick();
}

menuButton.addEventListener("click", onOpenButtonClick);
menuClose.addEventListener("click", onCloseButtonClick);
document.addEventListener("click", (obj) => onDocumentClick(obj));
document.addEventListener("keydown", (obj) => onDocumentKeydown(obj));
window.addEventListener("resize", onWindowResize);
