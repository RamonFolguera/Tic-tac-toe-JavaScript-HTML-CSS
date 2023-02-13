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
let tokenSelectionP1 = 1;
let tokenSelectionP2 = 1;

tokenDivs.map(
    tokenDiv => {
        tokenDiv.addEventListener("click", ()=>{

            for(let token in tokens){
                        
                if(tokenDiv.id == token){
                    tokens[token] = tokenDiv.id;
                    document.getElementById(tokenDiv.id).classList.add("player-token-selected");
                    }
                }  
            }
        )
    }
)

// Adding start button to a variable
let startBtn = document.getElementById("start-game-btn");
// Function to store players names 

//Function message show up "Players name missing"
let pNamesMissingContainer = document.createElement("div");
let pNamesMissing = document.createElement("p");
let bodyElement = document.querySelector("body");
let pNamesMissingDiv = document.createElement("div");
let btnNamesMissing = document.createElement("button");

const createMissingNamesMessage = () => {
    btnNamesMissing.classList.add("btn-names-missing");
    btnNamesMissing.innerHTML="OK";
    pNamesMissingContainer.appendChild(pNamesMissingDiv); 
    pNamesMissingDiv.appendChild(pNamesMissing);
    pNamesMissingDiv.appendChild(btnNamesMissing)
    pNamesMissingDiv.classList.add("message-btn-container")
    pNamesMissingContainer.classList.add("names-missing-container");
    pNamesMissing.classList.add("names-missing");
    pNamesMissing.innerHTML="SOMETHING IS MISSING! WE CAN'T START WITHOUT THE PLAYER'S NAMES! GO BACK AND TRY AGAIN!"
    bodyElement.appendChild(pNamesMissingContainer);
}

//Function to close the missing names pop up
const closeMissingNamesMessage = () => {
    pNamesMissingContainer.remove();
}

btnNamesMissing.addEventListener("click", closeMissingNamesMessage)

//Function message "token not selected"
let pTokenMissingContainer = document.createElement("div");
let pTokenMissing = document.createElement("p");
let pTokenMissingDiv = document.createElement("div");
let btnTokenMissing = document.createElement("button");

const createMissingTokenMessage = () => {
    btnTokenMissing.classList.add("btn-token-missing");
    btnTokenMissing.innerHTML="OK";
    pTokenMissingContainer.appendChild(pTokenMissingDiv); 
    pTokenMissingDiv.appendChild(pTokenMissing);
    pTokenMissingDiv.appendChild(btnTokenMissing)
    pTokenMissingDiv.classList.add("message-btn-container")
    pTokenMissingContainer.classList.add("token-missing-container");
    pTokenMissing.classList.add("tokens-missing");
    pTokenMissing.innerHTML="SOMETHING IS MISISNG! WE CAN'T START UNTIL YOU SELECT A TOKEN TO PLAY WITH! GO BACK AND TRY AGAIN!"
    bodyElement.appendChild(pTokenMissingContainer);
}

//Function to close the missing tokens pop up
const closeMissingTokenMessage = () => {
    pTokenMissingContainer.remove();
}

btnTokenMissing.addEventListener("click", closeMissingTokenMessage)

const storePlayersInfo = () => {

    if( (playerInputs.player1 === '') || (playerInputs.player2 === '') ){

        createMissingNamesMessage();      

        return;
    }

    if( ((tokens.tokenCocodrileP1 === '') && (tokens.tokenElephantP1 === '') && (tokens.tokenMonkeyP1 === '') && (tokens.tokenRhinoP1 === '')) || ((tokens.tokenCocodrileP2 === '') && (tokens.tokenElephantP2 === '') && (tokens.tokenMonkeyP2 === '') && (tokens.tokenRhinoP2 === ''))){

        createMissingTokenMessage()

        return;

    }
    sessionStorage.setItem('playersNames', JSON.stringify(playerInputs));
    sessionStorage.setItem('tokenChoices', JSON.stringify(tokens));
    window.location.href = "../pages/game.html";
}


startBtn.addEventListener("click", storePlayersInfo);




