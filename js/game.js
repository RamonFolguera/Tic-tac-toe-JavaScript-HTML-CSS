// Adding span element where to show the names on the games page to a variable
let nameP1Placeholder = document.querySelector(".player1-name-placeholder");
let nameP2Placeholder = document.querySelector(".player2-name-placeholder");

// Assigning the data from input to a variable
let player1 = sessionStorage.getItem('player1-name');
let player2 = sessionStorage.getItem('player2-name');

// Adding the text to the span element
nameP1Placeholder.innerHTML = player1.toUpperCase();
nameP2Placeholder.innerHTML = player2.toUpperCase();



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


//Declaring variable board 
let boardCheck = ["","","","","","","","",""];

let winningComb = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

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

            boardCheck[cell.id] = (turn) ? "x" : "o";

            checkWinner();

            turn = !turn;
            }
        })
    }
)


const checkWinner = () => {

    for (let i = 0; i < winningComb.length ; i ++) {

        for(let j=0; j < boardCheck.length; j++) {
            
            if(boardCheck[winningComb[i][0]] === "x" && boardCheck[winningComb[i][1]] === "x" && boardCheck[winningComb[i][2]] === "x") {
                sessionStorage.setItem("Winner", player1)
                window.location.href = "../pages/winner.html";
                return true;
            } else if(boardCheck[winningComb[i][0]] === "o" && boardCheck[winningComb[i][1]] === "o" && boardCheck[winningComb[i][2]] === "o") 
            {
                sessionStorage.setItem("Winner", player2)

                window.location.href = "../pages/winner.html";
                return true;
            }
        }
    }
}

  
  

