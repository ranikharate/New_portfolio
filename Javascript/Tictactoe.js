console.log("Welcome to Tic Tac Toe")
let music = new Audio("playmusic.wav")
let audioTurn = new Audio("mixkit-failure-arcade-alert-notification-240.wav")
let gameover = new Audio("game over.wav")
let turn = "X"
let isgameover = false;

//function to change the turn
const ChangeTurn = ()=>{
    return turn === "X"? "0": "X"
    //using turnery operator//
}

    //function to check for a win
 const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let Wins = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
    ]
    wins.forEach(e =>{
            if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText !=='') ){
                document.querySelector('.info').innerText = boxtext[e[0]].innerText + "Won"
                isgameover = true;
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "56px"
            }
    })
 }

 //game Logic how to change turn 
//music.play()//
 let boxes = document.getElementsByClassName("box");
 Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
           turn =  ChangeTurn();
            audioTurn.play();
            Checkwins();
            if (!isgameover){
                //game over zalyawrch turns la change karel//
            }
            document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
        }

    })
 })