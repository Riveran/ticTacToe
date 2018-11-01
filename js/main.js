let gameBlock = document.getElementById('game')


for(let i = 0; i<9; i++) {
    gameBlock.innerHTML+= '<div class="block"></div>';
}

let step = 0;

gameBlock.onclick = function(event) {
    console.log(event);
    if (event.target.className == 'block') {
        if(step % 2 == 0) {
            event.target.innerHTML = 'X'
        } else {
            event.target.innerHTML = 'O'
        }
        step++
    }
    checkWinner()
}


function checkWinner() {
    let allBlock = document.getElementsByClassName('block');
    if (allBlock[0].innerHTML=='X' && allBlock[1].innerHTML=='X' && allBlock[2].innerHTML=='X') alert("Победител крестики")
    if (allBlock[3].innerHTML=='X' && allBlock[4].innerHTML=='X' && allBlock[5].innerHTML=='X') alert("Победител крестики")
    if (allBlock[6].innerHTML=='X' && allBlock[7].innerHTML=='X' && allBlock[8].innerHTML=='X') alert("Победител крестики")
    if (allBlock[0].innerHTML=='X' && allBlock[3].innerHTML=='X' && allBlock[6].innerHTML=='X') alert("Победител крестики")
    if (allBlock[1].innerHTML=='X' && allBlock[4].innerHTML=='X' && allBlock[7].innerHTML=='X') alert("Победител крестики")
    if (allBlock[8].innerHTML=='X' && allBlock[2].innerHTML=='X' && allBlock[5].innerHTML=='X') alert("Победител крестики")

    if (allBlock[0].innerHTML=='O' && allBlock[1].innerHTML=='O' && allBlock[2].innerHTML=='O') alert("Победител Нолики")
    if (allBlock[3].innerHTML=='O' && allBlock[4].innerHTML=='O' && allBlock[5].innerHTML=='O') alert("Победител Нолики")
    if (allBlock[6].innerHTML=='O' && allBlock[7].innerHTML=='O' && allBlock[8].innerHTML=='O') alert("Победител Нолики")
    if (allBlock[0].innerHTML=='O' && allBlock[3].innerHTML=='O' && allBlock[6].innerHTML=='O') alert("Победител Нолики")
    if (allBlock[1].innerHTML=='O' && allBlock[4].innerHTML=='O' && allBlock[7].innerHTML=='O') alert("Победител Нолики")
    if (allBlock[8].innerHTML=='O' && allBlock[2].innerHTML=='O' && allBlock[5].innerHTML=='O') alert("Победител Нолики")
}