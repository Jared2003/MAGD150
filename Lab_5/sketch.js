var x;
var y ;
let circleColor, rectColor;

function setup() {
  createCanvas(500, 500);
circleColor= color(40, 40, 255);
rectColor= color(40, 200, 40);
}

function draw() {
  background(220);
  fill(255);
  
 fill(circleColor)
 ellipse(400, 100, 100, 100);
  push();
  fill(0);
  let l = "blue"
  text(l, 390, 100);
  
     if((dist(mouseX, mouseY, 400,100)) < 70){
      circleColor=color(0 ,0,255);
    } else{
      circleColor=color(40, 40, 255);
    }
  
  
  fill(rectColor);
  rect(100, 50, 150, 80);
  push();
  fill(0 , 0, 0);
  let s = "green"
  text(s, 150, 90);

  if(mouseX>100 && mouseX <100+150 && mouseY>50 &&mouseY <50+80){
    rectColor=color(0,255,0);
    
  } else {
    rectColor = color(40,200,40);
  }
  
  fill(255);
  if (mouseIsPressed){
   
  }
  
  if (mouseIsPressed){
     if((dist(mouseX, mouseY, 400,100)) < 70){
     fill(0,0,255);
     }
  }
  
  
  rect(50, 250, 400, 200);
}