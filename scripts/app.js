// selects canvas 
const canvas = document.querySelector('canvas');
//  HTMLCanvasElement.getContext() method returns a drawing context on the canvas,
const context = canvas.getContext('2d')
// change canvas size :  Window property innerWidth returns the interior width of the window in pixels. This includes the width of the vertical scroll bar, if one is present.
// full width of window broswer  // full height of window browser 


canvas.width = innerWidth 
canvas.height = innerHeight 


class Player{
    constructor(){
        this.position = {
            x: 100,
            y: 100,
        }
        this.width = 50;
        this.height = 50;
    }
    draw(){
        // .fillRect() method draws a fill rectangle w/ starting point x,y 
        context.fillRect(this.position.x, this.position.y, this.width , this.height)
    }
}

const player = new Player();
player.draw()