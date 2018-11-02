let gameBlock = document.getElementById('game')


for(let i = 0; i<9; i++) {
    gameBlock.innerHTML+= '<div class="block"></div>';
}

gameBlock.onclick = function(event) {
    event.target.innerHTML = 'X'
    gameBlock.childNodes[randomInteger(0, 8)].innerHTML = "O"

    setTimeout(checkWinner, 1000)
}

function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }

//gameBlock.childNodes[3].innerHTML = "sad";


function checkWinner() {
    let allBlock = document.getElementsByClassName('block');
    if (allBlock[0].innerHTML=='X' && allBlock[1].innerHTML=='X' && allBlock[2].innerHTML=='X') alert("Победитель крестики")
    if (allBlock[3].innerHTML=='X' && allBlock[4].innerHTML=='X' && allBlock[5].innerHTML=='X') alert("Победитель крестики")
    if (allBlock[6].innerHTML=='X' && allBlock[7].innerHTML=='X' && allBlock[8].innerHTML=='X') alert("Победитель крестики")
    if (allBlock[0].innerHTML=='X' && allBlock[3].innerHTML=='X' && allBlock[6].innerHTML=='X') alert("Победитель крестики")
    if (allBlock[1].innerHTML=='X' && allBlock[4].innerHTML=='X' && allBlock[7].innerHTML=='X') alert("Победитель крестики")
    if (allBlock[8].innerHTML=='X' && allBlock[2].innerHTML=='X' && allBlock[5].innerHTML=='X') alert("Победитель крестики")

    if (allBlock[0].innerHTML=='O' && allBlock[1].innerHTML=='O' && allBlock[2].innerHTML=='O') alert("Победитель Нолики")
    if (allBlock[3].innerHTML=='O' && allBlock[4].innerHTML=='O' && allBlock[5].innerHTML=='O') alert("Победитель Нолики")
    if (allBlock[6].innerHTML=='O' && allBlock[7].innerHTML=='O' && allBlock[8].innerHTML=='O') alert("Победитель Нолики")
    if (allBlock[0].innerHTML=='O' && allBlock[3].innerHTML=='O' && allBlock[6].innerHTML=='O') alert("Победитель Нолики")
    if (allBlock[1].innerHTML=='O' && allBlock[4].innerHTML=='O' && allBlock[7].innerHTML=='O') alert("Победитель Нолики")
    if (allBlock[8].innerHTML=='O' && allBlock[2].innerHTML=='O' && allBlock[5].innerHTML=='O') alert("Победитель Нолики")
}