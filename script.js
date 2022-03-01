const container = document.getElementById('container');


let setColor = "#000000";
let colorPicker = document.getElementById('colorPicker');
colorPicker.addEventListener('input', (event) => setColor = event.target.value);


let setSize = 16;
let sizeSlider = document.getElementById('sizeSlider');
sizeSlider.addEventListener('input', (event) => setSize = event.target.value);

container.style.display = 'grid';
container.style.zIndex = '10';
container.style.margin = '40px auto';
container.style.width = '30vw';
container.style.height = '60vh';

let gridSize = setSize ** 2;
let grid;

function gridDisplay() {
    for (let i = 1; i <= gridSize; i++) {
        grid = document.createElement('div');
        grid.setAttribute('class', 'squares');
        grid.setAttribute('id', i);
        container.appendChild(grid);

        grid.style.backgroundColor = "#FFFFFF";
        grid.style.border = 'solid';
        grid.style.borderWidth = '1px';
        grid.style.borderColor = 'black';

        container.style.gridTemplateColumns = `repeat(${setSize}, 1fr)`
        container.style.gridTemplateRows = `repeat(${setSize}, 1fr)`

        grid.addEventListener('mouseover', changeBGColor);
    }
}

gridDisplay();

function changeBGColor(event) {
    this.style.backgroundColor = setColor;
}

