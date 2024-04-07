// Define the chessboard size
const BOARD_SIZE = 8;
let currentNotation;

// Function to generate random chess notation
function generateNotation() {
    const files = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const randomFile = files[Math.floor(Math.random() * BOARD_SIZE)];
    const randomRank = Math.floor(Math.random() * BOARD_SIZE) + 1;
    currentNotation = randomFile + randomRank;
    document.getElementById('targetNotation').textContent = currentNotation;
}

// Function to handle square click
function onSquareClick(square) {

    square.style.transform = "scale(1.1)";
    setTimeout(() => {
        square.style.transform = "scale(1)";
    }, 300);

    
    if (square.textContent2 === currentNotation) {
        square.style.backgroundColor = "green"; // Correct notation
        setTimeout(() => {
            square.style.backgroundColor = ""; // Reset color after 300ms
            generateNotation(); // Generate new notation
        }, 300);
    } else {
        square.style.backgroundColor = "red"; // Incorrect notation
        setTimeout(() => {
            square.style.backgroundColor = ""; // Reset color after 300ms
        }, 300);
    }
}

// Function to create the chessboard
function createChessboard() {
    const chessboard = document.getElementById('chessboard');
    chessboard.innerHTML = '';
    for (let i = 0; i < BOARD_SIZE; i++) {
        for (let j = 0; j < BOARD_SIZE; j++) {
            const square = document.createElement('div');
            square.className = 'square';
            if(showNotation){
                square.textContent = String.fromCharCode(65 + j) + (BOARD_SIZE - i);
            }
            square.textContent2 = String.fromCharCode(65 + j) + (BOARD_SIZE - i);
            square.addEventListener('click', function() {
                onSquareClick(this);
            });
            chessboard.appendChild(square);
        }
    }
}

// Function to toggle notation display
function toggleNotationDisplay() {
    showNotation = document.getElementById('showNotation').checked;
    createChessboard();
}

// Initialize the chessboard and generate first notation
createChessboard();
generateNotation();

// Add event listener to the toggle checkbox
document.getElementById('showNotation').addEventListener('change', toggleNotationDisplay);


