function pre_pic() {
  console.log("error")
  let pic01 = document.querySelector(".course_image.show");
  let paragraph01 = document.querySelector(".course_introduce_words.show")
  let pic02 = document.querySelector(".course_image.hidden.hidden_left");
  let paragraph02 = document.querySelector(".course_introduce_words.hidden.hidden_left")
  let pic03 = document.querySelector(".course_image.hidden.hidden_right");
  let paragraph03 = document.querySelector(".course_introduce_words.hidden.hidden_right")


  pic01.classList.remove("show");
  pic01.classList.add("hidden");
  pic01.classList.add("hidden_right");
  paragraph01.classList.remove("show");
  paragraph01.classList.add("hidden");
  paragraph01.classList.add("hidden_right");

  pic03.classList.remove("hidden_right");
  pic03.classList.add("hidden_left");
  paragraph03.classList.remove("hidden_right");
  paragraph03.classList.add("hidden_left");

  pic02.classList.remove("hidden");
  pic02.classList.remove("hidden_left");
  pic02.classList.add("show");
  paragraph02.classList.remove("hidden");
  paragraph02.classList.remove("hidden_left");
  paragraph02.classList.add("show");
}


function next_pic() {
  let pic01 = document.querySelector(".course_image.show");
  let paragraph01 = document.querySelector(".course_introduce_words.show")
  let pic02 = document.querySelector(".course_image.hidden.hidden_left");
  let paragraph02 = document.querySelector(".course_introduce_words.hidden.hidden_left")
  let pic03 = document.querySelector(".course_image.hidden.hidden_right");
  let paragraph03 = document.querySelector(".course_introduce_words.hidden.hidden_right")

  pic01.classList.remove("show");
  pic01.classList.add("hidden");
  pic01.classList.add("hidden_left");
  paragraph01.classList.remove("show");
  paragraph01.classList.add("hidden");
  paragraph01.classList.add("hidden_left");

  pic02.classList.remove("hidden_left");
  pic02.classList.add("hidden_right");
  paragraph02.classList.remove("hidden_left");
  paragraph02.classList.add("hidden_right");

  pic03.classList.remove("hidden");
  pic03.classList.remove("hidden_right");
  pic03.classList.add("show");
  paragraph03.classList.remove("hidden");
  paragraph03.classList.remove("hidden_right");
  paragraph03.classList.add("show");
}

function change_flower(e) {
  let big_flower = document.getElementsByClassName("circle_in_flower")[0];
  big_flower.src = e.target.src
}

function init() {
  document.getElementsByClassName("pre_pic")[0].addEventListener("click", pre_pic, false);
  document.getElementsByClassName("next_pic")[0].addEventListener("click", next_pic, false);
  let big_flower_petal = document.getElementsByClassName("big_flower_petal")
  for (let i = 0; i < big_flower_petal.length; i++) {
    big_flower_petal[i].addEventListener("click", change_flower, false);
  }
  let small_flower_petal = document.querySelectorAll("img[class^='roulette_']")
  for (let i = 0; i < small_flower_petal.length; i++) {
    small_flower_petal[i].addEventListener("click", change_small_flower, false);
  }
}


window.addEventListener("load", init, false);
setInterval(next_pic, 5000)