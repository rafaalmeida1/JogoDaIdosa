let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let gameOver = false;

let symbols = ['o', 'x'];

function handleMove(position){

    if(gameOver){
        return;
    }

    if(board[position] == ''){
        board[position] = symbols[playerTime];

        gameOver = isWin();

        if(!gameOver){
            playerTime = (playerTime == 0)? 1 : 0;
        }
    }
    
    return gameOver;
}

let winStates = [
    // Horizontal
     [0, 1, 2], [3, 4, 5], [6, 7, 8],
     // Vertical
     [0, 3, 6], [1, 4, 7], [2, 5, 8],
     // Diagonal
     [0, 4, 8], [2, 4, 6]
];

function isWin(){

    for(let i = 0; i < winStates.length; i++){
        let [a, b, c] = winStates[i];

        if(board[a] != '' && board[a] == board[b] && board[a] == board[c]){
            return true;
        }
    }

    return false;
}

function resetGame(){

    let squares = document.querySelectorAll('.square');

    squares.forEach((square)=>{
        square.innerHTML = '';
    })

    h3.innerHTML = 'Em Andamento';

    board = ['', '', '', '', '', '', '', '', ''];
    playerTime = 0;
    gameOver = false;
    updateSquares();
}