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
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function startGame() {
    player1 = document.getElementById('player1').value || 'Player 1';
    player2 = document.getElementById('player2').value || 'Player 2';
    currentPlayer = 'X';
    resetGame();
}

function handleMove(index) {
    if (!isGameActive || cells[index].textContent !== '') return;

    cells[index].textContent = currentPlayer;
    moves++;

    if (checkWin(currentPlayer)) {
        message.textContent = `${currentPlayer === 'X' ? player1 : player2} wins!`;
        isGameActive = false;
    } else if (moves === 9) {
        message.textContent = 'It\'s a draw!';
        isGameActive = false;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWin(player) {
    return winningCombos.some(combination => {
        return combination.every(index => {
            return cells[index].textContent === player;
        });
    });
}

function resetGame() {
    cells.forEach(cell => {
        cell.textContent = '';
    });
    message.textContent = '';
    isGameActive = true;
    moves = 0;
}
