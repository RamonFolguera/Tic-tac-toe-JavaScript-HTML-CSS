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

let cpuBtnP1 = document.getElementById("cpuP1");
let cpuBtnP2 = document.getElementById("cpuP2");

let player1;
let player2;
let cpu1;
let cpu2;

const chooseCpuP1 = () => {
    if(!player1) {
        cpuBtnP1 
        player1 = tokensP1[chosenToken];
        cpuBtnP1.onclick = null;
        cpuBtnP2.onclick = null;
        document.getElementById(chosenToken).classList.add("player-token-selected");
    }
}
sessionStorage.setItem('playersNames', JSON.stringify(playerInputs));
cpuBtnP1.addEventListener("click", chooseCpuP1);
cpuBtnP2.addEventListener("click", chooseCpuP2);

let tokensP1 = {
    tokenCocodrileP1 : "",
    tokenElephantP1 : "",
    tokenMonkeyP1 : "",
    tokenRhinoP1 : "",
}
let tokensP2 = {
    tokenCocodrileP2 : "",
    tokenElephantP2 : "",
    tokenMonkeyP2 : "",
    tokenRhinoP2 : ""
}   

let tokenDivsP1 = Array.from(document.getElementsByClassName("tokenP1"));
let tokenDivsP2 = Array.from(document.getElementsByClassName("tokenP2"));


const chooseToken = (chosenToken) => {
    
    for(let tokenP1 in tokensP1){
        if(chosenToken == tokenP1 && tokensP1[tokenP1] === ""){
            tokensP1[tokenP1] = chosenToken;
            } 
        }

    for(let tokenP2 in tokensP2){
        if(chosenToken == tokenP2 && tokensP2[tokenP2] === ""){
            tokensP2[tokenP2] = chosenToken;
            } 
        }   

    if(!player1 && ((tokensP1[chosenToken] === "tokenCocodrileP1") || (tokensP1[chosenToken] === "tokenElephantP1") || (tokensP1[chosenToken] === "tokenMonkeyP1") || (tokensP1[chosenToken] === "tokenRhinoP1"))){
     
        player1 = tokensP1[chosenToken];
        document.getElementById(chosenToken).onclick = null;
        document.getElementById(chosenToken).classList.add("player-token-selected");

        tokenDivsP1.map(
            (tokenDiv) => {
                if(tokenDiv.onclick !== null){
                    tokenDiv.onclick = null;
                };
            }
        )

        if(player1==="tokenCocodrileP1") {
            document.getElementById("tokenCocodrileP2").onclick = null;
        } else if (player1==="tokenElephantP1"){
            document.getElementById("tokenElephantP2").onclick = null;
        } else if (player1==="tokenMonkeyP1") {
            document.getElementById("tokenMonkeyP2").onclick = null;
        }else if (player1==="tokenRhinoP1"){
            document.getElementById("tokenRhinoP2").onclick = null;
        }

    } else if (!player2 && ((tokensP2[chosenToken] === "tokenCocodrileP2") || (tokensP2[chosenToken] === "tokenElephantP2") || (tokensP2[chosenToken] === "tokenMonkeyP2") || (tokensP2[chosenToken] === "tokenRhinoP2"))) {

        player2 = tokensP2[chosenToken];
        document.getElementById(chosenToken).onclick = null;
        document.getElementById(chosenToken).classList.add("player-token-selected");

        tokenDivsP2.map(
            (tokenDiv) => {
                if(tokenDiv.onclick !== null){
                    tokenDiv.onclick = null;
                };
            }
        )
        if(player2==="tokenCocodrileP2") {
            document.getElementById("tokenCocodrileP1").onclick = null;
        } else if (player2==="tokenElephantP2"){
            document.getElementById("tokenElephantP1").onclick = null;
        } else if (player2==="tokenMonkeyP2") {
            document.getElementById("tokenMonkeyP1").onclick = null;
        }else if (player2==="tokenRhinoP2"){
            document.getElementById("tokenRhinoP1").onclick = null;
        }
    }

}

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
console.log(JSON.stringify(tokensP2));
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

    if( ((tokensP1.tokenCocodrileP1 === '') && (tokensP1.tokenElephantP1 === '') && (tokensP1.tokenMonkeyP1 === '') && (tokensP1.tokenRhinoP1 === '')) || ((tokensP2.tokenCocodrileP2 === '') && (tokensP2.tokenElephantP2 === '') && (tokensP2.tokenMonkeyP2 === '') && (tokensP2.tokenRhinoP2 === ''))){

        createMissingTokenMessage()

        return;

    }
    console.log("hola");
    sessionStorage.setItem('playersNames', JSON.stringify(playerInputs));
    sessionStorage.setItem('tokenP1Choice', JSON.stringify(tokensP1));
    sessionStorage.setItem('tokenP2Choice', JSON.stringify(tokensP2));
    console.log(JSON.stringify(tokensP2));
    console.log(JSON.stringify(tokensP1));
    console.log(JSON.stringify(playerInputs));
    window.location.href = "../pages/game.html";
}

startBtn.addEventListener("click", storePlayersInfo);
