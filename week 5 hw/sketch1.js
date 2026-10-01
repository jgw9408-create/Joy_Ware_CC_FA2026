let wavesPerCanvas = 2;
let amplitude = 6;
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

        let yBase = map(row, 0, rowCount - 1, 20, 80);
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

//Coraline-inspired Buttons that are in the background of the letters///
function drawButtonWave(txt, baseHeight, currentOffset) {

    let letterCount = txt.length;

    for (let i = 0; i < letterCount; i++) {

        let x = map(
            i,
            0,
            letterCount - 1,
            5,
            95
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


        // BUTTON
        fill(20);
        stroke(60, 50, 70);
        strokeWeight(0.8);

        ellipse(0, 0, 11, 11);


        // INNER BUTTON
        noFill();
        stroke(40, 35, 45);
        strokeWeight(0.4);

        ellipse(0, 0, 8, 8);


        // BUTTON HOLES
        fill(10);
        noStroke();

        ellipse(-1.8, -1.8, 1, 1);
        ellipse(1.8, -1.8, 1, 1);
        ellipse(-1.8, 1.8, 1, 1);
        ellipse(1.8, 1.8, 1, 1);


        // THREAD
        stroke(70);
        strokeWeight(0.5);

        line(-1.8, -1.8, 1.8, 1.8);
        line(-1.8, 1.8, 1.8, -1.8);


        // LETTER
        textSize(6.5);

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