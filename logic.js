// document.getElementById("myAudio").loop = true;
let b = 0;
var cnt = 0;
let symb = "X";
let sound = new Audio("click.mp3");
// let check= new Audio("baby.mp3")
// check.play("loop")
// document.getElementById("myAudio").play();

// document.getElementById("myAudio").load();

// function start(){
    
//     var oAudio = document.getElementById('myaudio');
//     if (oAudio.paused) {
//         oAudio.play();
//     }
// }
// start();
// window.onload = start ()
function control(){
    var btn = document.querySelector('.test');
    var oAudio = document.getElementById('myaudio');
    // let txt=oAudio.innerText;
    if (oAudio.paused) {
        oAudio.play();
        btn.innerText = "MUSIC : OFF";
    }
    else {
        oAudio.pause();
        btn.innerText = "MUSIC : ON";
    }
}
// control();


let arr = [

    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function reset() {
    const squares = document.getElementsByClassName("icon");
    b=0;
    Array.from(squares).forEach(e => {
        e.innerText = "";
        e.parentElement.style.backgroundColor="aquamarine";
    })

    const x = document.getElementsByClassName("box");
    Array.from(x).forEach(e => {
        e.style.pointerEvents = "auto";
    })
    symb = "X";
    cnt = 0;
    document.getElementById("turn").innerText = "PLAYER '" + symb + "' TURN";
}
function gameend() {
    let squares = document.getElementsByClassName("icon");
    arr.forEach(e => {
        s = squares[e[0]].innerText;
        if ((squares[e[0]].innerText === squares[e[1]].innerText) && (squares[e[2]].innerText === squares[e[1]].innerText) && (squares[e[0]].innerText !== "")) {
            document.getElementById("turn").innerText = "PLAYER '" + s + "' WINS";
            const x = document.getElementsByClassName("box");
            cnt=0;
            squares[e[0]].parentElement.style.backgroundColor="green";
            squares[e[1]].parentElement.style.backgroundColor="green";
            squares[e[2]].parentElement.style.backgroundColor="green";
            Array.from(x).forEach(e => {
                e.style.pointerEvents = "none";
            });
        }

    })
};
const x = document.getElementsByClassName("box");
Array.from(x).forEach(e => {
    let square = e.querySelector('.icon');
    e.addEventListener('click', () => {
        sound.play();
        if (square.innerText === "") {
            cnt++;
            
            if (symb === "X") {
                square.innerText = "X";
                symb = "O";

                document.getElementById("turn").innerText = "PLAYER '" + symb + "' TURN";
                gameend();
            }
            else {
                square.innerText = "O";
                symb = "X";

                document.getElementById("turn").innerText = "PLAYER '" + symb + "' TURN";
                gameend();
            }
            if ((cnt === 9)) {
                document.getElementById("turn").innerText = "IT'S DRAW";
            }

        }
        e.style.pointerEvents = "none";
    });
})

