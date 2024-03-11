function setup() {
  createCanvas(640, 480); // Set up a canvas
  noFill(); // Ensure shapes are not filled
}

function draw() {
  background(220); // Clear the background each frame
  
  // Draw lines from the mouse position to the edges of the canvas
  stroke(0); // Set line color to black
  for (let i = 0; i < width; i += 40) {
    line(mouseX, mouseY, i, 0); // Top edge
    line(mouseX, mouseY, i, height); // Bottom edge
  }
  for (let j = 0; j < height; j += 40) {
    line(mouseX, mouseY, 0, j); // Left edge
    line(mouseX, mouseY, width, j); // Right edge
  }
  
  // Draw an arc that changes its opening angle based on the mouse X position
  let arcDiameter = 150;
  let startAngle = 0;
  let endAngle = map(mouseX, 0, width, 0, TWO_PI); // Map mouseX to a full circle
  
  stroke(255, 0, 0); // Set arc color to red
  arc(width / 2, height / 2, arcDiameter, arcDiameter, startAngle, endAngle);
}

