let x,y,d,xDir,yDir;
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
  // Set background to black
  background(255,60,100,50);

  display(7,d,r,g,b);
  

  angle += 10; 
}

///My functions

//mapping Sin function

function mapSin(a,target1,target2){
  let myMap;

  myMap = map(sin(a),-1,1,target1,target2);

  return myMap;
}

//draw my shape
function display(numShapes,diam,cr,cg,cb){
  
  for (let i = numShapes; i > 0; i--){
    let offSetX = mapSin(angle,-5,5);
    let offSetY = mapSin(angle,-7,7);
    fill(cr,cg,cb);
    stroke('yellow');
    circle(x + offSetX*i,y+offSetY*i,diam*i);
  }

}
