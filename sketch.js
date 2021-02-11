
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world, boy;

function preload(){

	boy=loadImage("boy.png");

}

function setup(){

	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1 = new mango(1100, 100, 30);
	mango2 = new mango(1000, 100, 30);
	mango3 = new mango(1100, 200, 30);
	mango4 = new mango(1150, 150, 30);
	mango5 = new mango(1050, 150, 30);
	mango6 = new mango(1200, 300, 30);
	mango7 = new mango(950, 250, 30);
	mango8 = new mango(950, 170, 30);
	mango9 = new mango(1200, 200, 30);
	mango10 = new mango(1000, 200, 30);

	treeObj = new tree(1050, 580);
	ground = new Ground(650, 600, 1300, 20);
	stone = new Stone(240, 415, 50);

	rope = new Slingshot(stone.body,{x: 240, y: 410});

}

function draw(){

  	background(230);
  
    Engine.update(engine);

    image(boy ,200, 340, 200, 300);

    textSize(25);
	fill("black");
    text("Press Space to get a second Chance to Play!!",50 ,50);

    treeObj.display();

    mango1.display();
  	mango2.display();
  	mango3.display();
  	mango4.display();
  	mango5.display();
  	mango6.display();
  	mango7.display();
  	mango8.display();
  	mango9.display();
  	mango10.display();

 	stone.display();
  	ground.display();

	rope.display();

	checkOk(stone, mango1);
	checkOk(stone, mango2);
	checkOk(stone, mango3);
	checkOk(stone, mango4);
	checkOk(stone, mango5);
	checkOk(stone, mango6);
	checkOk(stone, mango7);
	checkOk(stone, mango8);
	checkOk(stone, mango9);
	checkOk(stone, mango10);

}

function mouseDragged(){

    Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});

}

function mouseReleased(){

    rope.fly();

}

function keyPressed(){

	if(keyCode === 32){

		Matter.Body.setPosition(stone.body, {x: 240, y: 415});
		rope.attach(stone.body);

	}

}

function checkOk(lstone, lmango){

	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);

	if(distance<=lmango.r+lstone.r){

		Matter.Body.setStatic(lmango.body, false);
	
	}

}
