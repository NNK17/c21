var moving, fixed, ob1, ob2, fall, ground

function setup() {
  createCanvas(800,400);
  fixed= createSprite(400, 200, 50, 50);
  moving = createSprite (200,400,50,50);
  ob1= createSprite (400,250,20,20);
  ob2= createSprite (0,250,20,20);
  ob1.velocityX= -2;
  ob2.velocityX= 2;
  fall = createSprite(600,0,10,10);
  fall.velocityY=4;
  ground = createSprite(400,390,800,20);
  



}

function draw() {
  background(0,0,0);  
  drawSprites();
  moving.x= World.mouseX
  moving.y= World.mouseY
  moving.shapeColor="Green"
  fixed.shapeColor="Red"
  moving.debug=true;
  fixed.debug=true; 
  isTouching(fixed,moving)
  bounceOff(ob1,ob2)
  if (isTouching(fixed,moving)){

    text("touching",100,100)
  }else{

    text("not touching",100,100)

  }
  stopfall(fall,ground)
}



