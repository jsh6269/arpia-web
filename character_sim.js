const combo1 = document.querySelector("#combo1");
const selectChr = document.querySelector("#select_chr");
const selectBg = document.querySelector("#select_bg");

const actionLst = [
  "idle",
  "moveFront",
  "moveSide",
  "moveBack",
  "attack",
  "magic",
  "hit",
  "useItem",
  "win",
  "dead",
];

let str = "idle";

const chrEventHandler = (e) => {
  e.preventDefault();
  str = "idle";
  const text = selectChr.value;

  if (text == "none") {
    img1.src = "";
  } else {
    img1.src = "./animation/" + text + "/idle.gif";
  }
};

const bgEventHandler = (e) => {
  e.preventDefault();
  const text = selectBg.value;
  document.getElementsByClassName("image-container")[0].style.backgroundImage =
    "url(./background/" + text + ".png)";
};

const img1 = document.getElementById("img1");

function check() {
  const img1 = document.getElementById("img1");
  if (str == "dead") {
    img1.style.marginTop = "250px";
  } else {
    img1.style.marginTop = "120px";
  }
}
img1.addEventListener("load", check, false);

img1.addEventListener(
  "error",
  (e) => {
    str = "idle";
    img1.src = "./animation/" + selectChr.value + "/idle.gif";
  },
  false
);

const buttonHandler = (e, _str) => {
  e.preventDefault();
  // let fs = require("fs");
  // let res = fs.existsSync(img1.src);
  // console.log(res);
  str = _str;
  if (selectChr.value != "none") {
    img1.src = "./animation/" + selectChr.value + "/" + _str + ".gif";
  }
};

actionLst.forEach((_str) => {
  document.getElementById(_str).addEventListener("click", (e) => {
    buttonHandler(e, _str);
  });
});

combo1.addEventListener("change", chrEventHandler);
combo2.addEventListener("change", bgEventHandler);
