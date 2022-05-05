const container = document.getElementById('container');
const clearBtn = document.getElementById('clearBtn');
const randomColor = document.getElementById('randomColor');
const colorPicker = document.getElementById('colorPicker');

let mode = '';
function randomMode() {
  randomColor.style.borderColor = 'red';
  randomColor.style.backgroundColor = 'white';
  colorPicker.style.borderColor = '';
  colorPicker.style.backgroundColor = 'lightgrey';
  mode = 'random';
}

const defaultColor = '#000000';
const defaultGridSize = 16;
let currentColor = defaultColor;
let currentGridSize = defaultGridSize;

colorPicker.addEventListener('change', (event) => {
  randomColor.style.borderColor = '';
  randomColor.style.backgroundColor = 'lightgrey';
  colorPicker.style.borderColor = 'red';
  colorPicker.style.backgroundColor = 'white';
  mode = 'color';
  currentColor = event.target.value;
});

function clearGrid() {
  const x = container.querySelectorAll('div');
  x.forEach((x) => x.style.backgroundColor = '#FFFFFF');
}

let grid;
let mouseDown = false;

function changeColor(event) {
  if (event.type === 'mouseover' && !mouseDown) return;
  if (mode === 'color') {
    this.style.backgroundColor = currentColor;
  }
  if (mode === 'random') {
    const redRan = Math.floor(Math.random() * 255);
    const greenRan = Math.floor(Math.random() * 255);
    const blueRan = Math.floor(Math.random() * 255);
    this.style.backgroundColor = `rgb(${redRan},${greenRan},${blueRan})`;
  }
}

function gridMaker() {
  clearGrid();
  for (let i = 0; i < currentGridSize * currentGridSize; i += 1) {
    grid = document.createElement('div');
    container.appendChild(grid);

    grid.style.backgroundColor = '#FFFFFF';
    container.style.gridTemplateColumns = `repeat(${currentGridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${currentGridSize}, 1fr)`;

    grid.addEventListener('mouseover', changeColor);
    grid.addEventListener('mousedown', changeColor);
  }
}

const sizeSlider = document.getElementById('sizeSlider');
const sizeDisplay = document.getElementById('sizeDisplay');
sizeSlider.addEventListener('change', (event) => {
  currentGridSize = event.target.value;
  sizeDisplay.innerHTML = `${currentGridSize} x ${currentGridSize} Grid`;
  gridMaker();
});

document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

window.onload = () => {
  gridMaker();
  randomColor.style.borderColor = '';
  randomColor.style.backgroundColor = 'lightgrey';
  colorPicker.style.borderColor = 'red';
  colorPicker.style.backgroundColor = 'white';
  mode = 'color';
  currentColor = defaultColor;
};

clearBtn.addEventListener('click', () => clearGrid());
randomColor.addEventListener('click', () => randomMode());