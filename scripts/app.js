// selects canvas 
const canvas = document.querySelector('canvas');
//  HTMLCanvasElement.getContext() method returns a drawing context on the canvas,
const context = canvas.getContext('2d')


class Player{
    constructor(){
        this.position = {
            x: 100,
            y: 100,
        }
        this.width = 100;
        this.height = 100;
    }
    draw(){
        // .fillRect() method draws a fill rectangle w/ starting point x,y 
        context.fillRect(this.position.x, this.position.y, this.width , this.height)
    }
}

const player = new Player();
player.draw()