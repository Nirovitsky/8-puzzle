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
  shuffleCount = 3;
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
  shuffleCount = 30;
}

/* game */
let empty = document.getElementById("empty");
let game = [...document.getElementsByTagName("li")];
let chunk = 3;
let giraffeId = document.getElementById("giraffeId");
let tiles = giraffeId.children;
/* divide "game" array */
let secondArray = game.slice(9, 18);
let secondArrayTwoD = [];
for (let i = 0; i < secondArray.length; i += chunk) {
  secondArrayTwoD.push(secondArray.slice(i, i + chunk));
}
let thirdArray = game.slice(18, 27);
let thirdArrayTwoD = [];
for (let i = 0; i < thirdArray.length; i += chunk) {
  thirdArrayTwoD.push(thirdArray.slice(i, i + chunk));
}

let firstArrayTwoD = [];
let counter = 0;
for (let i = 0; i < chunk; i++) {
  let subArr = [];
  for (let j = 0; j < chunk; j++) {
    subArr.push(tiles[counter++]);
  }
  firstArrayTwoD.push(subArr);
}
reset(firstArrayTwoD);

const directions = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1],
];
function getEmpty(i, j) {
  for (let x = 0; x < directions.length; x++) {
    const newI = i + directions[x][0];
    const newJ = j + directions[x][1];
    if (
      newI >= 0 &&
      newI < firstArrayTwoD.length &&
      newJ >= 0 &&
      newJ < firstArrayTwoD.length &&
      firstArrayTwoD[newI][newJ] === empty
    ) {
      return [newI, newJ];
    }
  }
  return [-1, -1];
}
function findEl(id) {
  for (let i = 0; i < firstArrayTwoD.length; i++) {
    for (let j = 0; j < firstArrayTwoD.length; j++) {
      if (firstArrayTwoD[i][j].innerHTML === id) return [i, j];
    }
  }
}
function moveTile(id) {
  let [i, j] = findEl(id);
  if (firstArrayTwoD[i][j] === empty) {
    return null;
  }
  let [emptyI, emptyJ] = getEmpty(i, j);
  if (emptyI === -1) {
    return null;
  }
  swap(i, j, emptyI, emptyJ);
  transform(firstArrayTwoD[emptyI][emptyJ], emptyJ * 155, emptyI * 155);
  transform(firstArrayTwoD[i][j], j * 155, i * 155);
}

function swap(i, j, newI, newJ) {
  let temp = firstArrayTwoD[newI][newJ];
  firstArrayTwoD[newI][newJ] = firstArrayTwoD[i][j];
  firstArrayTwoD[i][j] = temp;
}

function transform(el, x, y) {
  el.style.transform = `translate(${x}px, ${y}px)`;
  el.style.transition = "transform 0.5s";
}

function reset(arr) {
  let counter = 0;
  for (let i = 0; i < chunk; i++) {
    for (let j = 0; j < chunk; j++) {
      arr[i][j].style.top = "-15px";
      arr[i][j].style.left = "0px";
      transform(arr[i][j], j * 155, i * 155);
      arr[i][j].innerHTML = counter++;
    }
  }
}
let threeSpan = document.getElementById("threeSpan");
let thirtySpan = document.getElementById("thirtySpan");
let start = document.getElementById("start-game");

let shuffleCount = 3;

threeSpan.addEventListener("click", function () {
  shuffleCount = 3;
});

thirtySpan.addEventListener("click", function () {
  console.log(shuffleCount);
  shuffleCount = 30;
  console.log(shuffleCount);
});

start.addEventListener("click", function () {
  if (shuffleCount === 3) {
    shuffleThree();
  } else if (shuffleCount === 30) {
    shuffleThirty();
  }
});

let usedTiles = new Set();
function shuffleThree() {
  let emptyI, emptyJ;
  for (let i = 0; i < firstArrayTwoD.length; i++) {
    for (let j = 0; j < firstArrayTwoD[i].length; j++) {
      if (firstArrayTwoD[i][j] === empty) {
        emptyI = i;
        emptyJ = j;
        break;
      }
    }
  }
  usedTiles.clear();
  let swaps = 0;
  let intervalId = setInterval(function () {
    let randomDirection = directions[Math.floor(Math.random() * 4)];
    let newI = emptyI + randomDirection[0];
    let newJ = emptyJ + randomDirection[1];
    if (
      newI >= 0 &&
      newI < firstArrayTwoD.length &&
      newJ >= 0 &&
      newJ < firstArrayTwoD[newI].length
    ) {
      let randomTile = firstArrayTwoD[newI][newJ];
      if (!usedTiles.has(randomTile)) {
        swap(emptyI, emptyJ, newI, newJ);
        transform(randomTile, emptyJ * 155, emptyI * 155);
        emptyI = newI;
        emptyJ = newJ;
        usedTiles.add(randomTile);
        swaps++;
      }
    }
    if (swaps === 3) {
      clearInterval(intervalId);
    }
  }, 400);
}
let lastSwappedTile;
function shuffleThirty() {
  let emptyI, emptyJ;
  for (let i = 0; i < firstArrayTwoD.length; i++) {
    for (let j = 0; j < firstArrayTwoD[i].length; j++) {
      if (firstArrayTwoD[i][j] === empty) {
        emptyI = i;
        emptyJ = j;
        break;
      }
    }
  }
  usedTiles.clear();
  let swaps = 0;
  let intervalId = setInterval(function () {
    let randomDirection = directions[Math.floor(Math.random() * 4)];
    let newI = emptyI + randomDirection[0];
    let newJ = emptyJ + randomDirection[1];
    if (
      newI >= 0 &&
      newI < firstArrayTwoD.length &&
      newJ >= 0 &&
      newJ < firstArrayTwoD[newI].length
    ) {
      let randomTile = firstArrayTwoD[newI][newJ];
      if (randomTile !== lastSwappedTile) {
        swap(emptyI, emptyJ, newI, newJ);
        transform(randomTile, emptyJ * 155, emptyI * 155);
        emptyI = newI;
        emptyJ = newJ;
        usedTiles.clear();
        usedTiles.add(randomTile);
        lastSwappedTile = randomTile;
        swaps++;
      }
    }
    if (swaps === 30) {
      clearInterval(intervalId);
    }
  }, 100);
}

function listenClicks() {
  for (let i = 0; i < firstArrayTwoD.length; i++) {
    for (let j = 0; j < firstArrayTwoD.length; j++)
      firstArrayTwoD[i][j].addEventListener("click", (e) => {
        const id = e.target.innerHTML;
        moveTile(id);
      });
  }
}
listenClicks();
