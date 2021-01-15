const sketchPad = document.querySelector("#sketchpad");
const clearBtn = document.querySelector("#clear");

function clearPad() {
  let gridSize = prompt("Enter number of squares per side (Min: 2, Max: 100, Default: 16");
  console.log(`gridSize 1: ${gridSize}`);
  if(!Number.isInteger(Number(gridSize)) || gridSize === null) {
    gridSize = 16;
  }
  else if(gridSize < 2) {
    gridSize = 2;
  }
  else if(gridSize > 100) {
    gridSize = 100;
  }

  console.log(`gridSize 2: ${gridSize}`);

  while(sketchPad.firstChild) {
    sketchPad.removeChild(sketchPad.firstChild);
  }

  buildPad(gridSize);
}

function buildPad(n) {
  sketchPad.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
  sketchPad.style.gridTemplateRows = `repeat(${n}, 1fr)`;
  for(let i = 0; i < n * n; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", (e) => e.target.classList.add("trail"));
    sketchPad.appendChild(square);
  }
}

clearBtn.addEventListener("click", clearPad);

buildPad(16);