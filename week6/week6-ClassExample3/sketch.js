let movers=[];
let randShape=[];
let randSize=[];
let numMovers = 100;

function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(windowWidth, windowHeight);

  // build an array of movers, each with its own random shape count and size
  for (let i = 0; i < numMovers; i++){
    movers.push(new mover());
    randShape.push(random(2,10));
    randSize.push(random(5,20));
  }
}

function draw() {
  // background color, not black: R=255, G=60, B=100, with a low alpha
  background(255,60,100,10);

  for(let i = 0; i < numMovers; i++){

    movers[i].display(randShape[i],randSize[i]);
    movers[i].update();
    movers[i].keepInCanvas();

  }

}