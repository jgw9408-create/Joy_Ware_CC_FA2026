let keys = [];

let lockX;
let lockY;

function setup() {

    createCanvas(windowWidth, windowHeight);

    lockX = width / 2;
    lockY = height / 2;

    // Create 10 keys
    for (let i = 0; i < 10; i++) {

        keys.push({

            x: 80 + i * 90,
            y: height - 120,

            moving: false,
            unlocked: false,

            angle: random(-10, 10)
        });
    }
}


function draw() {

    background(20);

    // Draw the lock
    drawLock();

    // Draw the 10 keys
    for (let i = 0; i < keys.length; i++) {

        let key = keys[i];

        // Move the key toward the lock
        if (key.moving && !key.unlocked) {

            key.x = lerp(key.x, lockX, 0.03);
            key.y = lerp(key.y, lockY + 65, 0.03);

            key.angle = lerp(key.angle, 0, 0.05);

            if (
                dist(
                    key.x,
                    key.y,
                    lockX,
                    lockY + 65
                ) < 5
            ) {

                key.unlocked = true;
            }
        }

        // Draw key
        if (!key.unlocked) {

            drawKey(
                key.x,
                key.y,
                i + 1,
                key.angle
            );
        }
    }
}


// ==========================================
// THE LOCK
// ==========================================

function drawLock() {

    rectMode(CENTER);

    // Lock body
    fill(70, 65, 55);

    stroke(180, 160, 110);
    strokeWeight(5);

    rect(
        lockX,
        lockY,
        150,
        120,
        12
    );


    // Decorative circle
    noFill();

    stroke(180, 160, 110);
    strokeWeight(3);

    ellipse(
        lockX,
        lockY + 10,
        55,
        55
    );


    // Keyhole
    fill(20);
    noStroke();

    ellipse(
        lockX,
        lockY + 3,
        18,
        18
    );

    rect(
        lockX,
        lockY + 18,
        10,
        25
    );


    // Shackle
    noFill();

    stroke(180, 160, 110);
    strokeWeight(14);

    arc(
        lockX,
        lockY - 40,
        80,
        100,
        PI,
        TWO_PI
    );
}


// ==========================================
// CHOOSE WHICH KEY TO DRAW
// ==========================================

function drawKey(x, y, number, angle) {

    push();

    translate(x, y);

    rotate(angle);

    stroke(100, 70, 30);
    strokeWeight(3);

    fill(190, 155, 80);


    // KEY 1
    if (number == 1) {

        classicKey();
    }


    // KEY 2
    if (number == 2) {

        victorianKey();
    }


    // KEY 3
    if (number == 3) {

        heartKey();
    }


    // KEY 4
    if (number == 4) {

        crescentKey();
    }


    // KEY 5
    if (number == 5) {

        filigreeKey();
    }


    // KEY 6
    if (number == 6) {

        crownKey();
    }


    // KEY 7
    if (number == 7) {

        flowerKey();
    }


    // KEY 8
    if (number == 8) {

        mysticKey();
    }


    // KEY 9
    if (number == 9) {

        gothicKey();
    }


    // KEY 10
    if (number == 10) {

        dragonKey();
    }


    pop();
}


// ==========================================
// KEY 1 — CLASSIC
// ==========================================

function classicKey() {

    // Round bow
    ellipse(0, 0, 45, 45);

    // Hole
    fill(20);
    ellipse(0, 0, 17, 17);

    // Shaft
    fill(190, 155, 80);

    rectMode(CENTER);

    rect(40, 0, 65, 9);

    // Teeth
    rect(68, 8, 10, 18);
    rect(80, 5, 10, 22);
}


// ==========================================
// KEY 2 — VICTORIAN
// ==========================================

function victorianKey() {

    // Large decorative bow
    ellipse(0, 0, 55, 55);

    ellipse(0, 0, 35, 35);

    fill(20);

    ellipse(0, 0, 14, 14);

    fill(190, 155, 80);

    // Decorative points
    triangle(-25, -15, -40, -25, -30, -5);
    triangle(-25, 15, -40, 25, -30, 5);

    // Shaft
    rectMode(CENTER);

    rect(45, 0, 75, 9);

    // Teeth
    rect(75, 8, 10, 20);
    rect(88, 4, 10, 28);
}


// ==========================================
// KEY 3 — HEART
// ==========================================

function heartKey() {

    // Heart-shaped bow
    beginShape();

    vertex(0, 25);

    bezierVertex(
        -40, 0,
        -25, -30,
        0, -10
    );

    bezierVertex(
        25, -30,
        40, 0,
        0, 25
    );

    endShape(CLOSE);

    // Heart hole
    fill(20);

    ellipse(0, 0, 12, 12);

    fill(190, 155, 80);

    // Shaft
    rectMode(CENTER);

    rect(42, 0, 70, 9);

    // Teeth
    rect(70, 8, 10, 20);
    rect(83, 5, 10, 25);
}


// ==========================================
// KEY 4 — CRESCENT
// ==========================================

function crescentKey() {

    // Crescent bow
    arc(
        0,
        0,
        55,
        55,
        PI / 2,
        PI * 1.5
    );

    arc(
        8,
        0,
        35,
        45,
        PI / 2,
        PI * 1.5
    );

    // Shaft
    rectMode(CENTER);

    rect(42, 0, 70, 9);

    // Teeth
    rect(70, 8, 10, 18);
    rect(82, 4, 10, 25);
}


// ==========================================
// KEY 5 — FILIGREE
// ==========================================

function filigreeKey() {

    // Large circle
    ellipse(0, 0, 55, 55);

    // Decorative inner circles
    noFill();

    ellipse(0, 0, 40, 40);

    ellipse(0, 0, 25, 25);

    // Center hole
    fill(20);

    ellipse(0, 0, 10, 10);

    fill(190, 155, 80);

    // Decorative lines
    line(-20, -15, 20, 15);
    line(-20, 15, 20, -15);

    // Shaft
    rectMode(CENTER);

    rect(45, 0, 75, 8);

    // Teeth
    rect(75, 8, 10, 20);
    rect(88, 5, 10, 25);
}


// ==========================================
// KEY 6 — CROWN
// ==========================================

function crownKey() {

    // Crown-shaped bow
    beginShape();

    vertex(-25, 15);
    vertex(-25, -15);
    vertex(-10, 0);
    vertex(0, -25);
    vertex(10, 0);
    vertex(25, -15);
    vertex(25, 15);

    endShape(CLOSE);

    // Hole
    fill(20);

    ellipse(0, 8, 12, 12);

    fill(190, 155, 80);

    // Shaft
    rectMode(CENTER);

    rect(45, 0, 75, 9);

    // Teeth
    rect(75, 8, 10, 20);
    rect(88, 4, 10, 27);
}


// ==========================================
// KEY 7 — FLOWER
// ==========================================

function flowerKey() {

    // Flower petals
    for (let i = 0; i < 6; i++) {

        push();

        rotate(i * 60);

        ellipse(
            0,
            -18,
            20,
            30
        );

        pop();
    }

    // Flower center
    fill(20);

    ellipse(0, 0, 15, 15);

    fill(190, 155, 80);

    // Shaft
    rectMode(CENTER);

    rect(45, 0, 75, 9);

    // Teeth
    rect(75, 8, 10, 20);
    rect(88, 5, 10, 25);
}


// ==========================================
// KEY 8 — MYSTIC
// ==========================================

function mysticKey() {

    // Large circle
    ellipse(0, 0, 55, 55);

    // Diamond
    beginShape();

    vertex(0, -20);
    vertex(15, 0);
    vertex(0, 20);
    vertex(-15, 0);

    endShape(CLOSE);

    // Center
    fill(20);

    ellipse(0, 0, 10, 10);

    fill(190, 155, 80);

    // Shaft
    rectMode(CENTER);

    rect(45, 0, 75, 9);

    // Teeth
    rect(75, 8, 10, 20);
    rect(88, 4, 10, 27);
}


// ==========================================
// KEY 9 — GOTHIC
// ==========================================

function gothicKey() {

    // Pointed gothic bow
    beginShape();

    vertex(0, -35);
    vertex(25, -10);
    vertex(20, 25);
    vertex(0, 35);
    vertex(-20, 25);
    vertex(-25, -10);

    endShape(CLOSE);

    // Hole
    fill(20);

    ellipse(0, 5, 13, 13);

    fill(190, 155, 80);

    // Shaft
    rectMode(CENTER);

    rect(45, 0, 75, 8);

    // Sharp teeth
    triangle(70, 0, 85, 0, 78, 20);
    triangle(82, 0, 97, 0, 90, 25);
}


// ==========================================
// KEY 10 — DRAGON
// ==========================================

function dragonKey() {

    // Curved dragon-like bow
    noFill();

    strokeWeight(6);

    arc(
        0,
        0,
        55,
        55,
        PI / 4,
        PI * 1.7
    );

    // Dragon head
    fill(190, 155, 80);

    ellipse(
        20,
        -15,
        20,
        20
    );

    // Dragon horn
    triangle(
        20,
        -22,
        25,
        -35,
        30,
        -20
    );

    // Shaft
    rectMode(CENTER);

    rect(48, 0, 75, 8);

    // Dragon teeth
    triangle(
        70,
        0,
        85,
        0,
        78,
        20
    );

    triangle(
        82,
        0,
        97,
        0,
        90,
        25
    );
}


// ==========================================
// This should let me click the keys if I did it right lol 
// ==========================================

function mousePressed() {

    for (let i = 0; i < keys.length; i++) {

        let key = keys[i];

        if (
            dist(
                mouseX,
                mouseY,
                key.x,
                key.y
            ) < 45
        ) {

            key.moving = true;
        }
    }
}
