const cowCharat = document.querySelector('#cowCharater')
const ground = document.querySelector('#chao');
const areaGame = document.querySelector('.game');
const scor = document.querySelector('#placar');
// let score = 0;
window.onload = function(){
    let gravity = 4;
    let gameover = false;
    let gap = 430;
    let cowX = 220;
    let cowY = 290;
    let score = 0;

    const startGame = () => {
        cowY -= gravity;
        cowCharat.style.bottom = cowY + 'px';
        cowCharat.style.left = cowX + 'px';
    }
    let loop = setInterval(startGame, 30);

    const scoreGame = () => {
        window.setInterval(function(){
          scor.innerHTML = score;
        },1000);
    }

    const gameOver = () => {
        document.removeEventListener('keyup', up);
        clearInterval(loop);
        gameover = true;
        // chama o modal
    }

    function setObstacle() {

        let obstacleX = 1400;
        let cons = 1460
        let obstacla = 1650;
        let randomY = Math.random() * 500;
        // let heightale = Math.random() * 50;
        let tama = Math.random() * 30;
        let obstacleY = randomY;
        const obstacle = document.createElement('div');
        const top = document.createElement('div');

        if(!gameover){
            obstacle.classList.add('obstacle');
            top.classList.add('top');
        }
        
        areaGame.appendChild(obstacle);
        areaGame.appendChild(top);

        obstacle.style.left = obstacla + 'px';
        obstacle.style.bottom = tama + 'px';
        obstacle.style.height = obstacleY + 'px';
        let sei = obstacle.style.height = obstacleY + 'px';

        top.style.left = obstacleX  + 'px';
        // top.style.heigh = heightale + 'px';
        top.style.bottom = obstacleY + gap + 'px';
        // top.style.height = obstacleY  + 'px';

        function moveObstacle() {
            obstacleX -=2;
            obstacla -=2;
            obstacle.style.left = obstacla + 'px';
            top.style.left = obstacleX  + 'px';

            if(cons === -60){
                clearInterval(loop)
                areaGame.removeChild(top);
                areaGame.removeChild(obstacle);
            }
            
            // if ((cowY === 70) || (obstacleX  === cowX + 70)){
            //     gameOver();
            //     console.log('a')
            // }

            if ( obstacleX > 160 && obstacleX < 270 && cowX === 220){
                console.log('btaue')
                gameOver();
            }

            // score
            if ((obstacleX  === cowX + 70) || (obstacla === cowX )) {
                score +=1
            }

            // if (cowX < obstacleX + 60 && cowX + 70 > obstacleX){
            //     if(cowY < obstacleY + 40 && 62 + cowY > obstacleY){
            //         console.log('co')
            //         gameOver();
            //     }
            // }
            
        }
        let loop = setInterval(moveObstacle, 20);
        setTimeout(setObstacle, 4800);

    }


    const up = (event) => {
        if(event.keyCode === 38){
            cowMoveJump()
        }
    }
    const right = (event) => {
        if(event.keyCode === 39){
            cowMoveRight()
        }
    }
    const cowMoveJump = () => {
        if(cowY < 560){
            cowY += 50
        }
        cowCharat.style.bottom = cowY + 'px';
    }
    const cowMoveRight = () => {
        cowX += 10
    
        cowCharat.style.right = cowX + 'px';
    }
    document.addEventListener('keyup', up);
    document.addEventListener('keyright', right);

    startGame();
    setObstacle();
    scoreGame();
    
}