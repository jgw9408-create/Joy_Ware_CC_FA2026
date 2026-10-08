let wavesPerCanvas = 2;
let amplitude = 12;
let offset = 0;
let rowCount = 8;

let bDoExportSvg = false;

p5.disableFriendlyErrors = true;


function setup() {
    createCanvas(500, 500);

    textAlign(CENTER, CENTER);
    textFont('Arial');
    textStyle(BOLD);

    ellipseMode(CENTER);
}


function draw() {

    if (bDoExportSvg) {
        beginRecordSvg(this, "welcome-home.svg");
    }

    background(25, 20, 30);

    for (let row = 0; row < rowCount; row++) {

        let yBase = map(row, 0, rowCount - 1, 40, 460);
        let rowOffset = offset + row * 0.35;

        drawButtonWave(
            "WELCOME HOME",
            yBase,
            rowOffset
        );
    }

    offset += 0.03;


    if (bDoExportSvg) {
        endRecordSvg();
        bDoExportSvg = false;
    }
}


// Coraline-inspired buttons behind the letters
function drawButtonWave(txt, baseHeight, currentOffset) {

    let letterCount = txt.length;

    for (let i = 0; i < letterCount; i++) {

        let x = map(
            i,
            0,
            letterCount - 1,
            35,
            465
        );

        let mappedI = map(
            x,
            0,
            width,
            0,
            wavesPerCanvas * TWO_PI
        );

        let y =
            baseHeight +
            sin(mappedI - currentOffset) *
            amplitude;


        push();

        translate(x, y);


        // Button Base
        fill(20);
        stroke(60, 50, 70);
        strokeWeight(0.8);

        ellipse(0, 0, 42, 42);


        // Inner Button Rim
        noFill();
        stroke(40, 35, 45);
        strokeWeight(0.4);

        ellipse(0, 0, 30, 30);


        // Button Holes
        fill(10);
        noStroke();

        ellipse(-6, -6, 4, 4);
        ellipse(6, -6, 4, 4);
        ellipse(-6, 6, 4, 4);
        ellipse(6, 6, 4, 4);


        // Thread
        stroke(70);
        strokeWeight(1);

        line(-6, -6, 6, 6);
        line(-6, 6, 6, -6);


        // Letter
        textSize(30);

        stroke(0);
        strokeWeight(1.5);
        fill(0);

        text(txt[i], 0, 0);

        noStroke();
        fill(255, 235, 120);

        text(txt[i], 0, 0);

        pop();
    }
}


function keyPressed() {

    if (key == 's') {
        bDoExportSvg = true;
    }
}
