class mover{
// mover is an object made of a repeated shape with an offset.
// it can move around the canvas, bounce against the walls, and have a customizable size.
    //constructor is like the setup function
    constructor(){

        this.r = random(0,100);
        this.g = random(200,255);
        this.b = random(100,255);

        this.x = random(width);
        this.y = random(height);

        this.xDir = random(-2,2);
        this.yDir = random(-2,2);

        this.offSetX = random(-5,5);
        this.offSetY = random(-5,5);

    }

    // no need to type function, this is called a method
    display(numShapes,diam){
        for (let i = numShapes; i > 0; i--){
            fill(this.r,this.g,this.b);
            stroke('yellow');
            circle(this.x + this.offSetX*i,this.y+this.offSetY*i,diam*i);
        }
    }
    update(){
        this.x += this.xDir;
        this.y += this.yDir;
    }
    keepInCanvas(){
        if((this.x > width)||(this.x < 0)){
            this.xDir = -this.xDir;
        }
        if((this.y > height)||(this.y < 0)){
            this.yDir *= -1; // same as this.yDir = -this.yDir, just written differently
        }
    }
}