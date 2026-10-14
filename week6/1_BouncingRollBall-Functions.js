let x,y,d,xDir,yDir;
let r,g,b;
let offSetX, offSetY;

function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(windowWidth, windowHeight);

  r = 100;
  g = 200;
  b = 100;

  x = width/2;
  y = height/2;

  d = 10;

  xDir = random(-2,2);
  yDir = random(-2,2);

  offSetX = random(-5,5);
  offSetY = random(-5,5);

}

function draw() {
  // background color, not black: R=255, G=60, B=100, with a semi-transparent alpha
  background(255,60,100,50);
  display(7,d);
  update();
  keepInCanvas();

}

// my functions

// draw my shape: numShapes circles, offset from x/y, layered from largest to smallest
function display(numShapes,diam){

  for (let i = numShapes; i > 0; i--){
    fill(r,g,b);
    stroke('yellow');
    circle(x + offSetX*i,y+offSetY*i,diam*i);
  }
}
function update(){
  x += xDir;
  y += yDir;
}
function keepInCanvas(){
  if((x > width)||(x < 0)){
    xDir = -xDir;
  }
  if((y > height)||(y < 0)){
    yDir *= -1; // same as yDir = -yDir, just written differently
  }
}