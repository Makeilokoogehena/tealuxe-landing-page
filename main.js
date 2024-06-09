import "./index.html";
import "./assets/css/styles.css";
import blog_image_1 from "./assets/images/blog-img1.png";
import blog_image_2 from "./assets/images/blog-img2.png";
import blog_image_3 from "./assets/images/blog-img3.png";
import blog_image_4 from "./assets/images/blog-img4.png";

// imports

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
    return;
  }
  onCloseButtonClick();
}

function onDocumentKeydown(e) {
  if (!menuList.classList.contains("mobile-menu__list-open")) return;
  if (e.code === "Escape") {
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

//

const dataBlog = [
  {
    id: 1,
    title: "Tea Time Travels: Funny Moments from Around the World",
    author: "Robinson Crusoe",
    image: "img1.png",
  },
  {
    id: 2,
    title: "The Role of Tea in Mental Health",
    author: "Joker",
    image: "img3.png",
  },
  {
    id: 3,
    title: "Tea-rific Tales: Hilarious Stories from Tea Lovers",
    author: "by Casper the Friendly Ghost",
    image: "img2.png",
  },

  {
    id: 4,
    title: "Tea and Caffeine: Effects on the Brain and Behavior",
    author: "Author Authorius",
    image: "img4.png",
  },
];

//
const menuBlogList = document.querySelector(".main-blog__list");

const generateListTemplate = (item) => {
  const template = document.createElement("li");
  template.classList.add("main-blog__item");
  template.setAttribute("id", `${item.id}`);
  console.log(item.img);
  template.innerHTML = `<img
  class="main-blog__item-image"
  src="./assets/images/blog-${item.image}"
  alt="blog info"
/>
<div class="main-blog__item-content">
  <h3 class="main-blog__content-title">
  ${item.title}
  </h3>
  <cite class="main-blog__author">by ${item.author}</cite>
  <a class="main-blog__item-link" href="#">Read </a>
</div>`;
  return template;
};

dataBlog.forEach((obj) => {
  const item = generateListTemplate(obj);
  menuBlogList.appendChild(item);
});
