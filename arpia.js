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

const buttonHandler = (e, str) => {
  e.preventDefault();
  if (selectPet.value != "none") {
    document.getElementById("img1").src =
      "./pet-images/" + selectPet.value + "/" + str + "1.gif";
    document.getElementById("img2").src =
      "./pet-images/" + selectPet.value + "/" + str + "2.gif";
  }
};

actionLst.forEach((str) => {
  document.getElementById(str).addEventListener("click", (e) => {
    buttonHandler(e, str);
  });
});

combo1.addEventListener("change", petEventHandler);
combo2.addEventListener("change", bgEventHandler);
