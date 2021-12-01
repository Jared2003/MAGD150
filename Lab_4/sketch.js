

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  let eps = ellipse;
 
  
  fill(random(255), random(255), random(255));
  eps(mouseX, mouseY, 10, 10);
  
    if(mouseIsPressed){
       let eps = ellipse;
      fill(255, 235, 220)
  eps(200, 200, 150, 150);
    fill(255, 0, 0);
    eps(230, 230, 10, 10);
    eps(160, 215, 15, 15);
    eps(170, 180, 12, 12);
    eps(220, 160, 13, 13);
    eps(205, 210, 15, 15);
    eps(180, 240, 14, 14);
    
  } else {
    fill(255, 235, 220)
 eps(400, 200, 200, 200);
  fill(255, 0, 50);
  eps(366, 175, 30, 30);
  eps(450, 138, 25, 26);
  eps(350, 255, 30, 31);
  eps(437, 250, 30, 30);
  eps(415, 210, 20, 20);
  }
  
  if (keyIsPressed === true){
  fill(255, 235, 220);
  ellipse(300, 470, 250, 250);
    fill(255 ,0 ,0);
    eps(320, 560, 30, 30);
    eps(265, 430, 20, 20);
    eps(380, 430, 15, 15);
    eps(280, 490, 16, 17);
    eps(190, 460, 25, 24);
    eps(300, 400, 25, 25);
    eps(230, 410, 25, 25);
    eps(213, 490, 25, 25);
    eps(300+20, 475, 25, 25);
  }
  


  
}