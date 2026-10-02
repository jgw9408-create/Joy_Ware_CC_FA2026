let wavesPerCanvas = 2;
let amplitude = 6;
let offset = 0;

let rowCount = 8; // Number of overlapping phrases

function setup() {
    createCanvas(100, 100);
    textAlign(CENTER, CENTER);
    textFont('Arial');
    textStyle(BOLD);
}

function draw() {
    background(25, 20, 30);

    // Draw "WELCOME HOME" multiple times
    for (let row = 0; row < rowCount; row++) {

        // Spread the phrases vertically
        let yBase = map(row, 0, rowCount - 1, 20, 80);

        // Slightly change the wave for every layer
        let rowOffset = offset + row * 0.35;

        drawButtonWave(
            "WELCOME HOME",
            yBase,
            rowOffset
        );
    }

    // Animate the waves
    offset += 0.03;
}


function drawButtonWave(txt, baseHeight, currentOffset) 

    let letterCount = txt.length;

    for (let i = 0; i < letterCount; i++) {

        // Spread the letters across the canvas
        let x = map(
            i,
            0,
            letterCount - 1,
            5,
            95
        );

        // Create the wave
        let mappedI = map(
            x,
            0,
            width,
            0,
            wavesPerCanvas * TWO_PI
        );

        let y =
            baseHeight +
            sin(mappedI - currentOffset) * amplitude;

        let char = txt[i];

        push();

        translate(x, y);

        // -------------------------
        // BUTTON
        // -------------------------

        // Outer button
        fill(20, 20, 20);
        stroke(60, 50, 70);
        strokeWeight(0.8);

        ellipse(0, 0, 11, 11);

        // Inner rim
        noFill();
        stroke(40, 35, 45);
        strokeWeight(0.4);

        ellipse(0, 0, 8, 8);

        // -------------------------
        // THREAD HOLES
        // -------------------------

        fill(10);
        noStroke();

        circle(-1.8, -1.8, 1);
        circle(1.8, -1.8, 1);
        circle(-1.8, 1.8, 1);
        circle(1.8, 1.8, 1);

        // -------------------------
        // X STITCHES
        // -------------------------

        stroke(70, 70, 70);
        strokeWeight(0.5);

        line(
            -1.8,
            -1.8,
            1.8,
            1.8
        );

        line(
            -1.8,
            1.8,
            1.8,
            -1.8
        );

        // -------------------------
        // LETTER
        // -------------------------

        textSize(6.5);

        // Black outline
        stroke(0);
        strokeWeight(1.5);
        fill(0);

        text(char, 0, 0);

        // Yellow letter
        noStroke();
        fill(255, 235, 120);