let x,y;

function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER); // x,y now set the center of the rectangle instead of the top-left corner

  x = width/2;
  y = height/2;


}

function draw() {
background(0);

fill('orange');
strokeWeight(3);
rect(x,y,width/2,height); // centered rectangle, half the canvas wide and the full canvas tall

}