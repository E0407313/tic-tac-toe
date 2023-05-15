/*----- constants -----*/
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

const boxes = document.querySelectorAll(".box")
const text = document.querySelector("#text")
const restart = document.querySelector("#restart")
let options = ["","","","","","","","",""]
let currentPlayer = "X"
let running = false

initialize();

function initialize(){
    boxes.forEach(box => box.addEventListener("click", boxClicked));
    restart.addEventListener("click", restartGame);
    text.textContent = `It is ${currentPlayer}'s turn`;
    running = true;
}

function boxClicked() {
    const id = this.getAttribute("id");

    if(options[id] != "" || !running){
       return; 
    }

    updateBox(this, id);
    checkWinner();
}

function updateBox(box, index){
    options[index] = currentPlayer;
    box.textContent = currentPlayer;

}

// function changePlayer() {
  
// }

function checkWinner() {
    let roundWon = false;

    for(let i = 0; i < winningCombinations.length; i++) {
        const winningCombinations = winningCombinations[i]
        const boxesA = options[condition[0]]
        const boxesB = options[condition[1]]
        const boxesC = options[condition[2]]

        if(boxesA == "" || boxesB == "" || boxesC == ""){
            continue;
        }

        if(boxesA == boxesB && boxesB == boxesC){
            roundWon = true;
            break;
        }
    }

    if(roundWon) {
        text.textContent = `${currentPlayer} has won!` ;
        running = false;
    }
    else if(!options.includes("")) {
        text.textContent = `Draw!`
        running = false;
    }

    // else {
    //     function changePlayer();
    // }
}



function restartGame(){
    currentPlayer = "X"
    options = ["","","","","","","","",""]
    text.textContent = `It is ${currentPlayer}'s turn`;
    boxes.forEach(box => box.textContent = "");
    running = true

}