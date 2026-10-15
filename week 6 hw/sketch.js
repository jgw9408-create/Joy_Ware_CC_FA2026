
let rows = 9;
let cols = 15;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
}

function draw() {
    background(8, 3, 10);

    let spacingX = width / cols;
    let spacingY = height / rows;

    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {

            let offset = (y % 2) * spacingX / 2;

            let dotX = x * spacingX + spacingX / 2 + offset;
            let dotY = y * spacingY + spacingY / 2;

            // Pink dots flicker
            let flicker = sin(frameCount * 0.0005 + x * 1.7 + y * 2.3);
            let pulse = map(flicker, -1, 1, 60, 255);

            // Spotlight follows your mouse
            let distanceToMouse = dist(mouseX, mouseY, dotX, dotY);
            let spotlight = map(distanceToMouse, 0, 250, 255, 20);
            spotlight = constrain(spotlight, 20, 255);

            // Combine the flicker and spotlight
            let glow = max(pulse, spotlight);

            // Pink color variations
            if ((x + y) % 3 == 0) {
                fill(255, 45, 155, glow);
            } else if ((x + y) % 3 == 1) {
                fill(255, 145, 205, glow);
            } else {
                fill(180, 25, 100, glow);
            }

            // Dots gently change size
            let size = 10 + map(flicker, -1, 1, 2, 8);

            circle(dotX, dotY, size);
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
