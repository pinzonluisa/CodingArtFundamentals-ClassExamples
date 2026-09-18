///define global variables
let x,y,d;

function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(windowWidth, windowHeight);

  x = 0; 
  y = height/2;
  d = 50;

}
function draw() {
  // Set background to black
  background(225,10);

  
  fill(255,0,0);
  circle(x,y,d);//first frame x = 0;

  x += 1;

}