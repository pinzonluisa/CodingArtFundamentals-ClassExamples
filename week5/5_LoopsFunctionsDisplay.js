let x,y,d,xDir,yDir; // xDir and yDir are set up here but not used yet in this version
let r,g,b;
let angle;

function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(windowWidth, windowHeight);

  angleMode(DEGREES);

  r = 100;
  g = 200;
  b = 100;

  x = width/2;
  y = height/2;

  d = 10;

  xDir = random(-2,2);
  yDir = random(-2,2);

  angle = 0;

}

function draw() {
  // background color, not black: R=255, G=60, B=100, with a semi-transparent alpha
  background(255,60,100,50);

  display(7,d,r,g,b);


  angle += 10;
}

// my functions

// mapping sine function, returns a value remapped from sin's -1 to 1 range
function mapSin(a,target1,target2){
  let myMap;

  myMap = map(sin(a),-1,1,target1,target2);

  return myMap;
}

// draw my shape: numShapes circles, offset by a sine wave, layered from largest to smallest
function display(numShapes,diam,cr,cg,cb){

  for (let i = numShapes; i > 0; i--){
    let offSetX = mapSin(angle,-5,5);
    let offSetY = mapSin(angle,-7,7);
    fill(cr,cg,cb);
    stroke('yellow');
    circle(x + offSetX*i,y+offSetY*i,diam*i);
  }

}