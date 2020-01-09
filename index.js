var origBoard;
const replayBtn = document.getElementById('replay-btn'),
    cells = document.querySelectorAll('.cell'),
    endGameDiv = document.querySelector('.endgame'),
    humanPlayer = 'X', 
    AIPlayer = 'O',
    winCombos = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
// 012
// 345
// 678
const clickInCell = (square)=>{
    console.log(square.target.id);
};
const startGame = ()=> {
    endGameDiv.style.display = "none";
    origBoard = Array.from(Array(9).keys());
    for(let i = 0; i < cells.length;i++){
        cells[i].innerText = "";
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click',clickInCell,false);
    }
};

const replayFun = ()=>{
    console.log('Hi');
    console.log(cells);
};

replayBtn.addEventListener('click',replayFun);