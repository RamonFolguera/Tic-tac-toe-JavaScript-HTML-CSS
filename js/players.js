

//Getting players name from Inputs

let playerInputs = {
    player1 : '',
    player2 : ''
}
let inputElements = Array.from(document.getElementsByTagName("input"));
const storeNames = () => {
    sessionStorage.setItem("playerNames", JSON.stringify(playerInputs));
}

inputElements.map(
    inputElement => {
        inputElement.addEventListener("input", ()=>{

            for(let player in playerInputs){
                if(inputElement.name == player){
                    playerInputs[player] = inputElement.value;
                }
                console.log(playerInputs)
            }
        })
    }
)

// Adding start button to a variable
let startBtn = document.getElementById("start-game-btn");
// Function to store players names 

const storePlayersNames = () => {

    if( (playerInputs.player1 === '') || (playerInputs.player2 === '') ){

        return;

    }
    sessionStorage.setItem('playersNames', JSON.stringify(playerInputs));
    window.location.href = "../pages/game.html";
    console.log(JSON.stringify(playerInputs))

}
console.log(JSON.stringify(playerInputs))

startBtn.addEventListener("click", storePlayersNames);




