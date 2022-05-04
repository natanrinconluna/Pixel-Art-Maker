//Global Variables
const canvas = document.querySelector(".canvas");
const colorControl = document.querySelector("#color-controls");
let colorButton = document.querySelector(".button");
let colorSelected = document.querySelector("#color-selected");
let resetBoard = document.getElementById("clear-board-button");
let saveBoard = document.getElementById("save-board-button");

let color = '';
let colortext = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "pink",
  "gray",
  "black",
  'white',
  "brown",
  "light-brown",
  "purple",
  "aqua",
  "beige",
  "blueviolet"

];
//Print PDF of Image
saveBoard.addEventListener("click", () => {
  window.print();
});

//Reset board
resetBoard.addEventListener("click", () => {
  location.reload();
});

//Create Grid
for (let i = 0; i < 324; i++) {
  const div = document.createElement("div");
  div.className = "pixel";
  div.setAttribute("id", "squares");
  div.addEventListener("click", () => {
    div.style.backgroundColor = color;
  });
  div.addEventListener("onmousedown", () => {
    div.style.backgroundColor = color;
  });
  canvas.append(div);

}

//Creates Color Button
for (let j = 0; j < colortext.length; j++) {
  const button = document.createElement("div");
  button.addEventListener("click", () => {
    color = colortext[j];
    colorSelected.style.backgroundColor = colortext[j];
    colorSelected.style.color = colortext[j];
  });
  button.setAttribute("id", "color");
  button.className = "button";
  button.innerText = "";
  button.style.color = colortext[j];
  button.style.backgroundColor = colortext[j];
  colorControl.appendChild(button);

  colorSelected.innerText = "";

}

//Set Background Color and Format for "Current Selected Color"
