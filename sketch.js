var trex, trex_running, edges;
var groundImage;
var ground; 
var invi_ground;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  ground=createSprite(300,190,600,3);
  ground.addImage("ground1",groundImage);
  //invisible ground
  invi_ground=createSprite(300,192,600,3);
  invi_ground.visible=false;
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50
}


function draw(){
  //set background color 
  background("white");
 ground.velocityX=-4;
  //logging the y position of the trex
  console.log(trex.y)
  
  //jump when space key is pressed
  if(keyDown("space")&& trex.y>165){
    trex.velocityY = -9;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  
  //stop trex from falling down
  trex.collide(invi_ground);

  if (ground.x<0){
    ground.x=300;
  }
  drawSprites();
}