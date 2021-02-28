const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
const Render=Matter.Render()

var engine, world
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5
var rope1,rope2,rope3,rope4,rope5
var Roof

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.

	Roof = new roof(width/2,height/4,width/6,20);

	bobDiameter=40

	startBobPositionX=width/2
	startBobPositionY=height/4+450

	bobObject1 = new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject2 = new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobObject3 = new bob(startBobPositionX,startBobPositionY,bobDiameter);
	bobObject4 = new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobObject5 = new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);


rope1 = new rope(bobObject1.body,Roof.body,-bobDiameter*2,0)
rope2 = new rope(bobObject2.body,Roof.body,-bobDiameter*1,0)
rope3 = new rope(bobObject3.body,Roof.body,0,0)
rope4 = new rope(bobObject4.body,Roof.body,bobDiameter*1,0)
rope5 = new rope(bobObject5.body,Roof.body,bobDiameter*2,0)


Engine.run(engine);

/*var render=Render.create({
	elemen
})*/

}


function draw() { 
  rectMode(CENTER);
  background("plum");
  text(mouseX+ "," +mouseY,mouseX,mouseY)	

  Roof.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.CaretPosition,{
			x:-50,
			y:-45
		})	}
}