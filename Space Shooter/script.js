const yourShip = document.querySelector('.player-shooter');
const playArea = document.querySelector('#main-play-area');
const alienImg = ['imgs/alien1.png', 'imgs/alien2.png', 'imgs/alien3.png'];
const instructionText = document.querySelector('.game-instruction');
const startButton = document.querySelector('.start-buttom');
let alienInterval;

//movimento e tiro da nave
//preventDefault: para prevenir o comportamento padrao do browser
function flyShip(event) {
    if (event.key === 'ArrowUp') {
        event.preventDefault();
        moveUp();
    }
    else if (event.key === 'ArrowDown') {
        event.preventDefault();
        moveDown();
    }
    else if (event.key === " ") {
        event.preventDefault();
        fireLaser();
    }
}

//funcao de subir
function moveUp() {
    let topPosition = getComputedStyle(yourShip).getPropertyValue('top');
    if (topPosition === "0px") {
        return
    } else {
        let position = parseInt(topPosition);
        position -= 50;
        yourShip.style.top = position + 'px';
    }
}

//funcao de descer
function moveDown() {
    let topPosition = getComputedStyle(yourShip).getPropertyValue('top');
    if (topPosition === "450px") {
        return
    } else {
        let position = parseInt(topPosition);
        position += 50;
        yourShip.style.top = position + 'px';
    }
}

//funcionalidade de tiro
function fireLaser() {
    let laser = createLaserElement();
    playArea.appendChild(laser);
    moveLaser(laser);
}

function createLaserElement() {
    let xPosition = parseInt(window.getComputedStyle(yourShip).getPropertyValue('left'));
    let yPosition = parseInt(window.getComputedStyle(yourShip).getPropertyValue('top'));
    let newLaser = document.createElement('img');
    newLaser.src = 'imgs/laser.png';
    newLaser.classList.add('laser');
    newLaser.style.left = xPosition + "px";
    newLaser.style.top = (yPosition - 50) + "px";
    return newLaser;
}

function moveLaser(laser) {
    let laserInterval = setInterval(() => {
        let xPosition = parseInt(laser.style.left);
        let aliens = document.querySelectorAll('.alien');

        //comparando se cada alien foi atingido, se sim, troca o src da img
        aliens.forEach((alien) => {
            if (checkLaserCollision(laser, alien)) {
                alien.src = 'imgs/explosion.png';
                alien.classList.remove('alien');
                alien.classList.add('dead-alien');
            }
        })
        
        if (xPosition === 340) {
            laser.remove();
        } else {
            laser.style.left = (xPosition + 8) + "px";
        }
    }, 10);
}

//funcao para criar inimigos aleatorios
function createAlien() {
    let newAlien = document.createElement('img');
    let alienSprite = alienImg[Math.floor(Math.random() * alienImg.length)]; //sorteio de imagem
    newAlien.src = alienSprite;
    newAlien.classList.add('alien');
    newAlien.classList.add('alien-transition');
    newAlien.style.left = '500px';
    newAlien.style.top = (Math.floor(Math.random() * 290) + 'px');
    playArea.appendChild(newAlien);
    moveAlien(newAlien);
}

//funcao para movitar os inimigos
function moveAlien(alien) {
    let moveAlienInterval = setInterval(() => {
        let xPosition = parseInt(window.getComputedStyle(alien).getPropertyValue('left'));
        if (xPosition <= 0) {
            if (Array.from(alien.classList).includes('dead-alien')) {
                alien.remove();
            } else {
                //gameOver();
            }
        } else {
            alien.style.left = (xPosition - 4) + 'px';
        }
    }, 30);
}

//funcao para colisao
function checkLaserCollision(laser, alien) {
    let laserTop = parseInt(laser.style.top);
    let laserLeft = parseInt(laser.style.left);
    let laserBottom = laserTop - 150;
    let alienTop = parseInt(alien.style.top);
    let alienLeft = parseInt(alien.style.left);
    let alienBottom = alienTop - 30;

    if (laserLeft != 340 && laserLeft + 40 >= alienLeft) {
        if (laserTop <= alienTop && laserTop >= alienBottom) {
            return true;
        } else {
            return false;
        }

    } else {
        return false;
    }
}

startButton.addEventListener('click', (event) => {
    playGame();
})

//inicio do jogo
function playGame() {
    startButton.style.display = 'none';
    instructionText.style.display = 'none';
    window.addEventListener('keydown', flyShip);
    alienInterval = setInterval(() => {
        createAlien();

    }, 2000);
}

//funcao de gameover
function gameOver() {
    window.removeEventListener('keydown', flyShip);
    clearInterval(alienInterval);
    let aliens = document.querySelectorAll('.alien');
    aliens.forEach((alien) => alien.remove());
    let lasers = document.querySelectorAll('.laser');
    lasers.forEach((laser) => laser.remove());
    setTimeout(() => {
        alert('game over!');
        yourShip.style.top = "250px"
        startButton.style.display = "block";
        instructionText.style.display = "block";
    });
}