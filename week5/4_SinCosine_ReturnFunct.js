let x,y,d, angle,angle2, angleSpeed, angleSpeed2,r,g,b;
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES); 

  x = width/2;
  y = height/2;

  d = 200; 
  angle = 0; 
  angle2 = 0;
  angleSpeed = 3; //adding one degree per frame
  angleSpeed2 = 20;

  r = random(0,255);
  g = random(0,255);
  b = random(0,255);

}

function draw() {
  background (20,5); 

  //calling return Function
  d = mapSin(angle,10,300);
  //d = map(sin(angle),-1,1,10,300);
  //d = map(cos(angle),-1,1,10,300);

  r = mapSin(angle,0,255);
  b = mapSin(angle2,255,0);
  //r = map(sin(angle),-1,1,0,255);
  //b = map(sin(angle),-1,1,255,0);

  fill(r,g,b);
  circle(x,y,d);

  //console.log(d);

  angle += angleSpeed;
  angle2 += angleSpeed2;

}


//Mapping Sine wave function
//return Function
function mapSin(a,val1,val2){
  let sinMap;

  sinMap = map(sin(a),-1,1,val1,val2)

  return sinMap;
}
