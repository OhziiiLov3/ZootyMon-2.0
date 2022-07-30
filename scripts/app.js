// selects canvas 
const canvas = document.querySelector('canvas');
//  HTMLCanvasElement.getContext() method returns a drawing context on the canvas,
const context = canvas.getContext('2d')
// change canvas size :  Window property innerWidth returns the interior width of the window in pixels. This includes the width of the vertical scroll bar, if one is present.
// full width of window broswer  // full height of window browser 


canvas.width = innerWidth 
canvas.height = innerHeight 
const gravity = 1.5;

class Player{
    constructor(){
        this.position = {
            x: 100,
            y: 100,
        }
        this.velocity ={ // pushes player and down 
            x: 0,
            y: 0, 
        }
        this.width = 50;
        this.height = 50;
    }
    draw(){
        // .fillRect() method draws a fill rectangle w/ starting point x,y 
        context.fillStyle = 'purple'
        context.fillRect(this.position.x, this.position.y, this.width , this.height)
    }

    update(){
        // alter player properties 
        this.draw();
        this.position.y += this.velocity.y;
        if(this.position.y +this.height + this.velocity.y <= canvas.height){
    this.velocity.y += gravity
        this.velocity.y += gravity;
        }else{
            this.velocity.y = 0; 
        }
    }

    }


const player = new Player();
player.draw()

function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0, canvas.width, canvas.height)
    player.update();
}

animate();