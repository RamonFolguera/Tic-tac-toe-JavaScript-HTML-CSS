//Getting players name from Inputs
// Adding inputs to a variable
let player1Input = document.querySelector(".player-1-input");
let player2Input = document.querySelector(".player-2-input");

// Adding imgs to variable
// Tokens for player 1
// let tokenP1Div1 = document.getElementById("token-P1-1");
// let tokenP1Div2 = document.getElementById("token-P1-2");
// let tokenP1Div3 = document.getElementById("token-P1-3");
// let tokenP1Div4 = document.getElementById("token-P1-4");
// Tokens for player 2
// let tokenP2Div1 = document.getElementById("token-P2-1");
// let tokenP2Div2 = document.getElementById("token-P2-2");
// let tokenP2Div3 = document.getElementById("token-P2-3");
// let tokenP2Div4 = document.getElementById("token-P2-4");

// Adding start button to a variable
let startBtn = document.getElementById("start-game-btn");
// Function to store players names 

const storePlayersNames = () => {

    let player1Name = player1Input.value;  
    let player2Name = player2Input.value;    
    sessionStorage.setItem('player1-name',player1Name);
    sessionStorage.setItem('player2-name',player2Name);
}

// const storeTokenSelection = () => {
//     let tokenP1Div1 = localStorage.setItem("token-player1-coco", data);
// }

startBtn.addEventListener("click", storePlayersNames);

// let playerInputs = {
//     player1 : '',
//     player2 : ''
// }
// let inputsCapturados = Array.from(document.getElementsByTagName("input"));
// const GuardarDatos = () => {
//     //Ejemplo de guardado de datos en SessionStorage
//     sessionStorage.setItem("datosUsuarios", JSON.stringify(playerInputs));
// }




