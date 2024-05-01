const combo = document.querySelector("#combo");
const selectPet = document.querySelector("#select_pet");

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

const eventHandler = (e) => {
  e.preventDefault();
  const text = selectPet.value;
  if (text == "none") {
    document.getElementById("img1").src = "";
    document.getElementById("img2").src = "";
  } else {
    document.getElementById("img1").src = "./images/" + text + "/idle1.gif";
    document.getElementById("img2").src = "./images/" + text + "/idle2.gif";
  }
};

combo.addEventListener("change", eventHandler);
