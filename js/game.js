// Adding span element where to show the names on the games page to a variable
// let nameP1Placeholder = document.querySelector(".player1-name-placeholder");
// let nameP2Placeholder = document.querySelector(".player2-name-placeholder");

// Assigning the data from input to a variable
// let player1 = localStorage.getItem('player1-name');
// let player2 = localStorage.getItem('player2-name');

// let player1 = "ramon"
// let player2 = "amparo";

// Adding the text to the span element
// nameP1Placeholder.innerHTML = player1.toUpperCase();
// nameP2Placeholder.innerHTML = player2.toUpperCase();

//Declaring variable board and current player
// let board;


// let currPlayer = monkeyToken;  //we start with player1 

// let gameOver = false;  //we start with gameOver set to false, so when it is true the game ends.

// Start the game when the page loads

// window.onload = () => {
//     setGame(); 
// }

// function setGame() {
//     board = [
//         [' ', ' ', ' '],
//         [' ', ' ', ' '],
//         [' ', ' ', ' ']
//     ]

//     const boardElement = document.getElementById("board");

//     for(let r = 0 ; r < 3; r++) {
//         for(let c = 0 ; c < 3; c++) {
//             let tile = document.createElement("div")
//             tile.id = r.toString() + "-" + c.toString();
//             tile.classList.add("col-4", "box", "d-flex", "justify-content-center", "align-items-center");
            
//             tile.addEventListener("click", setTile);
//             document.getElementById("board").append(tile);
//         }
//     }
// }

// function setTile() {
//     if (gameOver) {
//         return;
//     }

//     let coords = this.id.split("-")  //splits the id string "1-1" into an array["1", "1"]
//     let r = parseInt(coords[0]);
//     let c = parseInt(coords[1]);

//     board[r][c] = currPlayer;
//     this.innerHTML = currPlayer;
//     console.log(this.innerHTML)   //[object HTMLDivElement]
// }

// const setGame = () => {
//     board = [
//         [' ', ' ', ' '],
//         [' ', ' ', ' '],
//         [' ', ' ', ' ']
//     ]

//     const boardElement = document.getElementById("board");

//     for(let r = 0 ; r < 3; r++) {
//         for(let c = 0 ; c < 3; c++) {
//             let tile = document.createElement("div")
//             tile.id = r.toString() + "-" + c.toString();
//             tile.classList.add("col-4", "box", "d-flex", "justify-content-center", "align-items-center");
            
//             tile.addEventListener("click", () => {
//                 setTile(tile);
//             });
        
//             boardElement.append(tile);
//         }
//     }
// }

// const setTile = (tile) => {
//     if (gameOver) {
//         return;
//     }

//     let coords = tile.id.split("-")  //splits the id string "1-1" into an array["1", "1"]
//     let r = parseInt(coords[0]);
//     let c = parseInt(coords[1]);

    
    
//     board[r][c] = tile.appendChild(monkeyToken);
    
    

//     console.log(board[r][c])   //[object HTMLDivElement]
// }
let tokenP1 = 3;
let tokenP2 = 3;
let turn = true;

let monkeyToken = document.createElement("div");
monkeyToken.id = "monkey-token";
let cocodrileToken = document.createElement("div");
cocodrileToken.id = "cocodrile-token";


let cells = Array.from(document.getElementsByClassName("box"));


// Elements for the panel showing the players turn
let panelP1 = document.getElementById("panel-player-1");
let panelP2 = document.getElementById("panel-player-2");

let yourTurnPar = document.createElement("p");
yourTurnPar.innerHTML = "YOUR TURN";


let monkeyTokenPanel = document.createElement("div");
monkeyTokenPanel.id = "monkey-token-panel";
let cocodrileTokenPanel = document.createElement("div");
cocodrileTokenPanel.id = "cocodrile-token-panel";

// function createImgChild(parent, element, name, width, height){
//     var newNode = document.createElement(element);
//     newNode.setAttribute('width', width);
//     newNode.setAttribute('height', height);
//     newNode.setAttribute('id', nodeID + name);
//     parent.appendChild(newNode)
// }



cells.map(
    (cell) => {
        cell.addEventListener('click', ()=>{
            
            if((cell.innerHTML === "") && (tokenP1 > 0 || tokenP2 > 0)) {

                if (turn) {
                    cell.appendChild(monkeyToken.cloneNode(true));
                    panelP1.appendChild(yourTurnPar);
                    panelP1.appendChild(monkeyTokenPanel);
                   
                } else {
                    cell.appendChild(cocodrileToken.cloneNode(true));
                    panelP2.appendChild(yourTurnPar);
                    panelP2.appendChild(cocodrileTokenPanel);
                }
            (turn) ? tokenP1-- : tokenP2--;

            turn = !turn;
            }
        })
    }
)


