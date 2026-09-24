let r = 0

let w, h;
let numRects = 20;

let breathing = false;
let breathStart = 0;
let breathTime = 16000;


function setup(){

    createCanvas(windowWidth, windowHeight)

    w = width/numRects
    h = height/numRects

    rectMode(CENTER)
    angleMode(DEGREES)

    background(0)
    fill(0)
    strokeWeight(2)
    stroke(255)

    let button = createButton('BEGIN BREATH')
    button.position(windowWidth/2, windowHeight/2)
    button.mousePressed(startBreath)

}


function draw(){

    background(0)

    let breath = 0

    if (breathing){

        let elapsed = millis() - breathStart

        breath = (elapsed % breathTime) / breathTime

    }


    for(let x = 0; x < numRects; x++){

        for(let y = 0; y < numRects; y++){

            let d = dist(
                mouseX,
                mouseY,
                w * x,
                h * y
            )

            d = map(
                d,
                0,
                1000,
                1,
                0
            )

            d = constrain(
                d,
                0,
                1
            )


            push()

            let xpos = w * x + w/2
            let ypos = h * y + h/2


            let movement = sin(breath * 360)


            translate(
                xpos + movement * 20 * d,
                ypos
            )


            rotate(
                movement * 15 * d
            )


            triangle(
                -w/3,
                h/3,

                0,
                -h/3,

                w/3,
                h/3
            )


            pop()

        }

    }


    r++

}


function startBreath(){

    breathing = true

    breathStart = millis()

}