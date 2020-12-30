const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var leftSide,bottomSide,rightSide;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);

	engine = Engine.create();
	world = engine.world;

	//create the ground
	ground = new Ground(800,610,1600,20);

	//create the paper ball
	paper1= new Paper(50,550,20);

	//create the dustbin
	rightSide = new Dustbin(1570,530,20,150);
	bottomSide= new Dustbin(1465,590,200,20);
	leftSide = new Dustbin(1370,530,20,150);

	//rightSide = new Dustbin(770,530,20,150);
	//bottomSide= new Dustbin(665,590,200,20);
	//leftSide = new Dustbin(570,530,20,150);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  //display the paper ball
  paper1.display();

  //display the dustbin
  rightSide.display();
  bottomSide.display();
  leftSide.display();

  //display the ground
  ground.display();

  //draw the sprites
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:110,y:-110});
	}
}