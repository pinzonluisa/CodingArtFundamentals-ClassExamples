let x,y,d, angle, angleSpeed,r,g,b;
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES); 

  x = width/2;
  y = height/2;

  d = 200; 
  angle = 0; 
  angleSpeed = 3; //adding one degree per frame

  r = random(0,255);
  g = random(0,255);
  b = random(0,255);

}

function draw() {
  background (20,5); 

  d = map(sin(angle),-1,1,10,300);
  //d = map(cos(angle),-1,1,10,300);

  r = map(sin(angle),-1,1,0,255);
  b = map(sin(angle),-1,1,255,0);

  fill(r,g,b);
  circle(x,y,d);

  //console.log(d);

  angle += angleSpeed;

}
