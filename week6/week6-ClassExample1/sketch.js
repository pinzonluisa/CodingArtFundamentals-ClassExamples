let mover1;
function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(windowWidth, windowHeight);
  mover1 = new mover(); // mover is the name of the class, that part has to match

}

function draw() {
  // background color, not black: R=255, G=60, B=100, with a semi-transparent alpha
  background(255,60,100,50);
  mover1.display(7,10); // draw it
  mover1.update(); // move it
  mover1.keepInCanvas(); // bounce it off the edges
}