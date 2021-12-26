function pre_pic() {
  console.log("error")
  let pic01 = document.querySelector(".course_image.show");
  let pic02 = document.querySelector(".course_image.hidden.hidden_left");
  let pic03 = document.querySelector(".course_image.hidden.hidden_right");

  pic01.classList.remove("show");
  pic01.classList.add("hidden");
  pic01.classList.add("hidden_right");

  pic03.classList.remove("hidden_right");
  pic03.classList.add("hidden_left");

  pic02.classList.remove("hidden");
  pic02.classList.remove("hidden_left");
  pic02.classList.add("show");
}


function next_pic() {
  let pic01 = document.querySelector(".course_image.show");
  let pic02 = document.querySelector(".course_image.hidden.hidden_left");
  let pic03 = document.querySelector(".course_image.hidden.hidden_right");

  pic01.classList.remove("show");
  pic01.classList.add("hidden");
  pic01.classList.add("hidden_left");

  pic02.classList.remove("hidden_left");
  pic02.classList.add("hidden_right");

  pic03.classList.remove("hidden");
  pic03.classList.remove("hidden_right");
  pic03.classList.add("show");
}



function init() {
  document.getElementsByClassName("pre_pic")[0].addEventListener("click", pre_pic, false);
  document.getElementsByClassName("next_pic")[0].addEventListener("click", next_pic, false);
}


window.addEventListener("load", init, false);
// setInterval(next_pic, 1500)