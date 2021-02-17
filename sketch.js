const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
var engine, world, ground;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,400,800,20);

  box1 = new Box(400,200,50,50);

  box2 = new Box(420,100,50,70);
}

function draw() {
  background("black");  

  Engine.update(engine);
  
  ground.display();
  box1.display();
  box2.display();

 //drawSprites();
}