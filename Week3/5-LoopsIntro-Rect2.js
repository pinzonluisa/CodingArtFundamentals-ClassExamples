let sizeW, sizeH, numShapes, x, y;
function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);

  numShapes = 20;
  sizeW = width/numShapes;
  sizeH = height/numShapes;
  x = width/2;
  y = height/2;

}

function draw() {
background(0);

// draw numShapes squares, same center, shrinking each time, largest first so they layer correctly
for (let i = numShapes; i > 0; i--)
{
  //print(i);
  fill('orange');
  strokeWeight(3);
  rect(x,y,sizeW*i,sizeH*i);

}
  sizeW ++;
  sizeH ++;

  // once the squares grow past the canvas, reset and start shrinking from 0 again
  if (sizeW > width){
    sizeW = 0;
    sizeH = 0;
  }
  if(sizeH > height){

    sizeH = 0;
    sizeW = 0;
  }

}