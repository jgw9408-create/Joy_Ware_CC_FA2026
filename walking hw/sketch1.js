
let f
let flowers = []

function setup() {
    createCanvas(windowWidth, windowHeight)
    background(20, 35, 29)
    angleMode(DEGREES)

    for (let i = 0; i < 50; i++) {
        flowers.push(new Flower(random(width), random(height)))
    }
}

function draw() {
    background(20, 35, 29)

    for (let i = 0; i < flowers.length; i++) {
        let d = map(mouseX, 0, width, -5, 5)
        flowers[i].move(d)
        flowers[i].display()
    }
}

function mouseDragged() {
    flowers.push(new Flower(mouseX, mouseY))
}

class Flower {
    constructor(x, y) {
        this.x = x
        this.y = y

        this.numPetals = floor(random(6, 13))
        this.petalWidth = random(20, 40)
        this.petalLength = random(30, 80)
        this.centerDiameter = random(20, 35)

        // How much of the rose has been painted red
        this.paintProgress = random(0.2, 0.85)

        this.petalColors = []
        this.polkaDots = []

        // Give each petal its own paint pattern
        for (let i = 0; i < this.numPetals; i++) {
            if (random() < this.paintProgress) {
                this.petalColors.push(color(190, 30, 45))
            } else {
                this.petalColors.push(color(255, 242, 218))
            }

            this.polkaDots.push(random() < 0.4)
        }

        this.centerCol = color(238, 190, 73)

        this.xV = random(-5, 5)
        this.yV = random(-5, 5)
        this.rotations = 0
        this.rV = random(-5, 5)
    }

    move(d) {
        this.x += this.xV
        this.y += this.yV
        this.rotations += this.rV * d

        // Let flowers reappear when they drift offscreen
        if (this.x > width + 80) this.x = -80
        if (this.x < -80) this.x = width + 80
        if (this.y > height + 80) this.y = -80
        if (this.y < -80) this.y = height + 80
    }

    display() {
        push()
        translate(this.x, this.y)
        rotate(this.rotations)

        for (let r = 0; r < this.numPetals; r++) {
            push()

            rotate((360 / this.numPetals) * r)
            translate(this.petalLength / 2, 0)

            // Red and white rose petals
            fill(this.petalColors[r])
            stroke(100, 35, 40)
            strokeWeight(1)
            ellipse(0, 0, this.petalLength, this.petalWidth)

            // Incomplete polka-dot painting
            if (this.polkaDots[r]) {
                noStroke()

                if (red(this.petalColors[r]) > 220) {
                    fill(190, 30, 45)
                } else {
                    fill(255, 242, 218)
                }

                circle(-this.petalLength * 0.18, 0, 5)
                circle(0, -this.petalWidth * 0.2, 4)
                circle(this.petalLength * 0.16, this.petalWidth * 0.18, 5)
            }

            pop()
        }

        // Golden flower center
        noStroke()
        fill(this.centerCol)
        ellipse(0, 0, this.centerDiameter)

        pop()
    }
}
