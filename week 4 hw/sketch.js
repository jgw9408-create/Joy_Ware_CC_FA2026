
// let wavesPerCanvas = 2
// let amplitude = 50
// let offset = 0;
// let yLoc
// let speed = 0.01

letnumWaves =10
function setup(){
    createCanvas(windowWidth,windowHeight)
yLoc = height/2
Nofill()

}

function draw(){
    background(230)
    // sinWave(4,150, height/2., 0.05)
    // sinWave( 8,80, height*0.9, 0.2)
    // sinWave(100, 80, height*0.2, 0.01)

    for let i = 0; i<numWaves; i++){
SinWave(i, 80, height i*0.01 ) 
}
let yLoc= map(i, 0, numWaves, 0, 1) height
if (i%2 == 0){
    speed = 0.1
}
else (i%2 == 1){
}
function sinWave(wavesPerCanvas,amplitude,yLoc, speed){

let offset = frameCount* speed([speed])
    push ()

    translate(0,yLoc)

beginShape()
   for(let i=0; i<width;i++){

    mappedI = map(i,0,width,0,wavesPerCanvas*TWO_PI)

 let y = sin(mappedI)* amplitude 

 let x = i

 vertex (x,y)
 
    }
endShape()

pop()
// offset = frameCount* speed([speed])
}