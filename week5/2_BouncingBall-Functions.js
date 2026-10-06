
let x, y, d, xDir, yDir,speed,r,g,b; 

function setup() {
  createCanvas(windowWidth, windowHeight);

  x = random(width); 
  y = random(height);
  d = random(30,100);

  xDir = random(-2,2); 
  yDir = random(-2,2);

  speed = random(1,10);

  r = 155;
  g = 255;
  b = 200;

}

function draw() {
background(0);

fill(r,g,b);
circle (x,y,d);

y += yDir*10;
x += xDir*10;

//call the function
keepInCanvas();


}


//// --------- My Functions --------//////
// Declare the function
function keepInCanvas(){

  //keepInCanvas
  if((x>width)||(x<0))
  {
    //call the function randomColor()
    randomColor();
   xDir = -xDir;
  }
  if((y>height)||(y<0))
  {
    randomColor(); // note how I am calling the function again here - reusable block of code
    yDir = -yDir;
  }
}

//Declare the Function randomColor();
function randomColor(){
  r = random(0,255);
  g = random(0,255);
  b = random(0,255);
}