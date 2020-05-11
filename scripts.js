let canvasWidth = 600;
let canvasHeight = 600;
let rowSize = 16;
let divArray = [];
let isDrawing = false;
let color = 'black'

const pixelSizeInput = document.querySelector('#new-pixels');
const pixelatte = document.querySelector('#repixellate');
const resetButton = document.querySelector('#reset');
const colorButtons = document.querySelectorAll('.color-button');
const canvas = document.querySelector('#container');
const htmlDoc = document.querySelector('html');
htmlDoc.addEventListener('mousedown', () => mouseDown());
htmlDoc.addEventListener('mouseup', () => mouseUp());
colorButtons.forEach((button) => {
    button.addEventListener('click', (e) => changeColor(e));
});

resetButton.addEventListener('click', () => resetCanvas());
pixelatte.addEventListener('click', () => resize());

function resetCanvas() {
    divArray.forEach((div) => {
        div.style.backgroundColor = 'white';
    });
}

function changeColor(e) {
    color = e.target.textContent.toLowerCase();
}

function mouseDown() {
    isDrawing = true;
}

function mouseUp() {
    isDrawing = false;
}

function recolor(e) {
    if(isDrawing) {
        e.target.style.backgroundColor = `${color}`;
    }
}

function adjustGrid() {
    let newStyle = "";
    for(i = 0; i < rowSize; i++) {
        newStyle += '1fr ';
    }
    canvas.style.gridTemplateColumns = newStyle;
    canvas.style.gridTemplateRows = newStyle;
}

function clearCanvas() {
    for(i = 0; i < rowSize * rowSize; i++) {
        canvas.removeChild(divArray[i]);
    }
}

function fillArray() {
    for(i = 0; i < rowSize * rowSize; i++) {
        newPixel = document.createElement('div');
        newPixel.setAttribute('class', 'pixel');
        newPixel.addEventListener('mouseenter', (e) => {
            recolor(e);
        });
        divArray.push(newPixel);
    }
}

function fillCanvas() {
    for(i = 0; i < rowSize * rowSize; i++) {
        canvas.appendChild(divArray[i]);
    }
}

function resize() {
    newSize = parseInt(pixelSizeInput.value);
    if(newSize != newSize) {
        alert("That isn't a proper value for pixels.");
    } else if(newSize > 128 || newSize < 16) {
        alert("Only use values between 16 and 128"); 
    } else {
        clearCanvas();
        rowSize = newSize;
        adjustGrid();
        divArray = [];
        fillArray();
        fillCanvas();
    }
}

adjustGrid();
fillArray();
fillCanvas();