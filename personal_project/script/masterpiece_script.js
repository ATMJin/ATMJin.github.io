let min_pics = document.getElementsByClassName("min_pic")[0];
let x = 5;
let y = 0;

//橫向自動卷軸
function min_pic_scroll_X() {
  min_pics.scrollLeft += x;
  if (min_pics.scrollLeft >= min_pics.scrollLeftMax - x) x = -x;
  else if (min_pics.scrollLeft <= -x) x = -x;
  //到底反轉
  //TODO 無限輪播
}
//直向自動卷軸
function min_pic_scroll_Y() {
  min_pics.scrollTop += y;
  if (min_pics.scrollTop >= min_pics.scrollTopMax - y) y = -y;
  else if (min_pics.scrollTop <= -y) {
    y = -y;
  }
}


let XY;
//直向或橫向
function X_or_Y() {
  if (min_pics.scrollLeft != min_pics.scrollLeftMax) {
    clearInterval(XY);
    XY = setInterval(min_pic_scroll_X, 30);
  } else {
    clearInterval(XY);
    XY = setInterval(min_pic_scroll_Y, 30);
  }
}
//TODO 記得反註解
X_or_Y();

//讀取json資料
let masterpiece_url = "data/masterpiece.json";
let masterpiece_request = new XMLHttpRequest();
masterpiece_request.open('GET', masterpiece_url);
masterpiece_request.responseType = 'json';
masterpiece_request.send();
let masterpiece
masterpiece_request.onload = function () {
  masterpiece = masterpiece_request.response
  console.log(masterpiece.member[0].src);
}

//點小圖換切換右側資訊
function change_card(e) {
  let card_pic = document.querySelectorAll(".card .pic>img");
  let card = document.querySelector(".card");
  let cover_you_know = document.querySelector(".cover_you_know");
  let pic = document.querySelectorAll(".card .pic");
  let text = document.querySelectorAll(".card .text");
  let you_know = document.querySelectorAll(".you_know");
  let masterpiece_member = masterpiece.member[e.target.dataset.picindex - 1];

  for (let i = 0; i < pic.length; i++) {
    pic[i].classList.toggle("hidden");
    pic[i].classList.toggle("show");
    text[i].classList.toggle("hidden");
    text[i].classList.toggle("show");
    you_know[i].classList.toggle("hidden");
    you_know[i].classList.toggle("show");
  };
  // 將後元素暫存至一變數
  let a = pic[1];
  let b = text[1];
  let c = you_know[1];
  // 移除後元素
  card.removeChild(pic[1]);
  card.removeChild(text[1]);
  cover_you_know.removeChild(you_know[1]);
  // 將被移除的後元素加進第一個子元素
  card.insertBefore(a, pic[0]);
  card.insertBefore(b, text[0]);
  cover_you_know.insertBefore(c, you_know[0]);
  // 更改圖片
  card_pic[1].src = masterpiece_member.src;
  card_pic[1].alt = masterpiece_member.alt;
  // 更改說明文
  if (masterpiece_member.introduce.length == 2) {
    text[1].innerHTML = `<h2>${masterpiece_member.alt}</h2>
  <p>${masterpiece_member.introduce[0]
  }</p>
  <p>${masterpiece_member.introduce[1]
  }</p>`;
  } else {
    text[1].innerHTML = `<h2>${masterpiece_member.alt}</h2>
  <p>${masterpiece_member.introduce[0]
  }</p>`;
  }




  let skill_name = document.querySelector(".skill_name");
  skill_name.innerText = masterpiece_member.skill;
}

let img = document.querySelectorAll(".min_pic .pic>img")

function init() {
  X_or_Y();
  //滑鼠或觸控時停止或開啟輪播
  min_pics.addEventListener("mousedown", () => clearInterval(XY), false);
  min_pics.addEventListener("touchstart", () => clearInterval(XY), false);
  min_pics.addEventListener("mouseup", X_or_Y, false);
  min_pics.addEventListener("touchend", X_or_Y, false);
  //小圖點擊更換圖文
  for (let i = 0; i < img.length; i++) {
    img[i].addEventListener("click", change_card, false)
  }
}

window.addEventListener("load", init, false);
window.addEventListener("resize", X_or_Y, false);