// VARIABLES
// A variable is a labeled box that holds a value. Every variable here
// is assigned once, inside setup, and draw just keeps redrawing the
// same shape from those values. No movement yet, that is next.

let x, y, d;

function setup() {
  createCanvas(400, 400);

  x = width / 2;
  y = height / 2;
  d = 150;
}

function draw() {
  background(220);
  fill(176, 80, 31);
  circle(x, y, d);
}
