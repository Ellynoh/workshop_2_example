function setup() {
  createCanvas(600, 400); // Canvas size 600x400
}

function draw() {
  background(220); // Sets a light grey background
  generateShapes(); // Call to function that handles shapes creation
  noLoop(); // Disables looping to draw the shapes only once
}

function generateShapes() {
  // Fixed position and size for all shapes
  let x = 150; // Fixed x position
  let y = 150; // Fixed y position
  let size = 50; // Fixed size
  
  // Drawing 50 circles with fixed position and size
  for (let i = 0; i < 50; i++) {
    drawShape(x, y, size); // Call the custom function to draw each shape
  }
}

function drawShape(x, y, size) {
  let noiseVal = noise(x * 0.01, y * 0.01); // Generate a noise value based on position
  fill(noiseVal * 255, 100, 150); // Apply noise value to the red component for color variation
  noStroke(); // Shapes without border
  ellipse(x, y, size, size); // Draw ellipse with fixed size
}
