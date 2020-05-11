let canvasWidth = 600;
let canvasHeight = 600;
let rowSize = 16;
let divArray = [];
let isDrawing = false;

const canvas = document.querySelector('#container');
const htmlDoc = document.querySelector('html');
htmlDoc.addEventListener('mousedown', () => mouseDown());
htmlDoc.addEventListener('mouseup', () => mouseUp());

function mouseDown() {
    isDrawing = true;
}

function mouseUp() {
    isDrawing = false;
}

function recolor(e) {
    if(isDrawing) {
        e.target.style.backgroundColor = 'black';
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

fillArray();
fillCanvas();