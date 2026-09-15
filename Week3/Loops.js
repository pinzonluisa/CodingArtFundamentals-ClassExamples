// LOOPS: FOR
// A for loop repeats a block of code a set number of times, without
// writing that same line over and over.

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  for (let i = 0; i < 10; i++) {
    fill('orange');
    circle(40 * i + 20, 200, 30);
  }
}
