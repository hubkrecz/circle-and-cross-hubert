const cross = document.querySelector("#cross");
const circle = document.querySelector("#circle");
const board = document.querySelector("#board");
const reset = document.querySelector("#resetButton");

const fields =
{
    "0.0": board.children[0],
    "0.1": board.children[1],
    "0.2": board.children[2],
    "1.0": board.children[3],
    "1.1": board.children[4],
    "1.2": board.children[5],
    "2.0": board.children[6],
    "2.1": board.children[7],
    "2.2": board.children[8]
}

const tableMaker = () => {
    return Array.from({ length: 3 }, (_, row) => Array.from({ length: 3 }, (_, cell) => fields[`${row}.${cell}`]))
}

const justATable = tableMaker();
console.log(justATable);

let amongus = 0;
let wwc;

const start = (event) => {
    const currentButton = event.target;
    const type = currentButton.textContent;
    amongus = 0;

    if (type === "O") {
        wwc = 1;
    }
    else if (type === "X") {
        wwc = 2;
    }
    const buttons = Array.from(board.children);
    for (let i = 0; i <= 8; i++) {
        buttons[i].disabled = false;
    }

    cross.style.display = "none";
    circle.style.display = "none";
}

const resetFunction = function () {
    const buttons = Array.from(board.children);
    amongus = 0;

    for (let i = 0; i < 9; i++) {
        buttons[i].innerHTML = "";
        buttons[i].disabled = true;
    }
    for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 2; j++) {
            justATable[i][j] = null;
        }
    }
    cross.style.display = "inline-block";
    circle.style.display = "inline-block";
};

const replaceByXO = (event) => {
    const buttonClicked = event.target;
    const [row, cell] = buttonClicked.dataset.id.split(".");
    console.log(buttonClicked);
    if (buttonClicked.innerHTML === "") {
        if (wwc === 1) {
            buttonClicked.innerHTML = "O";
            justATable[row][cell] = "O";
            console.log(justATable[row][cell]);
            wwc = 2;
        }
        else if (wwc === 2) {
            buttonClicked.innerHTML = "X";
            justATable[row][cell] = "X";
            console.log(justATable[row][cell]);
            wwc = 1
        }
        amongus++;
        whoWonChecker();
    }

}


const whoWonChecker = () => {
    if (amongus === 5) {
        if (justATable[0][0] === "O" && justATable[0][1] === "O" && justATable[0][2] === "O") {
            setTimeout(() => { alert("Kółko wygrywa") }, 0); console.log("warunek1");
        }
        else if (justATable[1][0] === "O" && justATable[1][1] === "O" && justATable[1][2] === "O") {
            setTimeout(() => { alert("Kółko wygrywa") }, 0); console.log("warunek2");
        }
        else if (justATable[2][0] === "O" && justATable[2][1] === "O" && justATable[2][2] === "O") {
            setTimeout(() => { alert("Kółko wygrywa") }, 0); console.log("warunek3");
        }
        else if (justATable[0][0] === "O" && justATable[1][0] === "O" && justATable[2][0] === "O") {
            setTimeout(() => { alert("Kółko wygrywa") }, 0); console.log("warunek4");
        }
        else if (justATable[0][1] === "O" && justATable[1][1] === "O" && justATable[2][1] === "O") {
            setTimeout(() => { alert("Kółko wygrywa") }, 0); console.log("warunek5");
        }
        else if (justATable[0][2] === "O" && justATable[1][2] === "O" && justATable[2][2] === "O") {
            setTimeout(() => { alert("Kółko wygrywa") }, 0); console.log("warunek6");
        }
    }
}


reset.addEventListener("click", resetFunction);
cross.addEventListener("click", start);
circle.addEventListener("click", start);
Object.values(fields).forEach((field) => {
    field.addEventListener("click", replaceByXO);
});