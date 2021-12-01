class leaf{
  constructor(){
    var centerX, centerY, offset1, offset2;
    this.centerX = random(0, width);
    this.centerY = random(0, height);
    this.offset1 = 15;
    this.offset2 = 15;
  }
  move(){ //this alowes for the leafe to move left and right as well as fall down
    this.centerX += round(random(-1, 1));
    this.centerY -= -1;
    this.offset1 = 15;
    this.offset2 = 15;
  }
  draw(){ // this is the leafe itself and it can be copied tomake another new leafe
    rectMode(CENTER);
    fill(255, 135, 31);
    ellipse(this.centerX, this.centerY, 50, 100);
    fill(255);
    line(this.centerX+this.offset1-15, this.centerY+this.offset2-80, this.centerX, this.centerY+50);
    
  }
}

let leaf1;
let leaf2;
let leaf3;
let leaf4;
let leaf5;

function setup() { // creates new leafes 
  createCanvas(800, 800);
  leaf1 = new leaf();
  leaf2 = new leaf();
  leaf3 = new leaf();
  leaf4 = new leaf();
  leaf5 = new leaf();
  
}

function draw(){ // allowes all the new leafes that were created to be drawn and move
  background(255);
  leaf1.move();
  leaf1.draw();
  leaf2.move();
  leaf2.draw();
  leaf3.move();
  leaf3.draw();
  leaf4.move();
  leaf4.draw();
  leaf5.move();
  leaf5.draw();
  
}



