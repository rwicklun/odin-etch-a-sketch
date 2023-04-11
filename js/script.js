function updateGridSize() {
    let gridUpdate = document.getElementById('grid-size');
    let newGridSize = gridUpdate.value;
    console.log(newGridSize);
    setUpGrid(newGridSize)
    
}

function updateValueText() {
    let gridUpdate = document.getElementById('grid-size');
    let newGridSize = gridUpdate.value;
    document.querySelector('.inputValueDisplay').textContent = newGridSize;
}

let toggleRandomState = false;

function setUpGrid (gridSize){
    if (isNaN(gridSize) || gridSize >100 || gridSize < 1) return;
    let gridContainer = document.querySelector('.drawing-container');
    gridContainer.innerHTML = '';
    for (let index = 1; index <= gridSize; index++) {
        const column = document.createElement('div');
        column.style.border = 'none';
        column.style.margin = '0px';
        column.style.padding = '0px';
        column.style.flexGrow = 1;
        column.style.display = 'flex';
        column.style.flexDirection = 'column';

        for (let cellIndex = 1; cellIndex <= gridSize; cellIndex++) {
            const cell = document.createElement('div');
            cell.style.border = 'none';
            cell.style.margin = '0px';
            cell.style.padding = '0px';
            cell.style.flexGrow = 1;
            cell.classList.add('cell');
            column.appendChild(cell);
            cell.addEventListener('mouseover', () => {
                if (!toggleRandomState){
                    cell.style.backgroundColor = 'black';
                } else {
                    cell.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
                }
                setToggleRandom();
            });
        }
        gridContainer.appendChild(column);
        setToggleRandom();
        
    }

}
setUpGrid(16);

const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', () => {
    updateGridSize();
});
function setToggleRandom() {
    let toggleState = document.querySelector('.toggleState');
    const cells = document.querySelectorAll('.cell');
    if (toggleRandomState){
        toggleState.textContent = 'On';
        cells.forEach(cell => {
            cell.classList.add('random');
        });
    } else {
        toggleState.textContent = 'Off';
        cells.forEach(cell => {
            cell.classList.remove('random');
        });
    }
}
const randomButton = document.querySelector('.randomButton');
randomButton.addEventListener('click', () => {
    toggleRandomState = !toggleRandomState;
    setToggleRandom();
});