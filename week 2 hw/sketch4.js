function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
}

function draw() {
}

function mouseDragged() {
  // Original logic with subtle tweaks:
  // 1. Color changes slightly as you move across the screen
  stroke(mouseX % 255, mouseY % 255, 200); 
  
  // 2. Line gets slightly thicker or thinner depending on vertical movement
  strokeWeight(map(mouseY, 1, height, 2, 20));
  
  line(pmouseX, pmouseY, mouseX, mouseY);
}

function mousePressed() {
  // Keeps your original clearing feature when clicked
  background(100);
}

function keyPressed() {
  background(100);
}