let posX, posY;
let speedX, speedY;
let gravity;
let OnGround;
let jumpSize=-30;

function setup() {
  createCanvas(400, 400);
  posX=25;
  posY=350;
  speedX=4;
  speedY=0;
  gravity=1.8;
  onGround=true;
}

function draw() {
  background(0);
  pacman();
  movement();
  fill(16,69,219);
  rect(250, 380, 20, 20);
}

function pacman(){
  push();
  fill(239, 252, 48);
  arc(posX,posY,100,100,PI/4, 7*PI/4,PIE);
  pop();
}

function movement(){
  speedY = gravity + speedY;
  posY= speedY + posY;
 
  if ((posY) >= 350){
    posY= 350;
    onGround = true;
  } else {
    onGround = false;
  }

 
  posX+=speedX;
}

function mousePressed(){
  if (onGround){
    jump();
  }
}

function jump(){
  speedY = jumpSize;
}

function rectangle(){
  fill(16,69,219);
  rect(100, 100, 100, 100);
}
