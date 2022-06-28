const cross = document.querySelector("#cross");
const circle = document.querySelector("#circle");
const table = document.querySelector("#board");
const reset = document.querySelector("#resetButton");

let wwc;

const start = (event) => 
{
    const currentButton = event.target;
    const type = currentButton.textContent;
    if(type === "O")
    {
        wwc = 1;
        console.log(wwc);

    }
    else if(type === "X")
    {
        wwc = 2;
        console.log(wwc);

    }
    const buttons = Array.from(table.children);
    for(let i=0; i < 9; i++)
    {
        buttons[i].disabled=false;
    }
    cross.style.display="none";
    circle.style.display="none";



}

const resetFunction = (event) => 
{
    const buttons = Array.from(table.children);
    for(let i=0; i < 9; i++)
    {
        buttons[i].innerHTML="";
        console.log(buttons[i]);
        buttons[i].disabled=true;
    }
    cross.style.display="inline-block";
    circle.style.display="inline-block";
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
}


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