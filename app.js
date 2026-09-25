let boxs = document.querySelectorAll(".box");
let resetBtn = document.querySelector('#reset-btn');
let newGameBtn = document.querySelector("#new-btn");
let mesContainer = document.querySelector(".mes-container");
let mes  = document.querySelector("#mes");

let trunX = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxs.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (trunX){
            box.innerText = "X";
            trunX = false;
        }else{
            box.innerText = "0"
            trunX = true;
        }
       box.disabled = true;
       checkWinner();
    })
})

const showWinner = (winner)=>{
    mes.innerText = `The winner is ${winner}`;
   mesContainer.classList.remove('hide');
    
}

const checkWinner = ()=>{
    for( let pattern of winPatterns){
        let posval1=boxs[pattern[0]].innerText;
        let posval2= boxs[pattern[1]].innerText;
        let posval3=boxs[pattern[2]].innerText;

        if (posval1 != "" && posval2 != "" && posval3 != ""){
            if(posval1 === posval2 && posval2 === posval3){
                console.log ("winner");
                showWinner(posval1);
            }
        }
    } 
}