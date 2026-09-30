//global variable for rotation
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

  push();
  translate(width/2,height/2);
  rectMode(CENTER);
  rotate(angle1);
  rect(0,0,200,200);
  pop();

  angle1 += rotSpeed1;
}
