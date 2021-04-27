var car1,car2,car3,car4,wall;
var speed,weight,speed2,speed3,speed4;

function setup() {
  
  createCanvas(1450,825);
  speed = random(50,110)
  weight = random(400,1500) 
  speed2 = random(50,110)
  speed3 = random(50,110)
  speed4 = random(50,110)
  wall = createSprite(1400,450,100,900);
  wall.shapeColor = 80,80,80
  car1 = createSprite(50, 120, 50, 50);
  car1.shapeColor = "white"
  car2 = createSprite(50, 320, 50, 50);
  car2.shapeColor = "white"
  car3 = createSprite(50, 520, 50, 50);
  car3.shapeColor = "white"
  car4 = createSprite(50, 720, 50, 50);
  car4.shapeColor = "white"
  wall = createSprite(1400,450,100,900);
  wall.shapeColor = 80,80,80

   
  car4.velocityX = speed;
  car3.velocityX = speed;
  car2.velocityX = speed;
  car1.velocityX = speed;
  
 //click on any car if u want it to move
 

}

function draw() {
 //car1
  if (wall.x-car1.x < (car1.width + wall.width)/1.25){
    car1.velocityX = 0
   var deformation = 0.5 *  weight * speed* speed/22509; 
  
  if(deformation > 180){
    car1.shapeColor = color(255,0,0)
  }
  if(deformation<180 && deformation>100){
    car1.shapeColor = "yellow"
  }
  if(deformation<100){
    car1.shapeColor = "green"
  }
 }

//car2
 if (wall.x-car2.x < (car2.width + wall.width)/1.25){
  car2.velocityX = 0
 var deformation2 = 0.5 *  weight * speed2* speed2/22509; 

if(deformation2 > 180){
  car2.shapeColor = color(255,0,0)
}
if(deformation2<180 && deformation2>100){
  car2.shapeColor = "yellow"
}
if(deformation2<100){
  car2.shapeColor = "green"
}
}

//car3
if (wall.x-car3.x < (car3.width + wall.width)/1.25){
  car3.velocityX = 0
 var deformation3 = 0.5 *  weight * speed3* speed3/22509; 

if(deformation3 > 180){
  car3.shapeColor = color(255,0,0)
}
if(deformation3<180 && deformation3>100){
  car3.shapeColor = "yellow"
}
if(deformation3<100){
  car3.shapeColor = "green"
}
}
//car4

if (wall.x-car4.x < (car4.width + wall.width)/1.25){
  car4.velocityX = 0
 var deformation4 = 0.5 *  weight * speed3* speed3/22509; 

if(deformation4 > 180){
  car4.shapeColor = color(255,0,0)
}
if(deformation4<180 && deformation4>100){
  car4.shapeColor = "yellow"
}
if(deformation4<100){
  car4.shapeColor = "green"
}
}








  background(0,0,0);
 drawSprites();
}