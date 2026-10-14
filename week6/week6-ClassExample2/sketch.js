let mover1,mover2;
function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(windowWidth, windowHeight);
  mover1 = new mover(); // mover is the name of the class, that part has to match
  mover2 = new mover(); // same class, different instance, its own randomized properties
}

function draw() {
  // background color, not black: R=255, G=60, B=100, with a semi-transparent alpha
  background(255,60,100,50);
  mover1.display(7,10);
  mover2.display(2,25);
  mover1.update();
  mover2.update();
  mover1.keepInCanvas();
  mover2.keepInCanvas();
}