const showWinner = () => {

    let winnerPanelDiv = document.getElementById("winner-panel");
    let winnerPar = document.createElement("p")
    winnerPar.classList.add("d-flex","justify-content-center", "text-center")
    winnerPar.innerHTML = `CONGRATULATIONS ${sessionStorage.getItem("Winner").toUpperCase()}. YOU WIN!`;

    winnerPanelDiv.appendChild(winnerPar)
}

window.onload = () => showWinner();




