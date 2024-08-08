

let RGB1
let RGB2
let RGB3



function setup() {
  createCanvas(500, 500);
  background(0, 0, 0);

 
   RGB1 = random(0, 255)
   RGB2 = random(0, 255)
   RGB3 = random(0, 255)
}

function draw() {
  stroke(RGB1, RGB2, RGB3)
  line(250, 250, mouseX, mouseY )
}

function mouseClicked() {
  background(0, 0, 0);

   RGB1 = random(0, 255)
   RGB2 = random(0, 255)
   RGB3 = random(0, 255)
}