//Global variables
const container = document.querySelector('#container');

//Initial setup
drawBoard(16);
addMouseovers();

//Add the sketch area
function drawBoard(size){
  for (i=0; i<size**2; i++){
    const pixel = document.createElement('div');
    pixel.setAttribute("class", "pixel");
    let height = (document.getElementById("container").clientHeight)/size;
    pixel.style.height = height + "px";
    pixel.style.width = height + "px";

    container.appendChild(pixel).className = "pixel";
  }
}

//Adds style to new cells
function addMouseovers(){
  const allPixels = document.querySelectorAll('.pixel');
  allPixels.forEach(function(pix){
    pix.addEventListener('mouseover', function(e){
      e.target.style.background = "black";
    })
  })
}

function newSketchArea(){
  container.innerHTML = "";
  const allPixels = document.querySelectorAll('.pixel');
  allPixels.forEach(function(pix){
    pix.style.background = "white";
  })
  let size = prompt("Please select the pixel density");
  drawBoard(size);
  addMouseovers();
}