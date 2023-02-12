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
    tokenRhinoP1 : "",
    tokenCocodrileP2 : "",
    tokenElephantP2 : "",
    tokenMonkeyP2 : "",
    tokenRhinoP2 : ""
    }
let tokenDivs = Array.from(document.getElementsByClassName("token"));

tokenDivs.map(
    tokenDiv => {
        tokenDiv.addEventListener("click", ()=>{

            for(let token in tokens){
                if(tokenDiv.id == token){
                    tokens[token] = tokenDiv.id;
                    console.log(token)
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

    if( ((tokens.tokenCocodrileP1 === '') && (tokens.tokenElephantP1 === '') && (tokens.tokenMonkeyP1 === '') && (tokens.tokenRhinoP1 === '')) || ((tokens.tokenCocodrileP2 === '') && (tokens.tokenElephantP2 === '') && (tokens.tokenMonkeyP2 === '') && (tokens.tokenRhinoP2 === ''))){

        return;

    }
    sessionStorage.setItem('playersNames', JSON.stringify(playerInputs));
    sessionStorage.setItem('tokenChoices', JSON.stringify(tokens));
    window.location.href = "../pages/game.html";
}


startBtn.addEventListener("click", storePlayersInfo);




