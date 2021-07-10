var ship, ship_sailing;
var sea, seaImg;

function preload(){
  ship_sailing = loadAnimation("ship1.png","ship2.png");
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(1000,400);
  //sea background
  sea = createSprite(200,200);
  sea.addImage(seaImg);
  sea.scale = 0.4;
  sea.velocityX = -4;
  //ship sprite creation
  ship = createSprite(200,200,200,200);
  ship.addAnimation("shipping", ship_sailing);
  ship.scale = 0.3;
  console.log(ship.x);
}

function draw() {
  background("white");
  //code to repeat background
  if(sea.x<200){
    sea.x = width/2;
  }
  drawSprites();
}