/* jshint esversion: 6*/
let pixelPainter = document.querySelector("#pixelPainter");

let title = document.createElement("div");
title.id = "title";
let leftDiv = document.createElement("div");
leftDiv.id = "leftDiv";
let rightDiv = document.createElement("div");
rightDiv.id = "rightDiv";
pixelPainter.appendChild(title);
title.appendChild(leftDiv);
title.appendChild(rightDiv);

let colors = ['#000', '#fff', '#ff0000', '#ffb6c1', '#66cdaa',
              '#7f7fff', '#9999ff', '#b2b2ff', '#ccccff', '#e5e5ff'];

let storedColor = "#fff";
let dragging = null;
let cellList = document.getElementsByClassName("cells");

function generateGrid (numCols, numCells){
  let grid = document.createElement("div");
  grid.className = "grid";
  for(let i = 0; i < numCols; i++){
    let cols = document.createElement("div");
    grid.appendChild(cols);
    cols.className = "cols";
    for(let j = 0; j < numCells; j++){
      let cells = document.createElement("div");
      cells.className = "cells";
      cells.id = j;
      cells.addEventListener("click", coloring);
      cells.addEventListener("mousedown", mouseDown);
      cells.addEventListener("mouseover", mouseOver);
      cells.addEventListener("mouseup", mouseUp);
      cols.appendChild(cells);
    }
  }
  rightDiv.appendChild(grid);
}


function generateColorGrid (numColorCols, numColorCells){
  debugger;
  let colorGrid = document.createElement("div");
  colorGrid.className = "colorGrid";
  for(let i = 0; i < numColorCols; i++){
    let colorCols = document.createElement("div");
    colorGrid.appendChild(colorCols);
    colorCols.className = "colorCols";
    for(let j = 0; j < numColorCells; j++){
      let colorCells = document.createElement("div");
      colorCells.className = "colorCells";
      colorCells.id = j;
      colorCells.setAttribute('style', 'background-color:' + colors[i]);
      colorCols.appendChild(colorCells);
      colorCells.addEventListener("click", storeColor);
    }
  }
  leftDiv.appendChild(colorGrid);
}

function mouseDown(event) {
  dragging = true;
  this.style.backgroundColor = storedColor;
}

function mouseUp(event) {
  dragging = false;
}

function mouseOver(event) {
  if (dragging === true) {
    this.style.backgroundColor = storedColor;
  } else {
    mouseUp();
  }
}




function storeColor(event) {
  storedColor = event.target.style.backgroundColor;
  console.log(storedColor);
}

function coloring (event) {
  event.target.style.backgroundColor = storedColor;
  console.log(storedColor);
}

function erase(event) {
  storedColor = "#FFF";
}

function eraseButton() {
  let eButton = document.createElement("button");
  eButton.className = "button";
  leftDiv.appendChild(eButton);
  eButton.innerHTML = "Eraser";
  eButton.addEventListener("click", erase);
}

function clear(event) {
  for(let i = 0; i < cellList.length; i++ ) {
   cellList[i].style.backgroundColor = "#FFFFFF";
  }
}

function clearButton() {
  let cButton = document.createElement("button");
  cButton.className = "button";
  leftDiv.appendChild(cButton);
  cButton.innerHTML = "Clear";
  cButton.addEventListener("click", clear);
}

generateColorGrid(10,2);
clearButton();
eraseButton();
generateGrid(10,10);






// function selectColor() {
//   let selectedColor = event.target.style.backgroundColor;
// }

// let colorCellVar = document.querySelectorAll(".colorCells");
// //adding on click event listener to colorgrid
// colorCellVar.forEach.call(colorCells, function(colorCell) {
//   colorCell.addEventListener("click", selectColor());
// });