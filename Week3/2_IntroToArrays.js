let posX = [200,50,100,80];
let posY = [150,30,200,300];
let d = [20,40,100,60];
let myColor = ['#02ACE0','#A1652A','#E07003','#30768B'];


function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(windowWidth, windowHeight);

}

function draw() {
background(0);

//circle at 0
  stroke('white');
  fill(myColor[0]);
  circle(posX[0],posY[0],d[0]);

//circle at 1
  stroke('white');
  fill(myColor[1]);
  circle(posX[1],posY[1],d[1]);

//circle at 2
  stroke('white');
  fill(myColor[2]);
  circle(posX[2],posY[2],d[2]);

//circle at 3
  stroke('white');
  fill(myColor[3]);
  circle(posX[3],posY[3],d[3]);

}
