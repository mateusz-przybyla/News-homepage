var openButton = document.querySelector(".header__open-btn");
var closeButton = document.querySelector(".subnav__close-btn");

window.onload = changeMenu;

openButton.addEventListener("click", function () {
  document.querySelector(".header__subnav").style.width = "70%";
  document.querySelector(".main").classList.add("opacity");
  document.querySelector(".header__logo").classList.add("opacity");
});

closeButton.addEventListener("click", function () {
  document.querySelector(".header__subnav").style.width = "0%";
  document.querySelector(".main").classList.remove("opacity");
  document.querySelector(".header__logo").classList.remove("opacity");
});

window.addEventListener("resize", () => changeMenu());

function changeMenu() {
  var windowWidth = window.innerWidth;
  var maxWidthMenu = 600;

  if (windowWidth >= maxWidthMenu) {
    document.querySelector(".header__subnav").classList.remove("open");
    document.querySelector(".header__open-btn").classList.remove("open");
  } else {
    document.querySelector(".header__subnav").classList.add("open");
    document.querySelector(".header__open-btn").classList.add("open");
  }
}
