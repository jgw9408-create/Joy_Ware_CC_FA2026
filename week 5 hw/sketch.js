
let t = 0;
let catAlpha = 255;

let bDoExportSvg = false;

p5.disableFriendlyErrors = true;

function setup() {
    createCanvas(600, 600);
}

function draw() {

    if (bDoExportSvg) {
        beginRecordSvg(this, "wybiescat.svg");
    }

    background(15, 12, 25);

    // Mouse makes the cat fade
    let d = dist(mouseX, mouseY, 300, 350);

    let targetAlpha = map(d, 0, 180, 0, 255);
    targetAlpha = constrain(targetAlpha, 0, 255);

    catAlpha = lerp(catAlpha, targetAlpha, 0.08);

    stroke(255, catAlpha);
    strokeWeight(1.5);
    noFill();

    // cat body//

    for (let y = 220; y < 500; y += 7) {

        let left = 300;
        let right = 300;

        // Head
        if (y >= 220 && y < 330) {

            let w = 85 * sin(
                map(y, 220, 330, 0, PI)
            );

            left = 300 - w;
            right = 300 + w;
        }

        // Body
        else {

            let w = 75 * sin(
                map(y, 330, 500, 0, PI)
            );

            left = 300 - w;
            right = 300 + w;
        }

        // Sine wave
        beginShape();

        for (let x = left; x <= right; x += 2) {

            let wave =
                sin(x * 0.08 + t) * 4;

            vertex(x, y + wave);
        }

        endShape();
    }


    // left ear of Pipo cat//

    for (let y = 160; y < 250; y += 7) {

        let amount = map(y, 160, 250, 0, 1);

        let left = 235 - amount * 35;
        let right = 235 + amount * 35;

        drawWave(left, right, y);
    }


    // right ear of the Pipo the cat

    for (let y = 160; y < 250; y += 7) {

        let amount = map(y, 160, 250, 0, 1);

        let left = 365 - amount * 35;
        let right = 365 + amount * 35;

        drawWave(left, right, y);
    }


    // wybey's cat tail

    for (let i = 0; i < 35; i++) {

        let y = 400 + i * 4;

        let centerX =
            375 + sin(i * 0.15) * 80;

        let width = 22;

        drawWave(
            centerX - width,
            centerX + width,
            y
        );
    }


    // Animate waves
    t += 0.04;


    // Finish SVG export AFTER everything has been drawn
    if (bDoExportSvg) {
        endRecordSvg();
        bDoExportSvg = false;
    }
}


// sine wave//

function drawWave(left, right, y) {

    beginShape();

    for (let x = left; x <= right; x += 2) {

        let wave =
            sin(x * 0.08 + t) * 4;

        vertex(x, y + wave);
    }

    endShape();
}


function keyPressed() {

    if (key == 's') {
        bDoExportSvg = true;
    }
}
