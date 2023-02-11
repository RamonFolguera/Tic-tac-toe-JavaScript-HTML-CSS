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




