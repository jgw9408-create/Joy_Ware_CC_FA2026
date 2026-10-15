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

    // Pink polka dot background
    layer2.clear();
    layer2.noStroke();

    let rows = 9;
    let cols = 15;
    let spacingX = width / cols;
    let spacingY = height / rows;

    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            let dotX = x * spacingX + spacingX / 2;
            let dotY = y * spacingY + spacingY / 2;

            if (y % 2 == 1) {
                dotX += spacingX / 2;
            }

            let flicker = sin(frameCount * 0.08 + x * 1.7 + y * 2.3);
            let pulse = map(flicker, -1, 1, 60, 255);

            let distanceToMouse = dist(mouseX, mouseY, dotX, dotY);
            let spotlight = map(distanceToMouse, 0, 250, 255, 20);
            spotlight = constrain(spotlight, 20, 255);

            let glow = max(pulse, spotlight);
            let dotSize = 10 + map(flicker, -1, 1, 2, 8);

            if ((x + y) % 3 == 0) {
                layer2.fill(255, 45, 155, glow);
            } else if ((x + y) % 3 == 1) {
                layer2.fill(255, 145, 205, glow);
            } else {
                layer2.fill(180, 25, 100, glow);
            }

            layer2.circle(dotX, dotY, dotSize);
        }
    }

    // Flowing plaid worm
    layer1.clear();

    let headX = map(noise(counter), 0, 1, width * 0.1, width * 0.9);
    let headY = map(noise(counter + 100), 0, 1, height * 0.1, height * 0.9);

    xLoc[numSegments - 1] = headX;
    yLoc[numSegments - 1] = headY;

    for (let i = 0; i < numSegments - 1; i++) {
        xLoc[i] = xLoc[i + 1];
        yLoc[i] = yLoc[i + 1];
    }

    for (let i = 0; i < numSegments; i++) {
        let diameter = 65 * sin(map(i, 0, numSegments - 1, 0, PI));

        if (diameter < 1) {
            continue;
        }

        let pinkBand = floor(i / 8) % 2 == 0;

        if (pinkBand) {
            layer1.fill(255, 45, 155);
            layer1.stroke(255, 190, 225);
        } else {
            layer1.fill(255);
            layer1.stroke(255, 45, 155);
        }

        layer1.strokeWeight(1);
        layer1.ellipse(xLoc[i], yLoc[i], diameter, diameter);

        // Plaid pattern
        layer1.push();
        layer1.translate(xLoc[i], yLoc[i]);

        let drift = sin(frameCount * 0.01 + i * 0.08) * 0.5;
        layer1.rotate(drift);

        layer1.strokeWeight(1);

        if (pinkBand) {
            layer1.stroke(255, 220, 240);
        } else {
            layer1.stroke(255, 45, 155);
        }

        for (let stripe = -diameter / 2; stripe < diameter / 2; stripe += 8) {
            layer1.line(stripe, -diameter / 2, stripe, diameter / 2);
            layer1.line(-diameter / 2, stripe, diameter / 2, stripe);
        }

        layer1.pop();
    }

    image(layer2, 0, 0);
    image(layer1, 0, 0);

    counter += 0.003;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

    layer1 = createGraphics(width, height);
    layer2 = createGraphics(width, height);
}