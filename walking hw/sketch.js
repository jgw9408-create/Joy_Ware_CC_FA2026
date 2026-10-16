
//animated sprites

let frames = []

async function setup(){
  createCanvas(windowWidth, windowHeight)
  frameRate(12)
  rectMode(CENTER)
  imageMode(CENTER)

  // let img = await loadImage("walk_cycle_png_sequence/1.png")

  // image(img, width/2,height/2)

  for(let i = 1; i<=12; i++){
    frames[i-1] = await loadImage("walk_cycle_png_sequence/" + i + ".png")
    // print("walk_cycle_png_sequence/" + i + ".png")

  }

  // print(frames)

}

let counter = 0 
let xLoc = 0
let xV = 7.5
let dir = 1



function draw() {
  drawWonderland()

  let currentFrame = frames[counter % frames.length]

  push()
  translate(xLoc, height * 0.72)
  scale(dir, 1)

  if (keyIsDown(RIGHT_ARROW)) {
    dir = 1
    xV = 7.5
  }

  if (keyIsDown(LEFT_ARROW)) {
    dir = -1
    xV = -7.5
  }

  if (currentFrame) {
    image(currentFrame, 0, 0, 100, 120)
  }

  pop()

  counter++
  xLoc += xV

  if (xLoc > width - 50) {
    xLoc = width - 50
    dir = -1
    xV = -7.5
  }

  if (xLoc < 50) {
    xLoc = 50
    dir = 1
    xV = 7.5
  }
}

function drawWonderland() {
  background(48, 34, 76)

  // Moon
  noStroke()
  fill(255, 231, 174)
  circle(width - 90, 90, 55)

  // Stars
  randomSeed(10)
  fill(255, 245, 210)

  for (let i = 0; i < 45; i++) {
    circle(random(width), random(height * 0.6), 3)
  }

  // Hills
  fill(76, 57, 112)
  ellipse(width * 0.25, height * 0.72, width, height * 0.4)

  fill(45, 94, 79)
  ellipse(width * 0.8, height * 0.78, width, height * 0.35)

  // Checkerboard floor
  let tile = 45
  let floorY = height * 0.8

  for (let x = 0; x < width; x += tile) {
    for (let y = floorY; y < height; y += tile) {
      if ((floor(x / tile) + floor(y / tile)) % 2 == 0) {
        fill(240, 220, 204)
      } else {
        fill(69, 48, 88)
      }

      rect(x + tile / 2, y + tile / 2, tile, tile)
    }
  }

  // Flowers
  drawFlower(width * 0.15, height * 0.72, 65)
  drawFlower(width * 0.85, height * 0.65, 80)
  drawFlower(width * 0.55, height * 0.77, 45)

  // Golden portal
  noFill()
  stroke(255, 204, 91)
  strokeWeight(7)
  ellipse(width - 90, height * 0.69, 65, 115)

  strokeWeight(2)
  stroke(255, 239, 172)
  ellipse(width - 90, height * 0.69, 48, 100)
}

function drawFlower(x, y, s) {
  noStroke()

  // Petals
  fill(238, 129, 178)

  for (let i = 0; i < 6; i++) {
    let angle = TWO_PI * i / 6
    let px = x + cos(angle) * s * 0.3
    let py = y + sin(angle) * s * 0.3

    circle(px, py, s * 0.48)
  }

  // Center
  fill(255, 213, 104)
  circle(x, y, s * 0.35)

  // Stem
  stroke(55, 119, 77)
  strokeWeight(5)
  line(x, y + s * 0.2, x, y + s)
}
