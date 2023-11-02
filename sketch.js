var ball

function setup() {

  createCanvas(400,400);
  ball=createSprite(200,200, 20,20)
  
}

function draw() 
{
  background(30);
  if(keyDown(UP_ARROW)){
    ball.velocityY=-2
  }
  if(keyDown(DOWN_ARROW)){
    ball.velocityY=2
  }
if(keyDown(RIGHT_ARROW)){
  ball.velocityX=2
}
if(keyDown(LEFT_ARROW)){
  ball.velocityX=-2
}



drawSprites()
}




