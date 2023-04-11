function updateGridSize() {
    let gridUpdate = document.getElementById('grid-size');
    let newGridSize = gridUpdate.value;
    console.log(newGridSize);
    
}

function updateValueText() {
    let gridUpdate = document.getElementById('grid-size');
    let newGridSize = gridUpdate.value;
    document.querySelector('.control-container > p').textContent = newGridSize;
}