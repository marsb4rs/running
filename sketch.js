var path, boy, leftBoundary, rightBoundary;
var pathImage, boyImage;
function preload(){
  //pre-load images
  pathImage=loadImage("path.png")
  boyImage=loadAnimation("Runner-1.png","Runner-1.png","Runner-2.png", "Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200)
  path.addImage(pathImage)
  path.scale=1.2;
  path.velocityY= 4;
  boy=createSprite(200,350,30,30);
  boy.addAnimation("running", boyImage)
  boy.scale=0.08
  leftBoundary=createSprite(0,0,50,800)
  leftBoundary.visible=false
  rightBoundary=createSprite(400,0,50,800)
  rightBoundary.visible=false
}

function draw() {
  background(0);
  boy.x=World.mouseX;
  if (path.y>400){
    path.y=100
  }
  boy.collide(leftBoundary)
  boy.collide(rightBoundary)
drawSprites()
}
