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
            x: 1,
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
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        if(this.position.y + this.height + this.velocity.y <= canvas.height){
    this.velocity.y += gravity
        this.velocity.y += gravity;
        }else{
            this.velocity.y = 0; 
        }
    }

}

// Platform Class 

class Platform{
   constructor(){
    this.position ={
        x: 300,
        y: 300,
    }
    this.width = 200;
    this.height = 50;
   } 

   draw(){
    context.fillStyle = 'blue';
    context.fillRect(this.position.x, this.position.y, this.width, this.height)

   }
}

const player = new Player();
const platform = new Platform();
// player.draw()

const keys = {
right: {
    pressed: false
},
left:{ 
    pressed: false
}
}

function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0, canvas.width, canvas.height)
    player.update();
    platform.draw();

    if(keys.right.pressed && player.position.x < 500){
        player.velocity.x = 5; 
    }else if(keys.left.pressed && player.position.x > 100){
        player.velocity.x = -5;
    }else{
        player.velocity.x = 0; 

        if(keys.right.pressed){
            platform.position.x -= 5;
        }else if(keys.left.pressed){
            platform.position.x +=5;
        }
    }
// Platform collison detection 
    if(
        player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width){

        player.velocity.y = 0
    }
}

animate();

// EVENT LISTNERS 

addEventListener('keydown',({keyCode}) =>{
  switch (keyCode) {
    case 65:
      console.log("left");
      keys.left.pressed = true;
      break;
    case 83:
      console.log("down");
      break;
    case 68:
      console.log("right");
      keys.right.pressed = true
      break;
    case 87:
        player.velocity.y -= 20
      console.log("up");
      break;
  }
  console.log(keys.right.pressed);
})

addEventListener("keyup", ({ keyCode }) => {
  switch (keyCode) {
    case 65:
      console.log("left");
      keys.left.pressed = false;
      break;
    case 83:
      console.log("down");
      break;
    case 68:
      console.log("right");
      keys.right.pressed = false;
      break;
    case 87:
      player.velocity.y -= 20;
      console.log("up");
      break;
  }
  console.log(keys.left.pressed)
});


