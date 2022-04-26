let order = [];
let clickedOrder = [];
let score = 0;

/*
0 = green
1 = red
2 = yellow
3 = blue 
*/

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//cria ordem aleatoria de cores
let shuffleOrder =  () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a próxima core
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//checa se os botoes sao os mesmos da ordem gerada pelo jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert("Pontuação: " + score + "\n Você acertou! Iniciando próximo nível!");
        nextLevel();    
    }
}

//funcao para clique do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);

    
}

//criar funcao que retorna a cor
let createColorElement = (color) => {
    if(color ==0){
        return green;
    } else if(color ==1) {
        return red;
    } else if(color ==2) {
        return yellow;
    } else if(color ==3) {
        return blue;
    }
}

//funcao para proximo nivel do jogo
let nextLevel = () => {
     score++;
     shuffleOrder();
}

//funcao para gameover
let gameOver = () => {
    alert("Pontuação: "+score + "\nVocê perdeu o jogo\nClique em OK para iniciar um novo jogo");
    order = [];
    clickedOrder = [];

    playGame();
}

//funcao de inicio do jogo
let playGame = () => {
    alert('Bem vindo ao GENIUS! Iniciando um novo jogo!');
    score = 0;

    nextLevel();
}

//eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();

/*
green.addEventListener('click', click(0));
red.addEventListener('click', click(1));
yellow.addEventListener('click', click(2));
blue.addEventListener('click', click(3));

playGame();
*/