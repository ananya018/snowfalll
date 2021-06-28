const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg, bgImg;
var snowmanImg,snowman,reindeer,reindeerImg;
var maxSnow = 1000
var snows = []

function preload(){
  bgImg = loadImage("snowbg.jpg")
  snowmanImg = loadImage("snowman.png")
  reindeerImg = loadImage("reindeer.png")
}
function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

 bg = createSprite(600, 300);
 bg.addImage("bg",bgImg)
 bg.scale = 1.5

 snowman = createSprite(900,520)
 snowman.addImage("snowman",snowmanImg)
 snowman.scale = 0.08
 reindeer = createSprite(300,500)
 reindeer.addImage("reindeer",reindeerImg)
 reindeer.scale =0.5

}

function draw() {
  background(255,255,255); 
  drawSprites();
  createsnow();
  Engine.update(engine);
  for(var j = 0;j<maxSnow;j++) {
    snows[j].display();
  }
}
function createsnow (){
  if (frameCount%50===0){
    for(var i = 0;i<maxSnow;i++) {
      snows.push(new Ball(random(0,1200),0,20,20))
    }
  }
}