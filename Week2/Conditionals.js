// CONDITIONALS: IF AND ELSE
// An if/else lets the code make a choice: run one block when something
// is true, and a different block otherwise.

let x, y, boxSize;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);

  x = width / 2;
  y = height / 2;
  boxSize = 150;
}

function draw() {
  background(220);

  let overBox =
    mouseX > x - boxSize / 2 &&
    mouseX < x + boxSize / 2 &&
    mouseY > y - boxSize / 2 &&
    mouseY < y + boxSize / 2;

  if (overBox) {
    fill('yellow');
  } else {
    fill('orange');
  }

  rect(x, y, boxSize, boxSize);
}
