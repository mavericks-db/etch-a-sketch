const container = document.getElementById('container');
const clearBtn = document.getElementById('clearBtn');
const randomColor = document.getElementById('randomColor');
const colorSpecify = document.getElementById('colorSpecify');

clearBtn.addEventListener('click', e => clearGrid());
randomColor.addEventListener('click', e => randomMode());


let mode = "";
function randomMode() {
    randomColor.style.borderColor = 'red';
    randomColor.style.backgroundColor = 'white';
    colorPicker.style.borderColor = '';
    colorPicker.style.backgroundColor = "lightgrey";
    mode = 'random';
}

const defaultColor = "#000000";
const defaultMode = "colorSpecify";
const defaultGridSize = 16;

let currentColor = defaultColor;
let currentMode = defaultMode;
let currentGridSize = defaultGridSize;

let colorPicker = document.getElementById('colorPicker');
colorPicker.addEventListener('change', (event) => {
    randomColor.style.borderColor = '';
    randomColor.style.backgroundColor = "lightgrey";
    colorPicker.style.borderColor = 'red';
    colorPicker.style.backgroundColor = "white";
    mode = 'color';
    currentColor = event.target.value;
});

let sizeSlider = document.getElementById('sizeSlider');
let sizeDisplay = document.getElementById('sizeDisplay');
sizeSlider.addEventListener('change', (event) => {
    currentGridSize = event.target.value;
    sizeDisplay.innerHTML = `${currentGridSize} x ${currentGridSize} Grid`;
    gridMaker();
});

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

let grid;
function gridMaker() {
    clearGrid();
    for (let i = 0; i < currentGridSize * currentGridSize; i++) {
        grid = document.createElement('div');
        container.appendChild(grid);

        grid.style.backgroundColor = "#FFFFFF";
        container.style.gridTemplateColumns = `repeat(${currentGridSize}, 1fr)`
        container.style.gridTemplateRows = `repeat(${currentGridSize}, 1fr)`

        grid.addEventListener('mouseover', changeColor);
        grid.addEventListener('mousedown', changeColor);
    }
}

function changeColor(event) {
    if (event.type === 'mouseover' && !mouseDown) return
    if (mode == 'color') {
        this.style.backgroundColor = currentColor;
    }
    if (mode == 'random') {
        let redRan = Math.floor(Math.random() * 255);
        let greenRan = Math.floor(Math.random() * 255);
        let blueRan = Math.floor(Math.random() * 255);
        this.style.backgroundColor = `rgb(${redRan},${greenRan},${blueRan})`;
    }
}

function clearGrid() {
    let x = container.querySelectorAll('div')
    x.forEach(x => x.style.backgroundColor = "#FFFFFF");
}


window.onload = () => {
    gridMaker();
}