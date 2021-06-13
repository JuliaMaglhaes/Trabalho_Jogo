const game = document.getElementById("cybergamecanvas");
const context = game.getContext("2d");
const CANVAS_WIDTH = game.width = 640;
const CANVAS_HEIGHT = game.height = 1100;

let speed = 0.2;
let x = 0;
let position2 = 1920;
let c = 1920;

const background1 = new Image();
background1.src = 'img/sky.png';
const background2 = new Image();
background2.src = 'img/rocks_1.png'
const background3 = new Image();
background3.src = 'img/rocks_2.png'
const background4 = new Image();
background4.src = 'img/clouds_1.png'
const background5 = new Image();
background5.src = 'img/clouds_2.png'

class BackgroundMove {
    constructor(img, modify){
        this.img = img;
        this.modify = modify;
        this.speedBackground = speed * this.modify;
        this.width = 1920;
        this.height = 1000;
        this.x = 0;
        this.position2 = this.width;
        this.y = 0;
    }
    setBackgroundSpeed(){
        this.speedBackground = speed * this.modify;

        if(this.position2 <= -this.width){
            this.position2 = this.width + this.x - this.speedBackground;
        }
        if(this.x <= -this.width){
            this.x = this.width + this.position2 - this.speedBackground;
        }
        this.x = Math.floor(this.x - this.speedBackground);
        this.position2 = Math.floor(this.position2 - this.speedBackground);
    }
    setBackgroundImage(){
        context.drawImage(this.img,  this.x, this.y, this.width, this.height);
        context.drawImage(this.img, this.position2, this.y, this.width, this.height)
    }
}

const background2a = new BackgroundMove(background2, 0)
const background3a = new BackgroundMove(background3, 0.1)
// const background4a = new BackgroundMove(background4, 1)
const background5a = new BackgroundMove(background5, 0.0)


const moveBackground = () =>{

    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    background5a.setBackgroundSpeed();
    background5a.setBackgroundImage();
    background2a.setBackgroundSpeed();
    background2a.setBackgroundImage();
    background3a.setBackgroundSpeed();
    background3a.setBackgroundImage();
    // background4a.setBackgroundSpeed();
    // background4a.setBackgroundImage();
    // context.drawImage(cow, cowX, cowY);
    requestAnimationFrame(moveBackground);
};



const Layer = () =>{
    moveBackground()
}

Layer()




