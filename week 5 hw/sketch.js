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



    // Black background


    background(15, 12, 25);


    // Background sparkles using noise with the t increment

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


    // The actual disco ball//

    push();

    translate(xLoc, yLoc);


    // Hatch lines inside the circumference of the disco ball

    push();

    stroke(50);
    strokeWeight(0.4);

    for (
        let y = -radius;
        y <= radius;
        y += HATCH_INTERVAL
    ) {

        // I wnat to make sure the width works well for the size of the canvas especially at this particular height

        let xWidth = sqrt(
            radius * radius - y * y
        );

        // I want the hatch line only inside the disco ball

        line(
            -xWidth,
            y,
            xWidth,
            y
        );
    }

    pop();


    // The hanging string you see connected to the disco ball

    stroke(50);
    strokeWeight(2);

    line(
        0,
        -yLoc,
        0,
        -radius
    );


    // Elipses mirror tiles show up better when you have to do the svg for the pen plotter lines 

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


    
                // The brightness of each mirror 

                let brightness =
                    noise(t + angle) * 255;


                fill(
                    brightness,
                    brightness,
                    brightness
                );

                stroke(40);
                strokeWeight(0.5);


                // where the elipses tiles show up map section as well

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


    // light rays the crossed lines 

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


    // svg export basically just want prof shouval showed in class but it makes sense 

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