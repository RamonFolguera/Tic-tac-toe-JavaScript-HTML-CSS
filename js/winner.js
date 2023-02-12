// Adding span element where to show the names on the games page to a variable
let nameP1Placeholder = document.querySelector(".player1-name-placeholder");
let nameP2Placeholder = document.querySelector(".player2-name-placeholder");

// Assigning the data from sessionStorage to a variable
let playerNames = JSON.parse(sessionStorage.getItem('playersNames'));

// Adding the text to the span element
nameP1Placeholder.innerHTML = `${playerNames.player1.toUpperCase()}`;
nameP2Placeholder.innerHTML = `${playerNames.player2.toUpperCase()}`;

const showWinner = () => {
    let winnerPanelDiv = document.getElementById("winner-panel");
    let winnerPar = document.createElement("p")
    winnerPar.classList.add("text-center")
    winnerPar.innerHTML = `CONGRATULATIONS ${sessionStorage.getItem("Winner").toUpperCase()}. YOU WIN!`;
    winnerPanelDiv.appendChild(winnerPar)
}

window.onload = () => showWinner();


//Assigning the players token choice data from sessionStorage to a variable

let tokensChoices = JSON.parse(sessionStorage.getItem('tokenChoices'));
console.log(tokensChoices);

let player1Token = document.createElement("div");
let player2Token = document.createElement("div");

for (let token in tokensChoices) {

    if(tokensChoices.tokenCocodrileP1 === token) {
        player1Token.id = "tokenCocodrileP1";
        console.log(player1Token.id)
        } else if(tokensChoices.tokenElephantP1 === token) {
            player1Token.id = "tokenElephantP1";
            console.log(player1Token.id) 
        } else if(tokensChoices.tokenMonkeyP1 === token) {
            player1Token.id = "tokenMonkeyP1";
            console.log(player1Token.id) 
        } else if(tokensChoices.tokenRhinoP1 === token) {
                player1Token.id = "tokenRhinoP1";
                console.log(player1Token.id) 
        }   else if(tokensChoices.tokenElephantP2 === token) {
            player2Token.id = "tokenElephantP2";
            console.log(player2Token.id) 
        } else if(tokensChoices.tokenMonkeyP1 === token) {
            player2Token.id = "tokenMonkeyP2";
            console.log(player2Token.id) 
        } else if(tokensChoices.tokenRhinoP2 === token) {
                player2Token.id = "tokenRhinoP2";
                console.log(player2Token.id) 
        } else if(tokensChoices.tokenRhinoP2 === token) {
            player2Token.id = "tokenRhinoP2";
            console.log(player2Token.id) 
    }
}

