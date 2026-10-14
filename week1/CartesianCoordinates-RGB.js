function setup() {
  createCanvas(400, 400); // create a canvas 400 pixels wide and 400 pixels tall
  // The canvas is where we make our drawings, your blank space to create on
  // setup() runs only once, on the first frame. You create the canvas only once.
}

function draw() {
  background(20); // with one value, like 220, the color is a grayscale value
  // draw() repeats itself every frame

  fill(255,100,10); // if no fill color is changed, all shapes after this will use it
  // Color setup always happens before the shape
  rect(200,100,100,30); // rectangle pivot point is the top-left corner by default
  circle(200,100,20); // circle pivot point is at the center of the shape

  // A line doesn't have a fill color because it is only a line, so changing its color needs its own command
  stroke(220,255,10); // if no stroke color is assigned, other shapes will use this color for their outline
  // This happens even if the stroke is set after the previous shapes, because draw() is a loop
  line(0,height,width,0); // line takes 4 values: start x, start y, end x, end y
}