
let x, y, d, xDir, yDir, speed; // speed is set up here but not used yet in this version

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

y += yDir*10; // move by direction, scaled up so it's visible
x += xDir*10;

// keep the ball inside the canvas: flip direction when it hits an edge
if((x>width)||(x<0))
{
  xDir = -xDir;
}
if((y>height)||(y<0))
{
  yDir = -yDir;
}


}