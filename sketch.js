var PLAY = 1;
var END = 0;
var gameState = PLAY;

var bg, bgImage;
var deer, deerImage;

function preload(){

  bgImage = loadImage("Images/HuntingGameBg.jpg")

  deerImage = loadAnimation("Images/Deer1.png", "Images/Deer2.png", "Images/Deer3.png", "Images/Deer4.png", "Images/Deer5.png", "Images/Deer6.png")

}


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  bg = createSprite(windowWidth/2, windowHeight/2);
  bg.addImage(bgImage);
  bg.scale = 1.85;

  deer = createSprite(windowWidth/4, windowHeight-100);
  deer.addAnimation("deer_running", deerImage);
  deer.scale = 2;
}

function draw(){
  background("green");

  drawSprites();

}