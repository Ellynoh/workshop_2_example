let xPos = 0;
let colorA;
let colorB;
let currentColor;
let lerpAmt = 0;

function setup() {
  createCanvas(600, 400);
  colorA = color(255, 0, 0);
  colorB = color(0, 0, 255);
  currentColor = colorA;
  setInterval(changeColor, 2000); // Change color every 2 seconds
}

function draw() {
  background(220);
  fill(currentColor);
  circle(xPos, height / 2, 50);
  xPos += 2;
  if (xPos > width) {
    xPos = 0; // Reset to start
  }
}

function changeColor() {
  currentColor = lerpColor(colorA, colorB, lerpAmt);
  lerpAmt += 0.1;
  if (lerpAmt > 1) {
    lerpAmt = 0;
    let temp = colorA;
    colorA = colorB;
    colorB = temp;
  }
}
