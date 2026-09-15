// PUTTING IT ALL TOGETHER
// Variables, setup and draw, and an if/else. No loops this week,
// loops move to Week 3 alongside arrays.

let x, y, d;

function setup() {
  createCanvas(400, 400);

  x = 0;          // assigned once, inside setup
  y = height / 2;
  d = 40;
}

function draw() {
  background(220);

  // the variable updates a little every frame, using a shortcut
  x += 2;

  // once x runs off the right edge, send it back to the left
  if (x > width) {
    x = 0;
  }

  // the if/else decides the color, based on which half of the canvas x is in
  if (x < width / 2) {
    fill('orange');
  } else {
    fill('yellow');
  }

  circle(x, y, d);
}
