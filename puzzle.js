function slider() {
  var slide_1 = document.getElementById("slider-1");
  var slide_2 = document.getElementById("slider-2");
  var slide_3 = document.getElementById("slider-3");
  setInterval(() => {
    slide_1.style.display = "none";
    slide_3.style.display = "none";
    slide_2.style.display = "flex";
    slide_2.style.flexDirection = "column";
  }, 1000);

  setInterval(() => {
    slide_1.style.display = "none";
    slide_2.style.display = "none";
    slide_3.style.display = "flex";
    slide_3.style.flexDirection = "column";
  }, 2000);

  setInterval(() => {
    slide_2.style.display = "none";
    slide_3.style.display = "none";
    slide_1.style.display = "flex";
    slide_1.style.flexDirection = "column";
  }, 3000);
}
slider();

function myFunction() {
  var x = document.getElementById("first");
  var y = document.getElementById("second");
  if (window.getComputedStyle(x).display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
    y.style.display = "flex";
  }
}
const buttons = document.querySelectorAll(".images img");
buttons.forEach((button) => {
  button.addEventListener("click", () => playImg(button));
});

var q = document.getElementById("continue");
var k = document.getElementById("img1");
var m = document.getElementById("img2");
var n = document.getElementById("img3");
var giraffe = document.getElementById("giraffe-img");
var man = document.getElementById("man-mountain");
var cube = document.getElementById("cube");
function playImg(_button) {
  for (i = 0; i < buttons.length; i++) {
    q.style.display = "flex";
  }
}

function imagesDisplay() {
  if ((k.style.border = "none")) {
    k.style.boxShadow = "rgb(0 0 0 / 50%) 0px 0px 10px";
    m.style.boxShadow = "none";
    n.style.boxShadow = "none";
    k.style.border = "10px solid white";
    m.style.border = "none";
    n.style.border = "none";
  }
  if (
    window.getComputedStyle(man).display !== "none" ||
    window.getComputedStyle(cube).display !== "none"
  ) {
    man.style.display = "none";
    cube.style.display = "none";
  }

  if (window.getComputedStyle(giraffe).display === "none") {
    giraffe.style.display = "block";
  }
}
function imagesDisplay2() {
  if ((m.style.border = "none")) {
    m.style.boxShadow = "rgb(0 0 0 / 50%) 0px 0px 10px";
    n.style.boxShadow = "none";
    k.style.boxShadow = "none";
    m.style.border = "10px solid white";
    k.style.border = "none";
    n.style.border = "none";
  }
  if (
    window.getComputedStyle(giraffe).display !== "none" ||
    window.getComputedStyle(cube).display !== "none"
  ) {
    giraffe.style.display = "none";
    cube.style.display = "none";
  }
  if (window.getComputedStyle(man).display === "none") {
    man.style.display = "block";
  }
}
function imagesDisplay3() {
  if ((n.style.border = "none")) {
    n.style.boxShadow = "rgb(0 0 0 / 50%) 0px 0px 10px";
    k.style.boxShadow = "none";
    m.style.boxShadow = "none";
    n.style.border = "10px solid white";
    m.style.border = "none";
    k.style.border = "none";
  }
  if (
    window.getComputedStyle(man).display !== "none" ||
    window.getComputedStyle(giraffe).display !== "none"
  ) {
    man.style.display = "none";
    giraffe.style.display = "none";
  }
  if (window.getComputedStyle(cube).display === "none") {
    cube.style.display = "block";
  }
}
function thirdPart() {
  var z = document.getElementById("third");
  var y = document.getElementById("second");
  if (window.getComputedStyle(z).display === "none") {
    z.style.display = "flex";
    y.style.display = "none";
  } else {
    z.style.display = "none";
  }
}
function showMoves() {
  var moves = document.getElementById("moves");
  var choose = document.getElementById("choose");
  choose.style.borderBottomLeftRadius = "0px";
  choose.style.borderBottomRightRadius = "0px";
  if (window.getComputedStyle(moves).display === "none") {
    moves.style.display = "flex";
    choose.style.display = "flex";
  } else {
    moves.style.display = "none";
  }
}
function threeMoves() {
  var start = document.getElementById("start-game");
  var threeSpan = document.getElementById("threeSpan");
  var thirtySpan = document.getElementById("thirtySpan");
  var chooseShuffle = document.getElementById("chooseShuffle");
  if (window.getComputedStyle(start).display === "none") {
    start.style.display = "flex";
  }
  if (
    (window.getComputedStyle(threeSpan).display === "none" &&
      (window.getComputedStyle(chooseShuffle).display !== "none" ||
        window.getComputedStyle(chooseShuffle).display === "none")) ||
    window.getComputedStyle(thirtySpan).display !== "none"
  ) {
    threeSpan.style.display = "flex";
    thirtySpan.style.display = "none";
    chooseShuffle.style.display = "none";
  }
  if (window.getComputedStyle(moves).display !== "none") {
    moves.style.display = "none";
  }
}
function thirtyMoves() {
  var start = document.getElementById("start-game");
  var threeSpan = document.getElementById("threeSpan");
  var thirtySpan = document.getElementById("thirtySpan");
  var chooseShuffle = document.getElementById("chooseShuffle");
  if (window.getComputedStyle(start).display === "none") {
    start.style.display = "flex";
  }
  if (
    (window.getComputedStyle(thirtySpan).display === "none" &&
      (window.getComputedStyle(chooseShuffle).display !== "none" ||
        window.getComputedStyle(chooseShuffle).display === "none")) ||
    window.getComputedStyle(threeSpan).display !== "none"
  ) {
    thirtySpan.style.display = "flex";
    threeSpan.style.display = "none";
    chooseShuffle.style.display = "none";
  }
  if (window.getComputedStyle(moves).display !== "none") {
    moves.style.display = "none";
  }
}

/* game */
let temp;
let empty = document.getElementById("empty");
let game = [...document.getElementsByTagName("li")];
let arr = [];

for (let item of game) {
  item.addEventListener("click", oneDimensional, swapElements);
}

function oneDimensional(j) {
  for (let i = 0; i < 9; i = i + j) {
    arr.push(game[i]);
  }
}
oneDimensional(1);

function swapElements() {
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === empty) {
      console.log(true);
      // temp = arr[i];
      // arr[i] = arr[i + 1];
      // arr[i + 1] = temp;
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      console.log(arr);
      break;
    }
  }
}

swapElements();
