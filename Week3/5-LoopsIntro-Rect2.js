let sizeW, sizeH, numShapes; 
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

for (i = numShapes; i > 0; i--)
{
  //print(i);
  fill('orange'); 
  strokeWeight(3);
  rect(x,y,sizeW*i,sizeH*i);
  
}
  sizeW ++;
  sizeH ++;

  if (sizeW > width){
    sizeW = 0;
    sizeH = 0;
  }
  if(sizeH > height){

    sizeH = 0;
    sizeW = 0;
  } 

}
