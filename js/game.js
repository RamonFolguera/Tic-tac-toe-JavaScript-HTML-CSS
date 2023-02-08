// Adding span element where to show the names on the games page to a variable
let nameP1Placeholder = document.querySelector(".player1-name-placeholder");
let nameP2Placeholder = document.querySelector(".player2-name-placeholder");

// Assigning the data from input to a variable
let player1 = sessionStorage.getItem('player1-name');
let player2 = sessionStorage.getItem('player2-name');

// Adding the text to the span element
nameP1Placeholder.innerHTML = player1.toUpperCase();
nameP2Placeholder.innerHTML = player2.toUpperCase();

//Declaring variable board 
let boardCheckP1 = ["","","","","","","","",""];
let boardCheckP2 = ["","","","","","","","",""];

let winComb = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];

console.log((winComb[0][0] == boardCheckP1[0]));
console.log(winComb[0][0]);
const checkWinner = () => {
    console.log(boardCheckP1)
    console.log(boardCheckP2)
        
    if((winComb[0][0] == boardCheckP1[0]) && (winComb[0][1] == boardCheckP1[1]) && (winComb[0][2] == boardCheckP1[2])) {
        console.log("winner1");
        // return true; Necesario?
        window.location.href = "../pages/winner.html";
    } else if ((winComb[1][0] == boardCheckP1[3]) && (winComb[1][1] == boardCheckP1[4]) && (winComb[1][2] == boardCheckP1[5])) {
        console.log("winner2");
        window.location.href = "../pages/winner.html";
    } else if ((winComb[2][0] == boardCheckP1[6]) && (winComb[2][1] == boardCheckP1[7]) && (winComb[2][2] == boardCheckP1[8])) {
        console.log("winner3");
        window.location.href = "../pages/winner.html";
    } else if ((winComb[3][0] == boardCheckP1[0]) && (winComb[3][1] == boardCheckP1[3]) && (winComb[3][2] == boardCheckP1[6])) {
        console.log("winner4");
        window.location.href = "../pages/winner.html";
    } else if ((winComb[4][0] == boardCheckP1[1]) && (winComb[4][1] == boardCheckP1[4]) && (winComb[4][2] == boardCheckP1[7])) {
        console.log("winner5");
        window.location.href = "../pages/winner.html";
    } else if ((winComb[5][0] == boardCheckP1[2]) && (winComb[5][1] == boardCheckP1[5]) && (winComb[5][2] == boardCheckP1[8])) {
        console.log("winner6");
        window.location.href = "../pages/winner.html";
    } else if ((winComb[6][0] == boardCheckP1[0]) && (winComb[6][1] == boardCheckP1[4]) && (winComb[6][2] == boardCheckP1[8])) {
        console.log("winner7");
        window.location.href = "../pages/winner.html";
    } else if ((winComb[7][0] == boardCheckP1[2]) && (winComb[7][1] == boardCheckP1[4]) && (winComb[7][2] == boardCheckP1[6])) {
        console.log("winner8");
        window.location.href = "../pages/winner.html";
    } else if((winComb[0][0] == boardCheckP2[0]) && (winComb[0][1] == boardCheckP2[1]) && (winComb[0][2] == boardCheckP2[2])) {
        console.log("winner1");
        // return true; Necesario?
        window.location.href = "../pages/winner.html"; 
    } else if ((winComb[1][0] == boardCheckP2[3]) && (winComb[1][1] == boardCheckP2[4]) && (winComb[1][2] == boardCheckP2[5])) {
        console.log("winner2");
        window.location.href = "../pages/winner.html";
    } else if ((winComb[2][0] == boardCheckP2[6]) && (winComb[2][1] == boardCheckP2[7]) && (winComb[2][2] == boardCheckP2[8])) {
        console.log("winner3");
        window.location.href = "../pages/winner.html";
    } else if ((winComb[3][0] == boardCheckP2[0]) && (winComb[3][1] == boardCheckP2[3]) && (winComb[3][2] == boardCheckP2[6])) {
        console.log("winner4");
        window.location.href = "../pages/winner.html";
    } else if ((winComb[4][0] == boardCheckP2[1]) && (winComb[4][1] == boardCheckP2[4]) && (winComb[4][2] == boardCheckP2[7])) {
        console.log("winner5");
        window.location.href = "../pages/winner.html";
    } else if ((winComb[5][0] == boardCheckP2[2]) && (winComb[5][1] == boardCheckP2[5]) && (winComb[5][2] == boardCheckP2[8])) {
        console.log("winner6");
        window.location.href = "../pages/winner.html";
    } else if ((winComb[6][0] == boardCheckP2[0]) && (winComb[6][1] == boardCheckP2[4]) && (winComb[6][2] == boardCheckP2[8])) {
        console.log("winner7");
        window.location.href = "../pages/winner.html";
    } else if ((winComb[7][0] == boardCheckP2[2]) && (winComb[7][1] == boardCheckP2[4]) && (winComb[7][2] == boardCheckP2[6])) {
        console.log("winner8");
        window.location.href = "../pages/winner.html";
    }
}

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

let index = 0;
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

                if(turn) {
                    index = parseInt(cell.id) - 1
                    boardCheckP1[index] = cell.id;

                } else {

                    index = parseInt(cell.id) - 1;
                    boardCheckP2[index] = cell.id;

                }

            checkWinner();

            turn = !turn;
            }
        })
    }
)


