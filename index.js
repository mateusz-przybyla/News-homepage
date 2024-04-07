var openButton = document.querySelector(".header__open-btn");
var closeButton = document.querySelector(".subnav__close-btn");

openButton.addEventListener("click", function () {
  document.querySelector(".header__subnav").style.width = "250px";
});

closeButton.addEventListener("click", function () {
  document.querySelector(".header__subnav").style.width = "0px";
});
