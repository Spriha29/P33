const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var backgroundImg;
var girl, girl_img;

var snow = [];
var snowflakes = 100;

function setup(){
  girl_img = loadAnimation("snow girl_1","snow girl_2","snow girl_3");
  backgroundImg = loadImage("snow1.jpg");
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  //rectMode(CENTER);
  girl = createSprite(400, 200, 50, 50);
  girl.addAnimation(girl_img);

  for(var i = 0; i<snowflakes; i++){
    snow.push(new Snow(random(0.400), random(0.400)));
  }
}

function draw() {
  //rectMode(CENTER);
  background(backgroundImg); 
  drawSprites();
}