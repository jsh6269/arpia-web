const combo1 = document.querySelector("#combo1");
const selectPet = document.querySelector("#select_pet");
const selectBg = document.querySelector("#select_bg");

const actionLst = [
  "stand",
  "front",
  "back",
  "moveFront",
  "moveSide",
  "moveBack",
  "idle",
  "spellCast",
  "hit",
  "victory",
  "dead",
  "all",
];

const petEventHandler = (e) => {
  e.preventDefault();
  const text = selectPet.value;
  img1.style.marginTop = "150px";
  img2.style.marginTop = text != "redCandy" ? "150px" : "120px";

  if (text == "none") {
    img1.src = "";
    img2.src = "";
  } else {
    img1.src = "./pet-images/" + text + "/idle1.gif";
    img2.src = "./pet-images/" + text + "/idle2.gif";
  }
};

const bgEventHandler = (e) => {
  e.preventDefault();
  const text = selectBg.value;
  document.getElementsByClassName("image-container")[0].style.backgroundImage =
    "url(./background/" + text + ".png)";
};

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");

let str = "idle";

function check() {
  if (selectPet.value == "babyEagle" && (str == "spellCast" || str == "all")) {
    img1.style.marginTop = "40px";
  } else if (
    selectPet.value == "rabbit" &&
    (str == "spellCast" || str == "all")
  ) {
    img1.style.marginTop = "120px";
  } else if (
    selectPet.value == "penguin" &&
    (str == "spellCast" || str == "all")
  ) {
    img1.style.marginTop = "100px";
  } else if (
    selectPet.value == "flower" &&
    (str == "spellCast" || str == "all")
  ) {
    img2.style.marginTop = str == "spellCast" ? "0px" : "60px";
  } else if (
    selectPet.value == "redCandy" &&
    (str == "all" || str == "victory" || str == "idle")
  ) {
    img2.style.marginTop = "120px";
  } else if (selectPet.value == "panda" && str == "all") {
    img2.style.marginTop = "100px";
  } else if (
    selectPet.value == "frog" &&
    (str == "spellCast" || str == "all")
  ) {
    img1.style.marginTop = "70px";
  } else if (
    (selectPet.value == "pinkBean" || selectPet.value == "greenBean") &&
    str == "spellCast"
  ) {
    img2.style.marginTop = "50px";
  } else if (selectPet.value == "snail" && (str == "all" || str == "victory")) {
    img2.style.marginTop = "80px";
  } else if (selectPet.value == "volcano") {
    switch (str) {
      case "idle":
      case "victory":
      case "stand":
        img1.style.marginTop = "120px";
        img2.style.marginTop = "120px";
        break;
      case "front":
        img1.style.marginTop = "100px";
        img2.style.marginTop = "40px";
        break;
      case "spellCast":
        img2.style.marginTop = "0px";
        break;
      case "hit":
        img2.style.marginTop = "120px";
        break;
      case "all":
        img2.style.marginTop = "0px";
        break;
    }
  } else {
    img1.style.marginTop = "150px";
    img2.style.marginTop = "150px";
  }
}
img1.addEventListener("load", check, false);
img2.addEventListener("load", check, false);

const buttonHandler = (e, _str) => {
  e.preventDefault();
  str = _str;
  if (selectPet.value != "none") {
    img1.src = "./pet-images/" + selectPet.value + "/" + _str + "1.gif";
    img2.src = "./pet-images/" + selectPet.value + "/" + _str + "2.gif";
  }
};

actionLst.forEach((_str) => {
  document.getElementById(_str).addEventListener("click", (e) => {
    buttonHandler(e, _str);
  });
});

combo1.addEventListener("change", petEventHandler);
combo2.addEventListener("change", bgEventHandler);
