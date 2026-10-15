
let xLoc = [];
let yLoc = [];
let numSegments = 100;

let layer1;
let layer2;

let counter = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);

    for (let i = 0; i < numSegments; i++) {
        xLoc[i] = width / 2;
        yLoc[i] = height / 2;
    }

    layer1 = createGraphics(width, height);
    layer2 = createGraphics(width, height);
}

function draw() {
    background(12, 3, 12);

    // Layer 2: pink polka-dot background
    layer2.clear();
    layer2.noStroke();

    let rows = 9;
    let cols = 15;
    let spacingX = width / cols;
    let spacingY = height / rows;

    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            let dotX = x * spacingX + spacingX / 2
                + (y % 2) * spacingX / 2;
            let dotY = y * spacingY + spacingY / 2;

            let flicker = sin(
                frameCount * 0.08 + x * 1.7 + y * 2.3
            );

            let pulse = map(flicker, -1, 1, 60, 255);

            let distanceToMouse = dist(
                mouseX, mouseY, dotX, dotY
            );

            let spotlight = map(
                distanceToMouse, 0, 250, 255, 20
            );

            spotlight = constrain(spotlight, 20, 255);
            let glow = max(pulse, spotlight);

            if ((x + y) % 3 == 0) {
                layer2.fill(255, 45, 155, glow);
            } else if ((x + y) % 3 == 1) {
                layer2.fill(255, 145, 205, glow);
            } else {
                layer2.fill(180, 25, 100, glow);
            }

            let size = 10 + map(flicker, -1, 1, 2, 8);

            layer2.circle(dotX, dotY, size);
        }
    }

    // Layer 1: autonomous plaid worm
    layer1.clear();

    let headX = width * noise(counter);
    let headY = height * noise(counter + 10);

    xLoc[numSegments - 1] = headX;
    yLoc[numSegments - 1] = headY;

    for (let i = 0; i < numSegments - 1; i++) {
        xLoc[i] = xLoc[i + 1];
        yLoc[i] = yLoc[i + 1];

        let diameter = 90 * sin(
            map(i, 0, numSegments - 1, 0, PI)
        );

        if (diameter < 2) continue;

        let x = xLoc[i];
        let y = yLoc[i];

        if (floor(i / 8) % 2 == 0) {
            layer1.fill(255, 45, 155);
        } else {
            layer1.fill(255);
        }

        layer1.stroke(255, 130, 210);
        layer1.strokeWeight(1.5);
        layer1.ellipse(x, y, diameter);

        // Plaid stripes
        layer1.push();
        layer1.translate(x, y);

        let drift = sin(
            frameCount * 0.005 + i * 0.08
        ) * 2;

        layer1.rotate(drift * 0.015);

        if (floor(i / 8) % 2 == 0) {
            layer1.stroke(255);
        } else {
            layer1.stroke(255, 45, 155);
        }

        layer1.strokeWeight(1.5);

        for (let a = -diameter / 2; a <= diameter / 2; a += 10) {
            let len = sqrt(
                max(0, diameter * diameter / 4 - a * a)
            );

            layer1.line(a + drift, -len, a + drift, len);
        }

        for (let b = -diameter / 2; b <= diameter / 2; b += 12) {
            let len = sqrt(
                max(0, diameter * diameter / 4 - b * b)
            );

            layer1.line(-len, b, len, b);
        }

        layer1.pop();
    }

    // Combine both layers
    image(layer2, 0, 0, width, height);
    image(layer1, 0, 0, width, height);

    counter += 0.003;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

    layer1 = createGraphics(width, height);
    layer2 = createGraphics(width, height);
}
