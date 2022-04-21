var player, winner = null;
var playerSelected = document.getElementById('jogador-selected');
var winnerSelected = document.getElementById('winner-selected');
var squads = document.getElementsByClassName('squad'); 

changePlayer('X');

function chooseSquad (id) {

    if (winner !== null){
        return;
    }

    var squad = document.getElementById(id);

    if (squad.innerHTML !== '-'){
        return;
    }

    squad.innerHTML = player;
    squad.style.color = '#000';

    if (player === 'X'){
        player = 'O';
    }
    else {
        player = 'X';
    }
    changePlayer (player);
    checkWinner ();
}

function changePlayer (value) {
    player = value;
    playerSelected.innerHTML = player;
}


function checkWinner () {
    var squad1 = document.getElementById(1);
    var squad2 = document.getElementById(2);
    var squad3 = document.getElementById(3);
    var squad4 = document.getElementById(4);
    var squad5 = document.getElementById(5);
    var squad6 = document.getElementById(6);
    var squad7 = document.getElementById(7);
    var squad8 = document.getElementById(8);
    var squad9 = document.getElementById(9);

    if (checkSequence(squad1,squad2,squad3)){
        changeColor(squad1,squad2,squad3);
        changeWinner(squad1);
        return;
    }

    if (checkSequence(squad4,squad5,squad6)){
        changeColor(squad4,squad5,squad6);
        changeWinner(squad4);
        return;
    }

    if (checkSequence(squad7,squad8,squad9)){
        changeColor(squad7,squad8,squad9);
        changeWinner(squad7);
        return;
    }

    if (checkSequence(squad1,squad4,squad7)){
        changeColor(squad1,squad4,squad7);
        changeWinner(squad1);
        return;
    }

    if (checkSequence(squad2,squad5,squad8)){
        changeColor(squad2,squad5,squad8);
        changeWinner(squad2);
        return;
    }

    if (checkSequence(squad3,squad6,squad9)){
        changeColor(squad3,squad6,squad9);
        changeWinner(squad3);
        return;
    }

    if (checkSequence(squad1,squad5,squad9)){
        changeColor(squad1,squad5,squad9);
        changeWinner(squad1);
        return;
    }

    if (checkSequence(squad3,squad5,squad7)){
        changeColor(squad3,squad5,squad7);
        changeWinner(squad3);
    }
}
function changeWinner (squad) {
    winner = squad.innerHTML;
    winnerSelected.innerHTML = winner;  

}

function changeColor (squad1, squad2, squad3) {
    squad1.style.background = '#0f0';
    squad2.style.background = '#0f0';
    squad3.style.background = '#0f0';
    
}

function checkSequence (squad1, squad2, squad3) {
    var isEqual = false;
    if (squad1.innerHTML !== '-' && squad1.innerHTML === squad2.innerHTML && squad2.innerHTML === squad3.innerHTML){
        isEqual = true;
    }
    return isEqual;

}

function restart(){
    winner = null;
    winnerSelected.innerHTML = '';

    for (var i = 1; i <= 9; i++){
        var squad = document.getElementById(i);
        squad.style.background = '#eee';
        squad.innerHTML = '-';
        squad.style.color = '#eee';
    }
    changePlayer('X');