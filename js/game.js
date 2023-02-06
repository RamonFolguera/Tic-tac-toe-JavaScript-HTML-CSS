// Adding span element where to show the names on the games page to a variable
let nameP1Placeholder = document.querySelector(".player1-name-placeholder");
let nameP2Placeholder = document.querySelector(".player2-name-placeholder");

// Assigning the data from input to a variable
// let player1 = localStorage.getItem('player1-name');
// let player2 = localStorage.getItem('player2-name');

// let player1 = "ramon"
// let player2 = "amparo";

// Adding the text to the span element
// nameP1Placeholder.innerHTML = player1.toUpperCase();
// nameP2Placeholder.innerHTML = player2.toUpperCase();

//Declaring variable board and current player
let board;

let monkeyToken = document.createElement("div");
monkeyToken.id = "monkey-token"
let currPlayer = monkeyToken;  //we start with player1 
let gameOver = false; //we start with gameOver set to false, so when it is true the game ends.

// Start the game when the page loads

window.onload = () => {
    setGame(); 
}

function setGame() {
    board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ]

    for(let r = 0 ; r < 3; r++) {
        for(let c = 0 ; c < 3; c++) {
            let tile = document.createElement("div")
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("col-4", "box", "d-flex", "justify-content-center", "align-items-center");
            
            tile.addEventListener("click", setTile);
            document.getElementById("board").append(tile);
        }
    }
}

function setTile() {
    if (gameOver) {
        return;
    }
    let coords = this.id.split("-")  //splits the id string "1-1" into an array["1", "1"]
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    board[r][c] = currPlayer;
    this.innerText = currPlayer;

}