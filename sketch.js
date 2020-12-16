var movingRect, fixedRect;
var rect1, rect2;
var rect3, rect4;

function setup() {
  createCanvas(800,400);

  movingRect = createSprite(200,100,50,50);
  movingRect.shapeColor = "Yellow"

  fixedRect = createSprite(200,120,50,50);
  fixedRect.shapeColor = "Blue"

  rect1 = createSprite(200,200,50,50);
  rect1.shapeColor = "pink"
  rect1.velocityX = 2;

  rect2 = createSprite(600,200,50,50);
  rect2.shapeColor = "brown"

  rect3 = createSprite(200,60,50,50);
  rect3.shapeColor = "cyan"
  rect3.velocityX = 2;

  rect4 = createSprite(600,60,50,50);
  rect4.shapeColor = "black"
}

function draw() {
  background(220,255,255);  
  
  movingRect.x = mouseX
  movingRect.y = mouseY;

  console.log("Distance " + (movingRect.x - fixedRect.x));
  console.log("Width/2 "+  (movingRect.width + fixedRect.width)/2)

  
  
  

   if (isTouching(movingRect, fixedRect))
   {
     fixedRect.shapeColor = "red";
   }else 
   {
     fixedRect.shapeColor = "blue";
   }

    bounceOff(rect1, rect2);
    bounceOff(rect3, rect4);
    
   

  drawSprites();

}

