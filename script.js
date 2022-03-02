const container = document.getElementById('container');
const clearBtn = document.getElementById('clearBtn');

clearBtn.addEventListener('click', e => clearGrid());

const defaultColor = "#000000";
const defaultGridSize = 16;


let setColor = defaultColor;
let colorPicker = document.getElementById('colorPicker');
colorPicker.addEventListener('input', (event) => {
    setColor = event.target.value;
});


let setSize = defaultGridSize;
let sizeSlider = document.getElementById('sizeSlider');
let sizeDisplay = document.getElementById('sizeDisplay');
sizeSlider.addEventListener('change', (event) => {
    setSize = event.target.value;
    sizeDisplay.innerHTML = `${setSize} x ${setSize} Grid`;
    clearGrid();
    gridDisplay();
});

let grid;
function gridDisplay() {
    for (let i = 0; i < setSize * setSize; i++) {
        grid = document.createElement('div');
        container.appendChild(grid);

        grid.style.backgroundColor = "#FFFFFF";
        container.style.gridTemplateColumns = `repeat(${setSize}, 1fr)`
        container.style.gridTemplateRows = `repeat(${setSize}, 1fr)`

        grid.addEventListener('mouseover', changeBGColor);
    }
}

function changeBGColor(event) {
    this.style.backgroundColor = setColor;
}

function clearGrid() {
    let x = container.querySelectorAll('div')
    x.forEach(x => x.style.backgroundColor = "#FFFFFF");
    }