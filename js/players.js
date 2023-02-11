//Getting players name from Inputs

let playerInputs = {
    player1 : '',
    player2 : ''
}
let inputElements = Array.from(document.getElementsByTagName("input"));

inputElements.map(
    inputElement => {
        inputElement.addEventListener("input", ()=>{

            for(let player in playerInputs){
                if(inputElement.name == player){
                    playerInputs[player] = inputElement.value;
                }
            }
        })
    }
)

// Getting token choice

let tokens = {
    tokenCocodrileP1 : "",
    tokenElephantP1 : "",
    tokenMonkeyP1 : "",
    tokenRinoP1 : "",
    tokenCocodrileP2 : "",
    tokenElephantP2 : "",
    tokenMonkeyP2 : "",
    tokenRinoP2 : ""
    }

let tokenDivs = Array.from(document.getElementsByClassName("token"));

tokenDivs.map(
    tokenDiv => {
        tokenDiv.addEventListener("click", ()=>{

            for(let token in tokens){
                if(tokenDiv.id == token){
                    tokens[token] = tokenDiv.id;
                    console.log(tokens[token])
                    console.log(tokens)
                }
            }
        })
    }
)

// Adding start button to a variable
let startBtn = document.getElementById("start-game-btn");
// Function to store players names 

const storePlayersInfo = () => {

    if( (playerInputs.player1 === '') || (playerInputs.player2 === '') ){

        return;

    }
    sessionStorage.setItem('playersNames', JSON.stringify(playerInputs));
    window.location.href = "../pages/game.html";

    if( ((tokens.tokenCocodrileP1 === '') && (tokens.tokenElephantP1 === '') && (tokens.tokenMonkeyP1 === '') && (tokens.tokenRinoP1 === '')) || ((tokens.tokenCocodrileP2 === '') && (tokens.tokenElephantP2 === '') && (tokens.tokenMonkeyP2 === '') && (tokens.tokenRinoP2 === ''))){

        return;

    }
    sessionStorage.setItem('tokenChoices', JSON.stringify(tokens));
    window.location.href = "../pages/game.html";
}


startBtn.addEventListener("click", storePlayersInfo);




