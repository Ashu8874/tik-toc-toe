let boxs= document.querySelectorAll(".box");
let rest= document.querySelector("#reset");
let msg =document.querySelector("#mssg");
let mssgcontainer=document.querySelector(".mssgcontainer");

let turn0=true;
const winpatt=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxs.forEach((box) =>{
    box.addEventListener("click" , () =>{
        if(turn0){
            box.innerText="0";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
    });
});
reset.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    msg.innerText = "";
    mssgcontainer.classList.add("hide");
    turn0 = true;
});



const showwinner = (winner) =>{
     msg.innerText=`congratulation, winner is ${ winner}`;
     mssgcontainer.classList.remove("hide");
};


const checkwinner =() =>{
    for(let patter of winpatt){
        let pos1val =boxs[patter[0]].innerText;
        let pos2val =boxs[patter[1]].innerText;
        let pos3val =boxs[patter[2]].innerText;

        if(pos1val !=""&&pos2val !=""&&pos2val !=""){
            if(pos1val ===pos2val&& pos2val ===pos3val){
                console.log("winner");
                showwinner(pos1val);
            }
        }
    }
};

const disableAllBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};