const timer = 5000;
let next_pic_num = setInterval(next_pic, timer);
let change_small_flower_timer_num = setInterval(change_small_flower_timer, timer)
let change_big_flower_timer_num = setInterval(change_big_flower_timer, timer)

// 課程輪播
// 往右
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
  clearInterval(next_pic_num);
  next_pic_num = setInterval(next_pic, timer);
}
// 往左
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
  clearInterval(next_pic_num);
  next_pic_num = setInterval(next_pic, timer);
}

// 大花輪播
// 滑鼠移動換圖
function change_flower(e) {
  // 換圖
  let big_flower = document.getElementsByClassName("circle_in_flower")[0];
  big_flower.src = e.target.src
  // mouseover時先讓其他都暗，再讓被移到的亮
  let darker = document.querySelectorAll(".big_flower_petal");
  for (let i = 0; i < darker.length; i++) {
    darker[i].classList.remove("lighter");
  }
  e.target.classList.add("lighter");
}
// 時間輪播
function change_big_flower_timer() {
  let flower = document.querySelectorAll(".big_flower_petal");
  let big_flower = document.querySelector(".circle_in_flower");
  for (let i = 0; i < flower.length; i++) {
    if (big_flower.src == flower[i].src) {
      if (i == 7) {
        big_flower.src = flower[0].src;
        flower[7].classList.remove("lighter");
        flower[0].classList.add("lighter");
        break;
      } else {
        big_flower.src = flower[i + 1].src;
        flower[i].classList.remove("lighter");
        flower[i + 1].classList.add("lighter");
        break;
      }
    }
  }
}


// 小花輪播
// 滑鼠移動換圖
function change_small_flower(e) {
  let skill_pic = document.querySelector(".skill_pic>img");
  skill_pic.src = e.target.src;

  let darker = document.querySelectorAll("img[class^='roulette_']");
  for (let i = 0; i < darker.length; i++) {
    darker[i].classList.remove("lighter");
  }
  e.target.classList.add("lighter");
}
// 時間輪播
function change_small_flower_timer() {
  let flower = document.querySelectorAll("img[class^='roulette_']");
  let big_flower = document.querySelector(".skill_pic>img")
  for (let i = 0; i < flower.length; i++) {
    if (big_flower.src == flower[i].src) {
      if (i == 5) {
        big_flower.src = flower[0].src;
        flower[5].classList.remove("lighter");
        flower[0].classList.add("lighter");
        break;
      } else {
        big_flower.src = flower[i + 1].src;
        flower[i].classList.remove("lighter");
        flower[i + 1].classList.add("lighter");
        break;
      }
    }
  }
}

setTimeout(function () {
  $(".logo_flower_animation").style.display = "none"
}, 5500)

window.addEventListener("load", function () {
  // 輪播按鈕
  $(".pre_pic").addEventListener("click", next_pic, false);
  $(".next_pic").addEventListener("click", pre_pic, false);
  // 大花輪播
  let big_flower_petal = document.getElementsByClassName("big_flower_petal")
  for (let i = 0; i < big_flower_petal.length; i++) {
    big_flower_petal[i].addEventListener("click", change_flower, false);
    big_flower_petal[i].addEventListener("mouseover", change_flower, false);
    big_flower_petal[i].addEventListener("mouseover", function () { //mouseover時停止計時
      clearInterval(change_big_flower_timer_num);
    }, false);
    big_flower_petal[i].addEventListener("mouseout", function () { // mouseout時重新計時
      change_big_flower_timer_num = setInterval(change_big_flower_timer, timer);
    }, false);
  }
  // 小花輪播
  let small_flower_petal = document.querySelectorAll("img[class^='roulette_']")
  for (let i = 0; i < small_flower_petal.length; i++) {
    small_flower_petal[i].addEventListener("click", change_small_flower, false);
    small_flower_petal[i].addEventListener("mouseover", change_small_flower, false);
    small_flower_petal[i].addEventListener("mouseover", function () { //mouseover時停止計時
      clearInterval(change_small_flower_timer_num);
    }, false);
    small_flower_petal[i].addEventListener("mouseout", function () { // mouseout時重新計時
      change_small_flower_timer_num = setInterval(change_small_flower_timer, timer)
    }, false);
  }
}, false);