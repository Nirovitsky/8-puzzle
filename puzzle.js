let threeSpan = document.getElementById("threeSpan");
let thirtySpan = document.getElementById("thirtySpan");
let start = document.getElementById("start-game");
let shuffleDiv = document.getElementById("shuffle");
let shuffleCount = 3;

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
let empty = document.getElementById("empty-first");
let game = [...document.getElementsByTagName("li")];
let chunk = 3;
let giraffeId = document.getElementById("giraffeId");
let tiles = giraffeId.children;
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
let compareArray = game.slice(0, 9);
let compareArrayTwoDimensional = [];
for (let i = 0; i < compareArray.length; i += chunk) {
  compareArrayTwoDimensional.push(compareArray.slice(i, i + chunk));
}

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
  youWon();
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

function startGame() {
  threeSpan.addEventListener("click", function () {
    shuffleCount = 3;
  });

  thirtySpan.addEventListener("click", function () {
    shuffleCount = 30;
  });

  start.addEventListener("click", function () {
    if (shuffleCount === 3) {
      shuffleThree();
      shuffleDiv.style.display = "none";
      let solvePuzzle = document.getElementById("solve-puzzle");
      setTimeout(() => {
        listenClicks();
        solvePuzzle.style.display = "flex";
      }, 1500);
    } else if (shuffleCount === 30) {
      shuffleThirty();
      shuffleDiv.style.display = "none";
      let solvePuzzle = document.getElementById("solve-puzzle");
      setTimeout(() => {
        listenClicks();
        solvePuzzle.style.display = "flex";
      }, 7100);
    }
  });
}
startGame();

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
  let lastSwapTime = 0;

  function loop(timestamp) {
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
        let currentTime = performance.now();
        if (currentTime - lastSwapTime > 500) {
          swap(emptyI, emptyJ, newI, newJ);
          transform(randomTile, emptyJ * 155, emptyI * 155);
          emptyI = newI;
          emptyJ = newJ;
          usedTiles.add(randomTile);
          swaps++;
          lastSwapTime = currentTime;
        }
      }
    }
    if (swaps < 3) {
      window.requestAnimationFrame(loop);
    }
  }

  loop(performance.now());
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
  let lastSwapTime = 0;

  function loop(timestamp) {
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
        let currentTime = performance.now();
        if (currentTime - lastSwapTime > 200) {
          swap(emptyI, emptyJ, newI, newJ);
          transform(randomTile, emptyJ * 155, emptyI * 155);
          emptyI = newI;
          emptyJ = newJ;
          usedTiles.clear();
          usedTiles.add(randomTile);
          lastSwappedTile = randomTile;
          swaps++;
          lastSwapTime = currentTime;
        }
      }
    }
    if (swaps < 30) {
      window.requestAnimationFrame(loop);
    }
  }

  let intervalId = window.setInterval(function () {
    if (swaps === 30) {
      clearInterval(intervalId);
    }
  }, 500);

  loop(performance.now());
}

function updateTileColors() {
  const tiles = document.querySelectorAll("#giraffe-img li");
  for (let i = 0; i < tiles.length; i++) {
    const tile = tiles[i];
    const row = Math.floor(i / 3);
    const col = i % 3;
    if (firstArrayTwoD[row][col] === compareArrayTwoDimensional[row][col]) {
      tile.style.borderColor = "green";
    } else {
      tile.style.borderColor = "red";
    }
  }
}

function youWon() {
  if (firstArrayTwoD.length !== compareArrayTwoDimensional.length) {
    return false;
  }
  for (let i = 0; i < firstArrayTwoD.length; i++) {
    for (let j = 0; j < firstArrayTwoD[i].length; j++) {
      if (firstArrayTwoD[i][j] !== compareArrayTwoDimensional[i][j]) {
        updateTileColors();
        return false;
      }
    }
  }
  updateTileColors();
  document.addEventListener("keydown", function (event) {
    if (event.keyCode === 116) {
      localStorage.setItem("pageReloaded", true);
      let firstPage = document.getElementById("first");
      firstPage.style.display = "none";
      window.location.reload(true);
    }
  });
  disableClicks();
  let solvePuzzle = document.getElementById("solve-puzzle");
  let completed = document.getElementById("completed");
  completed.style.display = "flex";
  solvePuzzle.style.display = "none";
  document.getElementById("giraffe-img").style.backgroundColor =
    "rgb(213 213 213)";
}

window.addEventListener("load", function () {
  let pageReloaded = localStorage.getItem("pageReloaded");
  if (pageReloaded) {
    let firstPage = document.getElementById("first");
    let secondPage = document.getElementById("second");
    secondPage.style.display = "flex";
    firstPage.style.display = "none";
    localStorage.removeItem("pageReloaded");
  }
});

function disableClicks() {
  for (let i = 0; i < firstArrayTwoD.length; i++) {
    for (let j = 0; j < firstArrayTwoD.length; j++) {
      const el = firstArrayTwoD[i][j];
      el.style.pointerEvents = "none";
    }
  }
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

let secondArray = game.slice(9, 18);
let secondArrayTwoD = [];
for (let i = 0; i < secondArray.length; i += chunk) {
  secondArrayTwoD.push(secondArray.slice(i, i + chunk));
}
let emptySecond = document.getElementById("empty-second");
resetSecond(secondArrayTwoD);
let compareArraySecond = game.slice(9, 18);
let compareArrayTwoDimensionalSecond = [];
for (let i = 0; i < compareArraySecond.length; i += chunk) {
  compareArrayTwoDimensionalSecond.push(compareArraySecond.slice(i, i + chunk));
}

const directionsSecond = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1],
];
function getEmptySecond(i, j) {
  for (let x = 0; x < directionsSecond.length; x++) {
    const newI = i + directionsSecond[x][0];
    const newJ = j + directionsSecond[x][1];
    if (
      newI >= 0 &&
      newI < secondArrayTwoD.length &&
      newJ >= 0 &&
      newJ < secondArrayTwoD.length &&
      secondArrayTwoD[newI][newJ] === emptySecond
    ) {
      return [newI, newJ];
    }
  }
  return [-1, -1];
}
function findElSecond(id) {
  for (let i = 0; i < secondArrayTwoD.length; i++) {
    for (let j = 0; j < secondArrayTwoD.length; j++) {
      if (secondArrayTwoD[i][j].innerHTML === id) return [i, j];
    }
  }
}
function moveTileSecond(id) {
  let [i, j] = findElSecond(id);
  if (secondArrayTwoD[i][j] === emptySecond) {
    return null;
  }
  let [emptyI, emptyJ] = getEmptySecond(i, j);
  if (emptyI === -1) {
    return null;
  }
  swapSecond(i, j, emptyI, emptyJ);
  transformSecond(secondArrayTwoD[emptyI][emptyJ], emptyJ * 155, emptyI * 155);
  transformSecond(secondArrayTwoD[i][j], j * 155, i * 155);
}

function swapSecond(i, j, newI, newJ) {
  let temp = secondArrayTwoD[newI][newJ];
  secondArrayTwoD[newI][newJ] = secondArrayTwoD[i][j];
  secondArrayTwoD[i][j] = temp;
  youWonSecond();
}

function transformSecond(el, x, y) {
  el.style.transform = `translate(${x}px, ${y}px)`;
  el.style.transition = "transform 0.5s";
}

function resetSecond(arr) {
  let counter = 0;
  for (let i = 0; i < chunk; i++) {
    for (let j = 0; j < chunk; j++) {
      arr[i][j].style.top = "-15px";
      arr[i][j].style.left = "0px";
      transformSecond(arr[i][j], j * 155, i * 155);
      arr[i][j].innerHTML = counter++;
    }
  }
}

function startGameSecond() {
  threeSpan.addEventListener("click", function () {
    shuffleCount = 3;
  });

  thirtySpan.addEventListener("click", function () {
    shuffleCount = 30;
  });

  start.addEventListener("click", function () {
    if (shuffleCount === 3) {
      shuffleThreeSecond();
      shuffleDiv.style.display = "none";
      let solvePuzzle = document.getElementById("solve-puzzle");
      setTimeout(() => {
        listenClicksSecond();
        solvePuzzle.style.display = "flex";
      }, 1500);
    } else if (shuffleCount === 30) {
      shuffleThirtySecond();
      shuffleDiv.style.display = "none";
      let solvePuzzle = document.getElementById("solve-puzzle");
      setTimeout(() => {
        listenClicksSecond();
        solvePuzzle.style.display = "flex";
      }, 7100);
    }
  });
}
startGameSecond();

let usedTilesSecond = new Set();
function shuffleThreeSecond() {
  let emptyI, emptyJ;
  for (let i = 0; i < secondArrayTwoD.length; i++) {
    for (let j = 0; j < secondArrayTwoD[i].length; j++) {
      if (secondArrayTwoD[i][j] === emptySecond) {
        emptyI = i;
        emptyJ = j;
        break;
      }
    }
  }
  usedTilesSecond.clear();
  let swaps = 0;
  let lastSwapTime = 0;

  function loop(timestamp) {
    let randomDirection = directions[Math.floor(Math.random() * 4)];
    let newI = emptyI + randomDirection[0];
    let newJ = emptyJ + randomDirection[1];
    if (
      newI >= 0 &&
      newI < secondArrayTwoD.length &&
      newJ >= 0 &&
      newJ < secondArrayTwoD[newI].length
    ) {
      let randomTile = secondArrayTwoD[newI][newJ];
      if (!usedTilesSecond.has(randomTile)) {
        let currentTime = performance.now();
        if (currentTime - lastSwapTime > 500) {
          swapSecond(emptyI, emptyJ, newI, newJ);
          transformSecond(randomTile, emptyJ * 155, emptyI * 155);
          emptyI = newI;
          emptyJ = newJ;
          usedTilesSecond.add(randomTile);
          swaps++;
          lastSwapTime = currentTime;
        }
      }
    }
    if (swaps < 3) {
      window.requestAnimationFrame(loop);
    }
  }

  loop(performance.now());
}

let lastSwappedTileSecond;
function shuffleThirtySecond() {
  let emptyI, emptyJ;
  for (let i = 0; i < secondArrayTwoD.length; i++) {
    for (let j = 0; j < secondArrayTwoD[i].length; j++) {
      if (secondArrayTwoD[i][j] === emptySecond) {
        emptyI = i;
        emptyJ = j;
        break;
      }
    }
  }
  usedTilesSecond.clear();
  let swaps = 0;
  let lastSwapTime = 0;

  function loop(timestamp) {
    let randomDirection = directions[Math.floor(Math.random() * 4)];
    let newI = emptyI + randomDirection[0];
    let newJ = emptyJ + randomDirection[1];
    if (
      newI >= 0 &&
      newI < secondArrayTwoD.length &&
      newJ >= 0 &&
      newJ < secondArrayTwoD[newI].length
    ) {
      let randomTile = secondArrayTwoD[newI][newJ];
      if (randomTile !== lastSwappedTileSecond) {
        let currentTime = performance.now();
        if (currentTime - lastSwapTime > 200) {
          swapSecond(emptyI, emptyJ, newI, newJ);
          transformSecond(randomTile, emptyJ * 155, emptyI * 155);
          emptyI = newI;
          emptyJ = newJ;
          usedTilesSecond.clear();
          usedTilesSecond.add(randomTile);
          lastSwappedTileSecond = randomTile;
          swaps++;
          lastSwapTime = currentTime;
        }
      }
    }
    if (swaps < 30) {
      window.requestAnimationFrame(loop);
    }
  }

  let intervalId = window.setInterval(function () {
    if (swaps === 30) {
      clearInterval(intervalId);
    }
  }, 500);

  loop(performance.now());
}

function updateTileColorSecond() {
  const tiles = document.querySelectorAll("#man-mountain li");
  for (let i = 0; i < tiles.length; i++) {
    const tile = tiles[i];
    const row = Math.floor(i / 3);
    const col = i % 3;
    if (
      secondArrayTwoD[row][col] === compareArrayTwoDimensionalSecond[row][col]
    ) {
      tile.style.borderColor = "green";
    } else {
      tile.style.borderColor = "red";
    }
  }
}

function youWonSecond() {
  if (secondArrayTwoD.length !== compareArrayTwoDimensionalSecond.length) {
    return false;
  }
  for (let i = 0; i < secondArrayTwoD.length; i++) {
    for (let j = 0; j < secondArrayTwoD[i].length; j++) {
      if (secondArrayTwoD[i][j] !== compareArrayTwoDimensionalSecond[i][j]) {
        updateTileColorSecond();
        return false;
      }
    }
  }
  updateTileColorSecond();
  document.addEventListener("keydown", function (event) {
    if (event.keyCode === 116) {
      localStorage.setItem("pageReloaded", true);
      let firstPage = document.getElementById("first");
      firstPage.style.display = "none";
      window.location.reload(true);
    }
  });
  disableClicksSecond();
  let solvePuzzle = document.getElementById("solve-puzzle");
  let completed = document.getElementById("completed");
  completed.style.display = "flex";
  solvePuzzle.style.display = "none";
  document.getElementById("man-mountain").style.backgroundColor =
    "rgb(213 213 213)";
}

window.addEventListener("load", function () {
  let pageReloaded = localStorage.getItem("pageReloaded");
  if (pageReloaded) {
    let firstPage = document.getElementById("first");
    let secondPage = document.getElementById("second");
    secondPage.style.display = "flex";
    firstPage.style.display = "none";
    localStorage.removeItem("pageReloaded");
  }
});

function disableClicksSecond() {
  for (let i = 0; i < secondArrayTwoD.length; i++) {
    for (let j = 0; j < secondArrayTwoD.length; j++) {
      const el = secondArrayTwoD[i][j];
      el.style.pointerEvents = "none";
    }
  }
}

function listenClicksSecond() {
  for (let i = 0; i < secondArrayTwoD.length; i++) {
    for (let j = 0; j < secondArrayTwoD.length; j++)
      secondArrayTwoD[i][j].addEventListener("click", (e) => {
        const id = e.target.innerHTML;
        moveTileSecond(id);
      });
  }
}

let thirdArray = game.slice(18, 27);
let thirdArrayTwoD = [];
for (let i = 0; i < thirdArray.length; i += chunk) {
  thirdArrayTwoD.push(thirdArray.slice(i, i + chunk));
}
let emptyThird = document.getElementById("empty-third");
resetThird(thirdArrayTwoD);
let compareArrayThird = game.slice(18, 27);
let compareArrayTwoDimensionalThird = [];
for (let i = 0; i < compareArrayThird.length; i += chunk) {
  compareArrayTwoDimensionalThird.push(compareArrayThird.slice(i, i + chunk));
}

const directionsThird = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1],
];
function getEmptyThird(i, j) {
  for (let x = 0; x < directionsThird.length; x++) {
    const newI = i + directionsThird[x][0];
    const newJ = j + directionsThird[x][1];
    if (
      newI >= 0 &&
      newI < thirdArrayTwoD.length &&
      newJ >= 0 &&
      newJ < thirdArrayTwoD.length &&
      thirdArrayTwoD[newI][newJ] === emptyThird
    ) {
      return [newI, newJ];
    }
  }
  return [-1, -1];
}
function findElThird(id) {
  for (let i = 0; i < thirdArrayTwoD.length; i++) {
    for (let j = 0; j < thirdArrayTwoD.length; j++) {
      if (thirdArrayTwoD[i][j].innerHTML === id) return [i, j];
    }
  }
}
function moveTileThird(id) {
  let [i, j] = findElThird(id);
  if (thirdArrayTwoD[i][j] === emptyThird) {
    return null;
  }
  let [emptyI, emptyJ] = getEmptyThird(i, j);
  if (emptyI === -1) {
    return null;
  }
  swapThird(i, j, emptyI, emptyJ);
  transformThird(thirdArrayTwoD[emptyI][emptyJ], emptyJ * 155, emptyI * 155);
  transformThird(thirdArrayTwoD[i][j], j * 155, i * 155);
}

function swapThird(i, j, newI, newJ) {
  let temp = thirdArrayTwoD[newI][newJ];
  thirdArrayTwoD[newI][newJ] = thirdArrayTwoD[i][j];
  thirdArrayTwoD[i][j] = temp;
  youWonThird();
}

function transformThird(el, x, y) {
  el.style.transform = `translate(${x}px, ${y}px)`;
  el.style.transition = "transform 0.5s";
}

function resetThird(arr) {
  let counter = 0;
  for (let i = 0; i < chunk; i++) {
    for (let j = 0; j < chunk; j++) {
      arr[i][j].style.top = "-15px";
      arr[i][j].style.left = "0px";
      transformThird(arr[i][j], j * 155, i * 155);
      arr[i][j].innerHTML = counter++;
    }
  }
}

function startGameThird() {
  threeSpan.addEventListener("click", function () {
    shuffleCount = 3;
  });

  thirtySpan.addEventListener("click", function () {
    shuffleCount = 30;
  });

  start.addEventListener("click", function () {
    if (shuffleCount === 3) {
      shuffleThreeThird();
      shuffleDiv.style.display = "none";
      let solvePuzzle = document.getElementById("solve-puzzle");
      setTimeout(() => {
        listenClicksThird();
        solvePuzzle.style.display = "flex";
      }, 1500);
    } else if (shuffleCount === 30) {
      shuffleThirtyThird();
      shuffleDiv.style.display = "none";
      let solvePuzzle = document.getElementById("solve-puzzle");
      setTimeout(() => {
        listenClicksThird();
        solvePuzzle.style.display = "flex";
      }, 7100);
    }
  });
}
startGameThird();

let usedTilesThird = new Set();
function shuffleThreeThird() {
  let emptyI, emptyJ;
  for (let i = 0; i < thirdArrayTwoD.length; i++) {
    for (let j = 0; j < thirdArrayTwoD[i].length; j++) {
      if (thirdArrayTwoD[i][j] === emptyThird) {
        emptyI = i;
        emptyJ = j;
        break;
      }
    }
  }
  usedTilesThird.clear();
  let swaps = 0;
  let lastSwapTime = 0;

  function loop(timestamp) {
    let randomDirection = directions[Math.floor(Math.random() * 4)];
    let newI = emptyI + randomDirection[0];
    let newJ = emptyJ + randomDirection[1];
    if (
      newI >= 0 &&
      newI < thirdArrayTwoD.length &&
      newJ >= 0 &&
      newJ < thirdArrayTwoD[newI].length
    ) {
      let randomTile = thirdArrayTwoD[newI][newJ];
      if (!usedTilesThird.has(randomTile)) {
        let currentTime = performance.now();
        if (currentTime - lastSwapTime > 500) {
          swapThird(emptyI, emptyJ, newI, newJ);
          transformThird(randomTile, emptyJ * 155, emptyI * 155);
          emptyI = newI;
          emptyJ = newJ;
          usedTilesThird.add(randomTile);
          swaps++;
          lastSwapTime = currentTime;
        }
      }
    }
    if (swaps < 3) {
      window.requestAnimationFrame(loop);
    }
  }

  loop(performance.now());
}

let lastSwappedTileThird;
function shuffleThirtyThird() {
  let emptyI, emptyJ;
  for (let i = 0; i < thirdArrayTwoD.length; i++) {
    for (let j = 0; j < thirdArrayTwoD[i].length; j++) {
      if (thirdArrayTwoD[i][j] === emptyThird) {
        emptyI = i;
        emptyJ = j;
        break;
      }
    }
  }
  usedTilesThird.clear();
  let swaps = 0;
  let lastSwapTime = 0;

  function loop(timestamp) {
    let randomDirection = directions[Math.floor(Math.random() * 4)];
    let newI = emptyI + randomDirection[0];
    let newJ = emptyJ + randomDirection[1];
    if (
      newI >= 0 &&
      newI < thirdArrayTwoD.length &&
      newJ >= 0 &&
      newJ < thirdArrayTwoD[newI].length
    ) {
      let randomTile = thirdArrayTwoD[newI][newJ];
      if (randomTile !== lastSwappedTileThird) {
        let currentTime = performance.now();
        if (currentTime - lastSwapTime > 200) {
          swapThird(emptyI, emptyJ, newI, newJ);
          transformThird(randomTile, emptyJ * 155, emptyI * 155);
          emptyI = newI;
          emptyJ = newJ;
          usedTilesThird.clear();
          usedTilesThird.add(randomTile);
          lastSwappedTileThird = randomTile;
          swaps++;
          lastSwapTime = currentTime;
        }
      }
    }
    if (swaps < 30) {
      window.requestAnimationFrame(loop);
    }
  }

  let intervalId = window.setInterval(function () {
    if (swaps === 30) {
      clearInterval(intervalId);
    }
  }, 500);

  loop(performance.now());
}

function updateTileColorThird() {
  const tiles = document.querySelectorAll("#cube li");
  for (let i = 0; i < tiles.length; i++) {
    const tile = tiles[i];
    const row = Math.floor(i / 3);
    const col = i % 3;
    if (
      thirdArrayTwoD[row][col] === compareArrayTwoDimensionalThird[row][col]
    ) {
      tile.style.borderColor = "green";
    } else {
      tile.style.borderColor = "red";
    }
  }
}

function youWonThird() {
  if (thirdArrayTwoD.length !== compareArrayTwoDimensionalThird.length) {
    return false;
  }
  for (let i = 0; i < thirdArrayTwoD.length; i++) {
    for (let j = 0; j < thirdArrayTwoD[i].length; j++) {
      if (thirdArrayTwoD[i][j] !== compareArrayTwoDimensionalThird[i][j]) {
        updateTileColorThird();
        return false;
      }
    }
  }
  updateTileColorThird();
  document.addEventListener("keydown", function (event) {
    if (event.keyCode === 116) {
      localStorage.setItem("pageReloaded", true);
      let firstPage = document.getElementById("first");
      firstPage.style.display = "none";
      window.location.reload(true);
    }
  });
  disableClicksThird();
  let solvePuzzle = document.getElementById("solve-puzzle");
  let completed = document.getElementById("completed");
  completed.style.display = "flex";
  solvePuzzle.style.display = "none";
  document.getElementById("cube").style.backgroundColor = "rgb(213 213 213)";
}

window.addEventListener("load", function () {
  let pageReloaded = localStorage.getItem("pageReloaded");
  if (pageReloaded) {
    let firstPage = document.getElementById("first");
    let secondPage = document.getElementById("second");
    secondPage.style.display = "flex";
    firstPage.style.display = "none";
    localStorage.removeItem("pageReloaded");
  }
});

function disableClicksThird() {
  for (let i = 0; i < thirdArrayTwoD.length; i++) {
    for (let j = 0; j < thirdArrayTwoD.length; j++) {
      const el = thirdArrayTwoD[i][j];
      el.style.pointerEvents = "none";
    }
  }
}

function listenClicksThird() {
  for (let i = 0; i < thirdArrayTwoD.length; i++) {
    for (let j = 0; j < thirdArrayTwoD.length; j++)
      thirdArrayTwoD[i][j].addEventListener("click", (e) => {
        const id = e.target.innerHTML;
        moveTileThird(id);
      });
  }
}
