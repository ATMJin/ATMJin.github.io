function $(css) {
  return document.querySelector(css);
}

function $All(css) {
  return document.querySelectorAll(css)
}

function navToggle() {
  $(".cover_other_page").classList.toggle("appear");
  $All(".hamburger>div")[0].classList.toggle("arrow");
  $All(".hamburger>div")[2].classList.toggle("arrow");
  $(".hamburger").classList.toggle("gotoLeft");
  $(".other_page").classList.toggle("gotoLeft");
}
window.addEventListener("load", () => {
  $(".hamburger").addEventListener("click", () => {
    navToggle();
  }, false)
  $(".other_page").addEventListener("click", (e) => {
    e.stopPropagation();
  }, false);
  $(".cover_other_page").addEventListener("click", () => {
    navToggle();
  }, false)
}, false)