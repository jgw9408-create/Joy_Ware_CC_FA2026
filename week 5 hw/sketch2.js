let bDoExportSvg = false;
let exportCount = 0;

p5.disableFriendlyErrors = true;

function setup() {
    createCanvas(6 * 96, 4 * 96);
    ellipseMode(CENTER);

    setSvgCoordinatePrecision(4);
    setSvgIndent(SVG_INDENT_SPACES, 2);
    setSvgDefaultStrokeColor('black');
    setSvgDefaultStrokeWeight(1);
}

//happy halloween ass pumpkin
function draw() {

    if (bDoExportSvg) {
        beginRecordSvg(this, "coraline-pumpkin.svg");
    }

    background(245);

    push();
    translate(width / 2, height / 2 + 20);

    // Pumpkin
    fill(45);
    stroke(0);
    strokeWeight(2);

    ellipse(-55, 0, 75, 110);
    ellipse(-28, 0, 85, 130);
    ellipse(5, 0, 90, 140);
    ellipse(38, 0, 85, 130);
    ellipse(65, 0, 70, 105);

    // Stem
    fill(30);
    ellipse(5, -72, 20, 35);

    // Button eyes
    fill(245);
    ellipse(-30, -20, 25, 32);
    ellipse(30, -20, 25, 32);

    fill(0);
    ellipse(-34, -25, 4, 5);
    ellipse(-26, -15, 4, 5);
    ellipse(26, -25, 4, 5);
    ellipse(34, -15, 4, 5);

    // Mouth
    noFill();
    stroke(0);
    strokeWeight(4);
    ellipse(0, 25, 65, 30);

    // Teeth
    fill(245);
    strokeWeight(1);
    ellipse(-22, 20, 8, 13);
    ellipse(-7, 27, 8, 13);
    ellipse(8, 27, 8, 13);
    ellipse(23, 20, 8, 13);

    // Hatch marks
stroke(0);
strokeWeight(1);

for (let x = -65; x <= 65; x += 10) {
    for (let y = -45; y <= 45; y += 12) {
        push();
        translate(x, y);
        rotate(radians(-15 + x * 0.15));
        line(-2, 0, 2, 0);
        pop();
    }
}


    pop();

    if (bDoExportSvg) {
        endRecordSvg();
        bDoExportSvg = false;
        exportCount++;
    }
}

function keyPressed() {
    if (key == 's') {
        bDoExportSvg = true;
    }
}