var ring;  
 
function setup() {
  createCanvas(400, 400, WEBGL);
  noStroke();
 
}

function draw() {
  background(100);
  
  ambientLight(40);
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  pointLight(225, 225, 225, locX, locY, 200)
  specularMaterial(250);
  shininess(150);
 
  torus(130, 45, 164, 164);
  
  let x = map(mouseX, 0, width, -200, 0);
  camera(x, 0, (height / 2) / tan(PI / 6), 0, 0, 0, 0, 1, 0);
  
  
  
}
