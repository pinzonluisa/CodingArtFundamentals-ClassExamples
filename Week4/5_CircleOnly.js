//size unit, used for scaling shapes
let unitW, unitH;

//global variable for rotation
let angle3;
let rotSpeed3;

//colorPalette
let colorPal = ['#D73220','#F9ECE5','#68150A','#0B78B3','#1F0062'];
let randCol1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  angle3 = 0;
  rotSpeed3 = random(-1,3);

  unitW = width/8;
  unitH = height/8;

  randCol1 = floor(random(0, colorPal.length));
}

function draw() {
  background(0);

  push();
  translate(width/2,height/2);

  let circSize = unitH*3;
  stroke(colorPal[randCol1]);
  circle(0,0,circSize);
  rotate(angle3);
  line(0,0,circSize/2,0);
  pop();

  angle3 += rotSpeed3;
}
