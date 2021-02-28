# MatterJSBoilerPlate
MatterJSBoilerPlate
make 3 classes called rope.js,bob.js/ball.js,roof.js

Class roof-- same as that of the ground class in the angry birds,
only the roof will be some where at the top of the game area--this is pretty easy

class ball/bob--- same as paper class in the crumpled ball project
this also you wont have any problem

class rope, you might find some kind of problems, but follow the PDF
the point2 which contains the snippet of the code will be the constructor part of the class
and then point 3 gives the display function use them

In sketch.js
1. make matter.constraint and matter.render(follow the same as you have done with Matter.world and matter.engine)>>>take care of the case sensitivity

2.5 bob objects to be made with 5 rope

3. make the canvas of (1600,700)

4. make a roof object with the roof class
roofObject=new roof(width/2,height/4,width/7,20);

5. give diameter to the ball/bob
bobDiameter=40;

6.you need to adjust the position of the balls 
    startBobPositionX=width/2;
	startBobPositionY=height/4+500;

	bobObject1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);

	bobObject2=new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);

	bobObject3=new bob(startBobPositionX,startBobPositionY, bobDiameter);

	bobObject4=new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);

	bobObject5=new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

7. use the render portion
var render=Render.create(same way that you have done in the project of crumpled balls)

8.for the rope to be connected with the bobs
    rope1=new rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0)

	rope2=new rope(bobObject2.body,roofObject.body,-bobDiameter*1, 0)
	rope3=new rope(bobObject3.body,roofObject.body,0, 0)
	rope4=new rope(bobObject4.body,roofObject.body,bobDiameter*1, 0)
	rope5=new rope(bobObject5.body,roofObject.body,bobDiameter*2, 0)

9.finally display all the objects

