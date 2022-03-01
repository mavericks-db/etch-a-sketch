const container = document.getElementById('container');
container.style.display = 'grid';
container.style.margin = '50px auto';
container.style.width = '30vw';
container.style.height = '60vh';

let size = 16;
let gridSize = size ** 2;

let grid;

function gridDisplay() {
    for (let i = 1; i <= gridSize; i++) {
        grid = document.createElement('div');
        grid.setAttribute('class', 'squares');
        grid.setAttribute('id', i);
        container.appendChild(grid);

        grid.style.backgroundColor = "#c9cec9";
        grid.style.borderWidth = '1px';
        grid.style.borderStyle = 'solid';
        grid.style.borderColor = "black";
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`
        console.log(grid, i);

        grid.addEventListener('click', changeBGColor);
        grid.addEventListener('mouseover', stopBGColor);
    }
}

gridDisplay();

function changeBGColor(event) {
    this.style.backgroundColor = "blue";
}
function stopBGColor(event) {
    this.style.backgroundColor = "red";
}
