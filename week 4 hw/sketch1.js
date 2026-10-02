
let numWaves = 50

function setup(){
    createCanvas(windowWidth, windowHeight)
    noFill()
}

function draw(){  
    background(230)

    noiseWave(10, 150, height/2, 0.05)
}

function sinWave(wavesPerCanvas, amplitude, yLoc, speed){

    let offset = frameCount*speed

    push()
    translate(0,yLoc)

    beginShape()

    for(let i = 0; i < width; i++){

        let mappedI = map(i,0,width,0,wavesPerCanvas*TWO_PI)
        let y = sin(mappedI-offset)*amplitude

        vertex(i,y)
    }

    endShape()
    pop()
}

function nShape(xLoc, yLoc, numVertices, radius){

    push()
    translate(xLoc,yLoc)

    fill(40)
    noStroke()

    ellipse(0,0,radius*2,radius*1.5)

    triangle(
        -radius,-radius*.3,
        -radius*.6,-radius*1.3,
        0,-radius*.6
    )

    triangle(
        radius,-radius*.3,
        radius*.6,-radius*1.3,
        0,-radius*.6
    )

    fill(255)

    ellipse(-radius*.35,-radius*.1,radius*.3,radius*.4)
    ellipse(radius*.35,-radius*.1,radius*.3,radius*.4)

    pop()
}

function noiseWave(density, amplitude, yLoc, speed){

    let offset = frameCount*speed

    push()
    translate(0,yLoc)

    beginShape()

    for(let x = 0; x < width; x++){

        let seed = map(x,0,width,0,density)+offset
        let y = noise(seed)*amplitude

        vertex(x,y)
    }

    endShape()
    pop()
}

function mousePressed(){

    let v = floor(random(15,30))
    nShape(mouseX,mouseY,v, v)
}