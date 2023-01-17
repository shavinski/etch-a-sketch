const grid = document.querySelector('#grid');
const clear = document.querySelector('.clear');
const input = document.querySelector('#input');
const inputText = document.querySelector('.grid-size')
const clearButton = document.querySelector('#clear')
const blackDraw = document.querySelector('#black')
const colorfulDraw = document.querySelector('#colorful')

let size = 16
let color = 'black'
let click = true;

// Our slider input which changes value of our size(grid size)
input.addEventListener('input', function (e) {
    size = e.target.value;
    inputText.textContent = `${size} x ${size}`;
});


// Function that creates starting canvas of 16x16, also clears any old divs when we change the size
function sizeGrid(size) {
    const allDivs = grid.querySelectorAll('.box');
    allDivs.forEach((div) => div.remove());

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for (let i = 0; i < (size*size); i++) {
        const singleBox = document.createElement('div');
        singleBox.addEventListener('mouseover', changeColor);
        singleBox.classList.add('box');
        grid.append(singleBox);
    };
};

// Function that changes size of canvas, uses new input to change size of canvas
function changeSize(size) {
    sizeGrid(size);
}

// Function that changes color from either black or colorful
function changeColor() {
    if(click) {
        if(color === 'colorful') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = color;
        };
    };
};

// Changes global color variable to black
blackDraw.addEventListener('click', function(e) {
    if(e.target.id === 'black') {
        color = 'black';
    };
})

// Changes global color variable to colorful
colorfulDraw.addEventListener('click', function(e) {
    if(e.target.id = 'colorful') {
        color = 'colorful'
    };
});


// Changes currents divs on screen to white, making the canvas "clear"
function clearCanvas() {
    const allDivs = grid.querySelectorAll('.box');
    allDivs.forEach((div) => div.style.backgroundColor = 'white');
}

clearButton.addEventListener('click', clearCanvas);

// Makes it so you must click to start drawing and you can unlick to stop drawing 
document.querySelector('#grid').addEventListener('click', () => {
    click = !click
});


sizeGrid(size);