let x, y;
let diameter = 200
let yV = 8, xV = 2

function setup(){
    createCanvas(windowWidth,windowHeight);

    stroke(255)
    y = diameter/2
    x = width/2

}
function draw(){
  //background(100)

  let r = map(y,diameter/2, height-diameter/2, 0,255)
  let b = map(x,diameter/2, width-diameter/2, 0,255)
  let g = map(x,diameter/2, width-diameter/2, 255,0)
strokeWeight(4)
 rectMode(CENTER)
  fill(r,g,b,200)
  rect(x, y, diameter, diameter);

  x += xV
  y += yV

  if(y > height - diameter/2){
    yV = -yV;
  }
  if(y < diameter/2 ){
    yV = -yV;
  }
  if(x>width- diameter/2){
    xV = -xV
  }
  if(x < diameter/2){
    xV = -xV
  }
  print(y)

 
}