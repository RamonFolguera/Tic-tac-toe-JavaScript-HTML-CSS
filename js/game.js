// Adding span element where to show the names on the games page to a variable
let nameP1Placeholder = document.querySelector(".player1-name-placeholder");
let nameP2Placeholder = document.querySelector(".player2-name-placeholder");

// Assigning the players name data from sessionStorage to a variable
let playerNames = JSON.parse(sessionStorage.getItem('playersNames'));

// Adding the text to the span element
nameP1Placeholder.innerHTML = `${playerNames.player1.toUpperCase()}`;
nameP2Placeholder.innerHTML = `${playerNames.player2.toUpperCase()}`;

//Assigning the players token choice data from sessionStorage to a variable

let tokenP1Choice = JSON.parse(sessionStorage.getItem('tokenP1Choice'));
let tokenP2Choice = JSON.parse(sessionStorage.getItem('tokenP2Choice'));
console.log(tokenP1Choice);
console.log(tokenP2Choice);

let player1Token = document.createElement("div");
let player2Token = document.createElement("div");

for (let tokenP1 in tokenP1Choice) {

    if(tokenP1Choice.tokenCocodrileP1 === tokenP1) {
        player1Token.id = "tokenCocodrileP1";
        console.log(player1Token.id)
        } else if(tokenP1Choice.tokenElephantP1 === tokenP1) {
            player1Token.id = "tokenElephantP1";
            console.log(player1Token.id) 
        } else if(tokenP1Choice.tokenMonkeyP1 === tokenP1) {
            player1Token.id = "tokenMonkeyP1";
            console.log(player1Token.id) 
        } else if(tokenP1Choice.tokenRhinoP1 === tokenP1) {
                player1Token.id = "tokenRhinoP1";
                console.log(player1Token.id) 
        }   
}       
        
for (let tokenP2 in tokenP2Choice) {
        
        if(tokenP2Choice.tokenElephantP2 === tokenP2) {
            player2Token.id = "tokenElephantP2";
            console.log(player2Token.id) 
        } else if(tokenP2Choice.tokenMonkeyP2 === tokenP2) {
            player2Token.id = "tokenMonkeyP2";
            console.log(player2Token.id) 
        } else if(tokenP2Choice.tokenRhinoP2 === tokenP2) {
                player2Token.id = "tokenRhinoP2";
                console.log(player2Token.id) 
        } else if(tokenP2Choice.tokenRhinoP2 === tokenP2) {
            player2Token.id = "tokenRhinoP2";
            console.log(player2Token.id) 
    }
}

// Elements for the panel showing the players turn
let panelP1 = document.getElementById("panel-player-1");
let panelP2 = document.getElementById("panel-player-2");

let yourTurnPar = document.createElement("p");
yourTurnPar.innerHTML = "YOUR TURN";
yourTurnPar.classList.add("your-turn");

let monkeyTokenPanel = document.createElement("div");
monkeyTokenPanel.id = "monkey-token-panel";
let cocodrileTokenPanel = document.createElement("div");
cocodrileTokenPanel.id = "cocodrile-token-panel";
let elephantTokenPanel = document.createElement("div");
elephantTokenPanel.id = "elephant-token-panel";
let rhinoTokenPanel = document.createElement("div");
rhinoTokenPanel.id = "rhino-token-panel";

//Declaring a variable that will count how many tokens a players has left to play, and "turn" that will swap turns on every click
let tokenP1 = 3;
let tokenP2 = 3;
let turn = true;

let cells = Array.from(document.getElementsByClassName("box"));

//Declaring our empty board which we will use to compare the values we obtain with the winning Combinations array
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

//Function so the game starts showing on the player1's panel that it's their turn
window.onload = () => {
    panelP1.appendChild(yourTurnPar);
    panelP1.appendChild(player1Token);           
}

//Map method to acces the div array and the div corresponding to the cell we click on and pass in the necessary actions to play the game 

cells.map(
    (cell) => {
        cell.addEventListener('click', ()=>{
                if((cell.innerHTML === "") && (tokenP1 > 0 || tokenP2 > 0)) {

                    if (turn) {
                        cell.appendChild(player1Token.cloneNode(true));
                        panelP2.appendChild(yourTurnPar);
                        panelP2.appendChild(player2Token);

                    } else {
                        cell.appendChild(player2Token.cloneNode(true));
                        panelP1.appendChild(yourTurnPar);
                        panelP1.appendChild(player1Token);
                    }
        
                    (turn) ? tokenP1-- : tokenP2--;   
                    boardCheck[cell.id] = (turn) ? "x" : "o";
                    checkWinner();
                    turn = !turn;
                }   
                
                if((cell.innerHTML != "") && (tokenP1 === 0 && tokenP2 === 0)) {
                    if((turn) && (boardCheck[cell.id] === "x")) {
                        cell.innerHTML = ""
                        tokenP1++
                        boardCheck[cell.id] = "";

                    } else if((!turn) && (boardCheck[cell.id] === "o")) {
                        cell.innerHTML = ""
                        tokenP2++
                        boardCheck[cell.id] = "";
                    }
                }
            }
        )
    }
)

//Function to check all the possible winner combinations everytime we click on a cell
const checkWinner = () => {

    for (let i = 0; i < winningComb.length ; i ++) {

        for(let j=0; j < boardCheck.length; j++) {
            
            if(boardCheck[winningComb[i][0]] === "x" && boardCheck[winningComb[i][1]] === "x" && boardCheck[winningComb[i][2]] === "x") {
                sessionStorage.setItem("Winner", playerNames.player1)
                sessionStorage.setItem("tokenWinnerP1", player1Token.id)
                window.location.href = "../pages/winner.html";
                return true;
            } else if(boardCheck[winningComb[i][0]] === "o" && boardCheck[winningComb[i][1]] === "o" && boardCheck[winningComb[i][2]] === "o") 
            {
                sessionStorage.setItem("Winner", playerNames.player2)
                sessionStorage.setItem("tokenWinnerP2", player2Token.id)
                window.location.href = "../pages/winner.html";
                return true;
            }
        }
    }
}

