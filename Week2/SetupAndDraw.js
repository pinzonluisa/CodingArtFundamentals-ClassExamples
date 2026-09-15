// SETUP AND DRAW
// setup() runs once, right when the sketch starts.
// draw() runs again and again, very fast, for as long as the sketch stays open.
// A variable that gets updated inside draw() is what makes something move.

let x, y, d;

function setup() {
  createCanvas(400, 400);

  x = 0;          // starting value, assigned once, inside setup
  y = height / 2;
  d = 40;
}

function draw() {
  background(220);

  // this line runs every single frame
  // x += 2 is shorthand for x = x + 2 (x++ is the same shortcut, for adding exactly 1)
  x += 2;

  fill(176, 80, 31);
  circle(x, y, d);
}
