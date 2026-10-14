// define global variables
let x,y,d;

function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(windowWidth, windowHeight);

  x = 100;
  y = height/2;
  d = 50;

}
function draw() {
  // Set background to black
  background(0);

  fill(255,0,0); // red circle
  circle(x,y,d);

  fill(0,255,0); // green circle, drawn further out using the same x/y scaled up
  circle(x*1.5,y*1.5,d);

}