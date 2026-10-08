let radius = 190;
let offset = 0;
let yLoc, xLoc;

let t = 0;

// Hatch settings
let HATCH_INTERVAL = 5;

let bDoExportSvg = false;

p5.disableFriendlyErrors = true;


function setup() {

    createCanvas(500, 500);

    xLoc = width / 2;
    yLoc = height / 2;

    ellipseMode(CENTER);
}


function draw() {

    if (bDoExportSvg) {
        beginRecordSvg(this, "disco-ball.svg");
    }


    // Background 

    background(15, 12, 25);


    // Background sparkles

    let n = noise(t) * 355;

    noStroke();
    fill(n);

    for (let i = 0; i < 8; i++) {

        circle(
            random(width),
            random(height),
            1
        );
    }


    // The Actual Disco Ball//

    push();

    translate(xLoc, yLoc);


    // Hatch Lines inside the disco ball

    push();

    stroke(50);
    strokeWeight(0.4);

    for (
        let y = -radius;
        y <= radius;
        y += HATCH_INTERVAL
    ) {

        let xWidth = sqrt(
            radius * radius - y * y
        );

        line(
            -xWidth,
            y,
            xWidth,
            y
        );
    }

    pop();


    // Hanging String 

    stroke(80);
    strokeWeight(1);

    line(
        0,
        -yLoc,
        0,
        -radius
    );


    // Mirror Tiles 

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


                // Brightness of each mirrow 

                let brightness =
                    noise(t + angle) * 255;


                fill(
                    brightness,
                    brightness,
                    brightness
                );

                stroke(40);
                strokeWeight(0.5);


                // Ellipse Mirror Tile 

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


    // Light rays emittting 

    for (let r = 0; r < 6; r++) {

        let rayAngle =
            offset * 2 +
            r * TWO_PI / 6;

        let rx = cos(rayAngle) * radius;
        let ry = sin(rayAngle) * radius;


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


    // Animate 

    offset += 0.03;

    t += 0.01;


    // sv export

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