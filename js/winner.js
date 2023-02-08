const showWinner = () => {
console.log("hola")
    let winnerPanelDiv = document.getElementById("winner-panel");
    let winnerPar = document.createElement("p")
    winnerPar.classList.add("text-center")
    winnerPar.innerHTML = `CONGRATULATIONS ${sessionStorage.getItem("Winner").toUpperCase()}. YOU WIN!`;
console.log(sessionStorage.getItem("Winner"))
    winnerPanelDiv.appendChild(winnerPar)
}

window.onload = () => showWinner();




