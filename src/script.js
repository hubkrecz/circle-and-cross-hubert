const cross = document.querySelector("#cross");
const circle = document.querySelector("#circle");
const board = document.querySelector("#board");
const reset = document.querySelector("#resetButton");

const a1 = board.children[0]
const a2 = board.children[1]
const a3 = board.children[2]
const a4 = board.children[3]
const a5 = board.children[4]
const a6 = board.children[5]
const a7 = board.children[6]
const a8 = board.children[7]
const a9 = board.children[8]


let wwc;

const start = (event) => 
{
    const currentButton = event.target;
    const type = currentButton.textContent;
    const makedTable = tableMaker();
    
    if(type === "O")
    {
        wwc = 1;
    }
    else if(type === "X")
    {
        wwc = 2;
    }
    const buttons = Array.from(board.children);
    for(let i=0; i < 9; i++)
    {
        buttons[i].disabled=false;
    }
    cross.style.display="none";
    circle.style.display="none";
}

const resetFunction = function () 
{
    const buttons = Array.from(table.children);
    // const tableCleaner = tableMaker();

    for (let i = 0; i < 9; i++) 
    {
        buttons[i].innerHTML = "";
        console.log(buttons[i]);
        buttons[i].disabled = true;
    }
    cross.style.display = "inline-block";
    circle.style.display = "inline-block";
};

const replaceByXO = (event) =>
{    
    const buttonsClicked = event.target;
    console.log(buttonsClicked);
    if(buttonsClicked.innerHTML==="")
    {
    if(wwc===1){buttonsClicked.innerHTML ="O";wwc=2}
    else if (wwc===2){buttonsClicked.innerHTML ="X";wwc=1}
    };
    const XOtable = tableMaker();
    for(let i = 0; i <= 2; i++)
    {
        for(let j = 0; j <= 2; j++)
        {
            
            console.log(`${i}.${j}`)
        }
    }
}

// const tableReader = () =>
// {
//     const [number1, number2] = target.dataset.id.split("."); 
// }

const tableMaker = () =>
{
    return Array.from({length: 3}) , () => Array.from({length: 3} , () => null)
}

// const whoWon = (event) =>
// {
//     if(tableReader[a][1] === 'O')
// }


reset.addEventListener("click", resetFunction);
cross.addEventListener("click", start);
circle.addEventListener("click", start);
a1.addEventListener("click", replaceByXO);
a2.addEventListener("click", replaceByXO);
a3.addEventListener("click", replaceByXO);
a4.addEventListener("click", replaceByXO);
a5.addEventListener("click", replaceByXO);
a6.addEventListener("click", replaceByXO);
a7.addEventListener("click", replaceByXO);
a8.addEventListener("click", replaceByXO);
a9.addEventListener("click", replaceByXO);