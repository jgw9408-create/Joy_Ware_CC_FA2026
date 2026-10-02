let radius = 35;
let offset = 0;
let yLoc, xLoc;

let t = 0;

// Hatch settings
let HATCH_INTERVAL = 5;

let bDoExportSvg = false;

p5.disableFriendlyErrors = true;


function setup() {

    createCanvas(100, 100);

    xLoc = width / 2;
    yLoc = height / 2;

    ellipseMode(CENTER);
}


function draw() {

    if (bDoExportSvg) {
        beginRecordSvg(this, "disco-ball.svg");
    }


    // ======================================
    // BACKGROUND
    // ======================================

    background(15, 12, 25);


    // Background sparkles

    let n = noise(t) * 255;

    noStroke();
    fill(n);

    for (let i = 0; i < 8; i++) {

        circle(
            random(width),
            random(height),
            1
        );
    }


    // ======================================
    // THE ACTUAL DISCO BALL
    // ======================================

    push();

    translate(xLoc, yLoc);


    // ======================================
    // HATCH LINES INSIDE DISCO BALL
    // ======================================

    push();

    stroke(50);
    strokeWeight(0.4);

    for (
        let y = -radius;
        y <= radius;
        y += HATCH_INTERVAL
    ) {

        // Calculate how wide the circle is
        // at this particular height

        let xWidth = sqrt(
            radius * radius - y * y
        );

        // Draw the hatch line only
        // inside the disco ball

        line(
            -xWidth,
            y,
            xWidth,
            y
        );
    }

    pop();


    // ======================================
    // HANGING STRING
    // ======================================

    stroke(80);
    strokeWeight(1);

    line(
        0,
        -yLoc,
        0,
        -radius
    );


    // ======================================
    // MIRROR TILES
    // ======================================

    for (
        let lat = -PI / 2;
        lat <= PI / 2;
        lat += PI / 10
    ) {

        let ringY = sin(lat) * radius;
        let ringRadius = cos(lat) * radius;


        for (
            let lon = 0;
            lon < TWO_PI;
            lon += PI / 10
        ) {

            let angle = lon + offset;

            let x = cos(angle) * ringRadius;
            let z = sin(angle) * ringRadius;


            // Only show the front half

            if (z > 0) {

                push();

                translate(x, ringY);


                // ======================================
                // BRIGHTNESS OF EACH MIRROR
                // ======================================

                let brightness =
                    noise(t + angle) * 255;


                fill(
                    brightness,
                    brightness,
                    brightness
                );

                stroke(40);
                strokeWeight(0.5);


                // ======================================
                // ELLIPSE MIRROR TILE
                // ======================================

                let tileWidth = map(
                    z,
                    0,
                    radius,
                    2,
                    7
                );


                ellipse(
                    0,
                    0,
                    tileWidth,
                    4
                );


                pop();
            }
        }
    }


    // ======================================
    // LIGHT RAYS
    // ======================================

    for (let r = 0; r < 6; r++) {

        let rayAngle =
            offset * 2 +
            r * TWO_PI / 6;

        let rx = cos(rayAngle) * 35;
        let ry = sin(rayAngle) * 35;


        stroke(180);
        strokeWeight(0.7);

        line(
            0,
            0,
            rx,
            ry
        );
    }


    pop();


    // Animation//

    offset += 0.03;

    t += 0.01;


    // ======================================
    // SVG EXPORT
    // ======================================

    if (bDoExportSvg) {

        endRecordSvg();

        bDoExportSvg = false;
    }

}


function keyPressed() {

    if (key == 's') {

        bDoExportSvg = true;
    }
}