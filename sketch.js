var monkey , monkey_running
var banana ,bananaImage
var ground
var obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survival_time = 0;
var score = 0;
var count = 0;
var gameState = "play";

function preload(){
  
  monkey_running =            loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png", "Monkey_10.png");
  
  bananaImage = loadImage("banana.png")
  
  obstacleImage = loadImage("stone.png");
  backgroundImage = loadImage("jungle.jpg");

}

function setup() {
  createCanvas(600,500);
  
  
}

function draw() {
  
  background("black");
  
  drawSprites();
 
  fill("white");
  stroke("white");
  textSize(22);
  text("SURVIVAL TIME :- " + survival_time,200,35);
  
  text("SCORE - "+ score,40,35);
}
