function setup() {
  createCanvas(720, 720);
  noCursor();
  colorMode(HSB, 360, 100, 100);
  rectMode(CENTER);
  noStroke();
  textAlign(CENTER, CENTER);
}

function draw() {

  // BREATHING


  let breath = sin(frameCount * 0.01);

  // this actually ontrols how big the square gets//
  let size = map(breath, -1, 1, 100, 500);



  let hue = map(breath, -1, 1, 180, 300);

  background(hue, 30, 95);

  fill(hue, 100, 100);

  rect(360, 360, 300, size);

//figuring out//

  fill(0, 0, 100);

  textSize(20);

  if (breath > 0) {
    text("INHALE", 360, 360);
  } else {
    text("EXHALE", 360, 360);
  }
}


function keyPressed() {
  if (key == 's' || key == 'S') {
    saveCanvas(gd.timestamp(), 'png');
  }
}