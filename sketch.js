
var gameState="loading";
var game;
var loadingPng,groundPng,standingboypng;

function preload(){
loadingPng = loadImage("download.png")
groundPng = loadImage("images/stage-1.png")
standingboypng = loadImage("images/standing boy2.png")
}
function setup() {
  
  createCanvas(800,400);
  game= new Game()
}

var playButton,playButton2,boy,ground;

function draw() {
  background(255,255,255);  
  drawSprites();
 
  text(mouseX+","+mouseY,mouseX,mouseY)
   if (gameState==="loading") {
   	game.loading();
   }
   else if (gameState==="instruction") {
   	game.instruction();
   }
   else if (gameState==="play") {
    game.play();
   }
}
