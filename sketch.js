var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var score = 0
var drink,coin,bomb

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");

  drinkImg = loadImage("energyDrink.png")
}

function setup(){
  
  createCanvas(400,400);

drink = createSprite (150,50,20,20)
drink.scale = 0.3
drink.addImage ("drink", drinkImg)

coin = createSprite (100,200,20,20)
bomb = createSprite (200,200,20,20)
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
  

leftBoundary=createSprite(0,0,100,800);

// leftBoundary.invisible = false;
// leftBoundary.visible = true;
// leftBoundary.invisible = true;
leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}


function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;

  text(score,50,395)
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);


if (boy.isTouching (drink)) {
  score = score+5
}

if (boy.isTouching (coin)) {
  score = score+10
}

if (boy.isTouching (bomb)) {
  score = score - 7
}

  //code to reset the background

  if(path.y > 400 ){
    path.y = height/2;
  }

  /*if(path.y > 400 ){
   
  path.y = height/2;
  }*/

  /*if(path.y > 400 ){
path.y = height/2;}*/

/*if(path.y > 400 ){path.y = height/2;}*/
  
  drawSprites();
}
