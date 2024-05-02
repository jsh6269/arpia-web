const combo1 = document.querySelector("#combo1");
const selectPet = document.querySelector("#select_pet");
const selectBg = document.querySelector("#select_bg");

const actionLst = [
  "stand1",
  "front1",
  "back1",
  "moveFront1",
  "moveSide1",
  "moveBack1",
  "idle1",
  "spellCast1",
  "hit1",
  "victory1",
  "dead1",
  "all1",
  "stand2",
  "front2",
  "back2",
  "moveFront2",
  "moveSide2",
  "moveBack2",
  "idle2",
  "spellCast2",
  "hit2",
  "victory2",
  "dead2",
  "all2",
];

const petEventHandler = (e) => {
  e.preventDefault();
  const text = selectPet.value;
  if (text == "none") {
    document.getElementById("img1").src = "";
    document.getElementById("img2").src = "";
  } else {
    document.getElementById("img1").src = "./pet-images/" + text + "/idle1.gif";
    document.getElementById("img2").src = "./pet-images/" + text + "/idle2.gif";
  }
};

const bgEventHandler = (e) => {
  e.preventDefault();
  const text = selectBg.value;
  document.getElementsByClassName("image-container")[0].style.backgroundImage =
    "url(./background/" + text + ".png)";
};

combo1.addEventListener("change", petEventHandler);
combo2.addEventListener("change", bgEventHandler);
