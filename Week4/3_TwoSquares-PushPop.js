let angle1, angle2;
let rotSpeed1, rotSpeed2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  angle1 = 0;
  angle2 = 0;

  rotSpeed1 = random(-1,3);
  rotSpeed2 = random(-1,3);
}

function draw() {
  background(0);

  noFill();
  strokeWeight(15);
  stroke(255);

  //first square, starts fresh thanks to push and pop
  push();
  translate(width/3,height/2);
  rectMode(CENTER);
  rotate(angle1);
  rect(0,0,150,150);
  pop();

  //second square, also starts fresh
  push();
  translate((width/3)*2,height/2);
  rectMode(CENTER);
  rotate(angle2);
  rect(0,0,150,150);
  pop();

  angle1 += rotSpeed1;
  angle2 += rotSpeed2;
}
