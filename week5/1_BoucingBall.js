
let x, y, d, xDir, yDir,speed; 

function setup() {
  createCanvas(windowWidth, windowHeight);

  x = random(width); 
  y = random(height);
  d = random(30,100);

  xDir = random(-2,2); 
  yDir = random(-2,2);

  speed = random(1,10);

}

function draw() {
background(0);

circle (x,y,d);

y += yDir*10;
x += xDir*10;

//keepInCanvas
if((x>width)||(x<0))
{
  xDir = -xDir;
}
if((y>height)||(y<0))
{
  yDir = -yDir;
}


}
