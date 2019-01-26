// This code generates 150 stars in random spots in the canvas.
function setup() 
{
   createCanvas(400, 400);
   background(255);

}


function draw() 
{
 for (var i = 0; i < 150; i ++)
 {
   drawStar(random(400), random(400), random(0, 2*PI), random(.25, 1.5));

 }
   noLoop();
}

function drawStar(x, y, rot, sc){
   push();
   fill(random(255), random(255), random(255), random(255));
   stroke(random(255), random(255), random(255));
   strokeWeight(random(3));
   translate(x, y)
   scale(sc);
   rotate(rot);   
   beginShape();
      vertex(0, -15);
      vertex(0+5, -5);
      vertex(0+20, -3);
      vertex(0+10, 5);
      vertex(0+12, 17);
      vertex(0, 10);
      vertex(0-12, 17);
      vertex(0-10, 5);
      vertex(0-20, -3);
      vertex(0-5, -5);
      vertex(0, -15);
   endShape(CLOSE);
   pop();
 
}