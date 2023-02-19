// Adding span element where to show the names on the games page to a variable
let nameP1Placeholder = document.querySelector(".player1-name-placeholder");
let nameP2Placeholder = document.querySelector(".player2-name-placeholder");


//Counting game scores...
let gameScoresP1 = document.getElementById("player1-games-placeholder");
let gameScoresP2 = document.getElementById("player2-games-placeholder");
let scoreCounterP1 = localStorage.getItem("scoreP1");
let scoreCounterP2 = localStorage.getItem("scoreP2");
gameScoresP1.innerHTML = scoreCounterP1;
gameScoresP2.innerHTML = scoreCounterP2;

// Assigning the players name data from sessionStorage to a variable
let playerNames = JSON.parse(sessionStorage.getItem("playersNames"));
let cpuPlaying = sessionStorage.getItem("playerCpu");

// Adding the text to the span element
if (playerNames.player1 === null) {
  nameP1Placeholder.innerHTML = "CPU";
} else {
  nameP1Placeholder.innerHTML = `${playerNames.player1.toUpperCase()}`;
}

if (playerNames.player2 === null) {
  nameP2Placeholder.innerHTML = "CPU";
} else {
  nameP2Placeholder.innerHTML = `${playerNames.player2.toUpperCase()}`;
}

//Assigning the players token choice data from sessionStorage to a variable

let tokenP1Choice = JSON.parse(sessionStorage.getItem("tokenP1Choice"));
let tokenP2Choice = JSON.parse(sessionStorage.getItem("tokenP2Choice"));

//Assigning the cpu for player 1 or player 2 from sessionStorage to a variable

let player1Token = document.createElement("div");
let player2Token = document.createElement("div");

for (let tokenP1 in tokenP1Choice) {
  if (tokenP1Choice.tokenCocodrileP1 === tokenP1) {
    player1Token.id = "tokenCocodrileP1";
  } else if (tokenP1Choice.tokenElephantP1 === tokenP1) {
    player1Token.id = "tokenElephantP1";
  } else if (tokenP1Choice.tokenMonkeyP1 === tokenP1) {
    player1Token.id = "tokenMonkeyP1";
  } else if (tokenP1Choice.tokenRhinoP1 === tokenP1) {
    player1Token.id = "tokenRhinoP1";
  }
}

for (let tokenP2 in tokenP2Choice) {
  if (tokenP2Choice.tokenElephantP2 === tokenP2) {
    player2Token.id = "tokenElephantP2";
  } else if (tokenP2Choice.tokenMonkeyP2 === tokenP2) {
    player2Token.id = "tokenMonkeyP2";
  } else if (tokenP2Choice.tokenCocodrileP2 === tokenP2) {
    player2Token.id = "tokenCocodrileP2";
  } else if (tokenP2Choice.tokenRhinoP2 === tokenP2) {
    player2Token.id = "tokenRhinoP2";
  }
}

// Elements for the panel showing the players turn
let panelP1 = document.getElementById("panel-player-1");
let panelP2 = document.getElementById("panel-player-2");

let yourTurnPar = document.createElement("div");
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
let boardCheck = ["", "", "", "", "", "", "", "", ""];

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
  if (playerNames.player2 === null) {
    panelP1.appendChild(yourTurnPar);
    panelP1.appendChild(player1Token);
  } else if (playerNames.player1 === null) {
    panelP2.appendChild(yourTurnPar);
    panelP2.appendChild(player2Token);
  } else {
    panelP1.appendChild(yourTurnPar);
    panelP1.appendChild(player1Token);
  }
};
let cpuCellChoice;
let randomCell = 0;

//Map method to acces the div array and the div corresponding to the cell we click on and pass in the necessary actions to play the game

cells.map((cell) => {
  cell.addEventListener("click", () => {
     //human1 vs cpu
    if (playerNames.player2 === null) {
      console.log("adios");
      let i = 0;
      if (cell.innerHTML === "" && (tokenP1 > 0 || tokenP2 > 0)) {
        cell.appendChild(player1Token.cloneNode(true));
        panelP2.appendChild(yourTurnPar);
        panelP2.appendChild(player2Token);
        tokenP1--;
        boardCheck[cell.id] = turn ? "x" : "o";
        checkWinner();
        turn = !turn;
      }
      if((cell.innerHTML != "") && (tokenP1 === 0 && tokenP2 === 0)) {
          if((turn) && (boardCheck[cell.id] === "x")) {
              cell.innerHTML = ""
              tokenP1++
              boardCheck[cell.id] = "";
            } 
        }
        //cpu starts its action
        while (i === 0 && (tokenP1 > 0 || tokenP2 > 0) && (!turn)) {
          randomCell = Math.floor(Math.random() * 9);

        if (boardCheck[randomCell] === "") {
            cpuCellChoice = document.getElementById(randomCell);
            cpuCellChoice.appendChild(player2Token.cloneNode(true));
            panelP1.appendChild(yourTurnPar);
            panelP1.appendChild(player1Token);
            boardCheck[randomCell] = "o";
            console.log(boardCheck);
            checkWinner();
            i = 1;
            tokenP2--;
            turn = !turn;
        } else {
            i = 0;
        }
        }
        i = 0;

       
        while (i === 0 && (tokenP1 === 0 && tokenP2 === 0) && (!turn)) {
            
            randomCell = Math.floor(Math.random() * 9);
                
            if (boardCheck[randomCell] === "o") {
                
              cpuCellChoice = document.getElementById(randomCell);
              cpuCellChoice.innerHTML = ""
                tokenP2++
                boardCheck[randomCell] = "";

                while (j === 0) {
                    randomCell = Math.floor(Math.random() * 9);
                    if (boardCheck[randomCell] === "") {
              cpuCellChoice = document.getElementById(randomCell);
            
            cpuCellChoice.appendChild(player2Token.cloneNode(true));
            panelP1.appendChild(yourTurnPar);
            panelP1.appendChild(player1Token);
            boardCheck[randomCell] = "o";
            console.log(boardCheck);
            checkWinner();
            j = 1;
            tokenP2--;
            turn = !turn;
              
            }
            
           else {
              j = 0;
          }
          }
      
        }else {
            i = 0;
        }
    }
        i = 0;
        j = 0;
    
    //cpu vs human2
    } else if (playerNames.player1 === null) {
      console.log("hola");
      let i = 0;
      if (cell.innerHTML === "" && (tokenP1 > 0 || tokenP2 > 0)) {
        cell.appendChild(player2Token.cloneNode(true));
        panelP1.appendChild(yourTurnPar);
        panelP1.appendChild(player1Token);
        tokenP2--;
        boardCheck[cell.id] = turn ? "o" : "x";
        checkWinner();
        console.log(boardCheck);

        turn = !turn;
      }
      if((cell.innerHTML != "") && (tokenP1 === 0 && tokenP2 === 0)) {
          if((turn) && (boardCheck[cell.id] === "o")) {
              cell.innerHTML = ""
              tokenP2++
              boardCheck[cell.id] = "";
            } 
        }
        //cpu starts its action
        while (i === 0 && (tokenP1 > 0 || tokenP2 > 0) && (!turn)) {
          randomCell = Math.floor(Math.random() * 9);

        if (boardCheck[randomCell] === "") {
            cpuCellChoice = document.getElementById(randomCell);
            cpuCellChoice.appendChild(player1Token.cloneNode(true));
            panelP2.appendChild(yourTurnPar);
            panelP2.appendChild(player2Token);
            boardCheck[randomCell] = "x";
            checkWinner();
            console.log(boardCheck);

            i = 1;
            tokenP1--;
            turn = !turn;
        } else {
            i = 0;
        }
        }
        i = 0;

        while (i === 0 && (tokenP1 === 0 && tokenP2 === 0) && (!turn)) {
            
            randomCell = Math.floor(Math.random() * 9);
                
            if (boardCheck[randomCell] === "x") {
                
              cpuCellChoice = document.getElementById(randomCell);
              cpuCellChoice.innerHTML = ""
                tokenP1++
                boardCheck[randomCell] = "";

                while (j === 0) {
                    randomCell = Math.floor(Math.random() * 9);
                    if (boardCheck[randomCell] === "") {
              cpuCellChoice = document.getElementById(randomCell);
            
            cpuCellChoice.appendChild(player1Token.cloneNode(true));
            panelP2.appendChild(yourTurnPar);
            panelP2.appendChild(player2Token);
            boardCheck[randomCell] = "x";
            checkWinner();
            j = 1;
            tokenP1--;
            turn = !turn;
              
            } else {
              j = 0;
          }
          }
      
        }else {
            i = 0;
        }
    }
        i = 0;
        j = 0;

      //human1 vs human2
    } else if (playerNames.player2 != null && playerNames.player2 != null) {
      if (cell.innerHTML === "" && (tokenP1 > 0 || tokenP2 > 0)) {
        if (turn) {
          cell.appendChild(player1Token.cloneNode(true));
          panelP2.appendChild(yourTurnPar);
          panelP2.appendChild(player2Token);
        } else {
          cell.appendChild(player2Token.cloneNode(true));
          panelP1.appendChild(yourTurnPar);
          panelP1.appendChild(player1Token);
        }

        turn ? tokenP1-- : tokenP2--;
        boardCheck[cell.id] = turn ? "x" : "o";
        checkWinner();
        turn = !turn;
      }

      if (cell.innerHTML != "" && tokenP1 === 0 && tokenP2 === 0) {
        if (turn && boardCheck[cell.id] === "x") {
          cell.innerHTML = "";
          tokenP1++;
          boardCheck[cell.id] = "";
        } else if (!turn && boardCheck[cell.id] === "o") {
          cell.innerHTML = "";
          tokenP2++;
          boardCheck[cell.id] = "";
        }
      }
    }
  });
});


//Function to check all the possible winner combinations everytime we click on a cell
const checkWinner = () => {
  for (let i = 0; i < winningComb.length; i++) {
    for (let j = 0; j < boardCheck.length; j++) {
      if (
        boardCheck[winningComb[i][0]] === "x" &&
        boardCheck[winningComb[i][1]] === "x" &&
        boardCheck[winningComb[i][2]] === "x"
      ) {
        scoreCounterP1 ++;
        localStorage.setItem("scoreP1" , scoreCounterP1);
        sessionStorage.setItem("tokenWinnerP1", player1Token.id);
        showScoreCount()
        winnerCpuOrHumanP1()
        window.location.href = "../pages/winner.html";
        
        return true;
      } else if (
        boardCheck[winningComb[i][0]] === "o" &&
        boardCheck[winningComb[i][1]] === "o" &&
        boardCheck[winningComb[i][2]] === "o"
      ) {
        scoreCounterP2 ++;
        localStorage.setItem("scoreP2", scoreCounterP2);
        sessionStorage.setItem("tokenWinnerP2", player2Token.id);
        showScoreCount()
        winnerCpuOrHumanP2()
        window.location.href = "../pages/winner.html";
        return true;
      }
    }
  }
};

console.log(cpuPlaying);
const winnerCpuOrHumanP1 = () => {
  if (playerNames.player1 === null) {
    console.log("cpu wins");
  
    sessionStorage.setItem("Winner", cpuPlaying);
  } else {
    console.log("humano");
    sessionStorage.setItem("Winner", playerNames.player1);
  }
}

const winnerCpuOrHumanP2 = () => {
  console.log("player2 wins");
  console.log(playerNames.player2 === null);
  if (playerNames.player2 === null) {
    console.log("player 2 cpu wins");
    sessionStorage.setItem("Winner", cpuPlaying);
  } else {
    sessionStorage.setItem("Winner", playerNames.player2);
  }
}



const showScoreCount = () => {
  gameScoresP1.innerHTML = scoreCounterP1;
  gameScoresP2.innerHTML = scoreCounterP2;

}

const resetBtn = () => {
  localStorage.clear();
}

let goBackBtn = document.getElementById("goBack");
goBackBtn.addEventListener("click", resetBtn)
