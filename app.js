let boxex = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#New-Game");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


let turn0 = true; // player 0
const winPattern =[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 8],
    [3, 4, 5],
    [6, 7, 8]
]
boxex.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked.");
        if (turn0){// player 0
            box.innerText="0";
            turn0=false;
        }else{// player X
            box.innerText="X"
            turn0=true;
        }
        box.disabled=true;
        checkWinner();

    });
});
const resetgame=()=>{
    turn0=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}

const disableBoxes=()=>{
    for(let box of boxex){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxex){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(Winner)=>{
    msg.innerText=`Congrates, Winner is ${Winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner=()=>{
    for(pattern of winPattern){
        
           let pos1val= boxex[pattern[0]].innerText; 
           let pos2val =boxex[pattern[1]].innerText; 
           let pos3val=  boxex[pattern[2]].innerText;
           
           if(pos1val!=""&&pos2val!=""&&pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("Winner" + pos1val);

                showWinner(pos1val);
            }
           }
    }
}
newgamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);
