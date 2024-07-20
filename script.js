const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');

let currentPlayer = 'x';
let isGameActive = true;
let moves = 0;
let player1 = ' ';
let player2 = ' ';
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    
]