const container = document.getElementById('container');
const clearBtn = document.getElementById('clearBtn');
const randomColor = document.getElementById('randomColor');
const colorSpecify = document.getElementById('colorSpecify');

clearBtn.addEventListener('click', e => clearGrid());
randomColor.addEventListener('click', e => randomMode());
colorSpecify.addEventListener('click', e => colorMode());


let mode = "";
function randomMode() {
    randomColor.style.borderColor = 'red';
    colorSpecify.style.borderColor = '';
    mode = 'random';
    gridMaker();
}

function colorMode() {
    randomColor.style.borderColor = '';
    colorSpecify.style.borderColor = 'red';
    mode = 'color';
    gridMaker();
}

const defaultColor = "#000000";
const defaultMode = "colorSpecify";
const defaultGridSize = 16;

let currentColor = defaultColor;
let currentMode = defaultMode;
let currentGridSize = defaultGridSize;

let colorPicker = document.getElementById('colorPicker');
colorPicker.addEventListener('change', (event) => {
    currentColor = event.target.value;
});

let sizeSlider = document.getElementById('sizeSlider');
let sizeDisplay = document.getElementById('sizeDisplay');
sizeSlider.addEventListener('change', (event) => {
    currentGridSize = event.target.value;
    sizeDisplay.innerHTML = `${currentGridSize} x ${currentGridSize} Grid`;
    gridMaker();
});

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
    }
}

function changeColor() {
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
