function makeGrid(num) { 
    let bigSize = (480 / num);
    let grid = num * num;
    for(var i = 1; i <= grid; i++) {
        let box = document.createElement('div');
        box.classList.add('box');
        box.style.width = `${bigSize}px`;
        box.style.height = `${bigSize}px`;
        container.appendChild(box);
    }
    defColor();
}

function deleteGrid() {
        let boxes = document.querySelectorAll('.box');
        boxes.forEach((box) => {
            box.parentNode.removeChild(box);
    })
}

function clearGrid() {
    let boxes = document.querySelectorAll('.box')
    boxes.forEach((box) => {
        box.style.backgroundColor = '#e5e7ea';
    })
}

function getRand() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function defColor() {
    let boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = '#c7a384'; 
        });
    });
}

function colorRandom() { 
    let boxes = document.querySelectorAll('.box');
        boxes.forEach((box) => {
         box.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = getRand(); 
        });
    });
}

function gridSize() {
    do {
    var selection = parseInt(window.prompt("Enter a size for your grid [1 - 80]", "18"));
    } while(isNaN(selection) || selection > 80 || selection < 1);
    return selection;
}

const container = document.querySelector('.main-container');
makeGrid(16);
const clearBtn = document.querySelector('.clear-btn');
const resetBtn = document.querySelector('.reset-btn');
const defaultBtn = document.querySelector('.default-btn');
const randomBtn = document.querySelector('.random-btn');

clearBtn.addEventListener('click', (e) => {
    clearGrid();
});

resetBtn.addEventListener('click', (e) => {
    deleteGrid();
    makeGrid(gridSize());
});

defaultBtn.addEventListener('click', (e) => {
    defColor();
});

randomBtn.addEventListener('click', (e) => {
    colorRandom();
});

