// define global variables
let x,y,d;
let xDir, yDir;

function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(windowWidth, windowHeight);

  x = 0;
  y = height/2;
  d = 50;

  // variables for movement direction: the farther a number is from 0, the faster it moves
  xDir = 1;
  yDir = -2;

}
function draw() {
  // Set background to black with an alpha/transparency of 10
  background(0,10);
  // playing with alpha creates a trail effect

  fill(255,0,0);
  circle(x,y,d); // first frame x = 0

  x += xDir; // 0 + xDir (1), now x = 1, next frame 2, etc
  y += yDir; // height/2 += yDir (-2), now y = (height/2)-2, etc

}