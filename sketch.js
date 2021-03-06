var PLAY = 1;
var END = 0;
var gameState = PLAY;
var base;
var ground, bg;
var player, playerImg;
var obstacleImg;
var gr, grImg; 
var a, aImg;
var o, oImg;
var score = 0
var b1, b2;
var s;
var sound; 

function preload(){
  bg = loadImage("sky.jpg")
  playerImg = loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png")
  obstacleImg = loadImage("hurdle.png")
  grImg = loadImage("ground.png")
  aImg = loadImage("audience.png")
  oImg = loadImage("olympic.png")
  sound = loadSound("sound.wav")
}

function setup() {
  createCanvas(500, 350);
  a = createSprite(290, 185, 500, 150)
  a.addImage("ai",aImg)
  a.scale = 0.6
  
  base = createSprite(292, 88, 500,20)
  base.shapeColor = 130
  
  b1 = createSprite(55, 170, 25, 160)
  b1.shapeColor=130
  
  b2 = createSprite(530, 170, 26, 160)
  b2.shapeColor=130
  
  o = createSprite(450, 50, 20, 20)
  o.addImage("o",oImg)
  o.scale = 0.03
  
  ground = createSprite(300, 300, 540, 130)
  ground.shapeColor=80
  //ground.visible= false
  
  
  gr = createSprite(40, 253.5, 140, 20);
  gr.addImage("ground", grImg);
 // gr.x = ground.width / 2;
  gr.velocityX = -5
  
  player = createSprite(70, 250, 30, 30)
  player.addAnimation("playerImg",playerImg);
  player.setCollider("rectangle",0,0,170, 230)
  player.scale = 0.35
  
 
  
}

function draw() {
  background(bg)
  player.collide(ground)
  score = score + Math.round(getFrameRate() / 60);
  textSize(20)
  fill("black")
  text("Score:" + score ,300, 50 )
  if (keyDown("space") && player.y >= 150){
      player.velocityY = -12;
    }
     player.velocityY = player.velocityY + 0.8;
  spawnObstacles(); 
  spawnS();
  
  camera.position.x = player.x + 220;  
  camera.position.y = player.y+0;

 drawSprites()
}
function spawnObstacles(){
  if (frameCount % 100 === 0) {
    var obstacle = createSprite(600, 250, 40, 10);
    obstacle.addImage(obstacleImg)
    obstacle.scale = 0.055
     obstacle.velocityX = -6;
    obstacle.lifetime = 100
}}
function spawnS(){
  if(frameCount%10===0){
     s = createSprite(500, 300, 20, 10)
  s.shapeColor = 255
  s.velocityX = -6  
    s.lifetime = 100
  }
}