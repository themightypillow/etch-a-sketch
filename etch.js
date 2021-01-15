const sketchPad = document.querySelector("#sketchpad");

for(let i = 0; i < 256; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  sketchPad.appendChild(square);
}