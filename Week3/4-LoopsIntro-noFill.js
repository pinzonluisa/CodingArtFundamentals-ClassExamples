let x,y,scale;
function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);

  x = width/2;
  y = height/2;
  scale = 40;

}

function draw() {
background(0);


for(i = 0; i < 20 ; i++)
{
  noFill();
  stroke('blue');
  strokeWeight(4);
  rect(x,y,i*scale,i*scale);
}

}


