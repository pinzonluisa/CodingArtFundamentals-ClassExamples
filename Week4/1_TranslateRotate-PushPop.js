// global variable for rotation
let angle1;
let rotSpeed1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  angle1 = 0;
  rotSpeed1 = random(-1,3);
}

function draw() {
  background(0);

  noFill();
  strokeWeight(15);
  stroke(255);

  push(); // save the current canvas position/rotation so we can restore it after
  translate(width/2,height/2); // move the origin to the center of the canvas
  rectMode(CENTER);
  rotate(angle1); // rotate around that new origin
  rect(0,0,200,200);
  pop(); // restore the canvas back to how it was before push()

  angle1 += rotSpeed1;
}