function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);

  x = width/2; 
  y = height/2; 
  sclae = width;

}

function draw() {
background(0);
 
fill('orange'); 
strokeWeight(3);
rect(x,y,width/2,height);

}
