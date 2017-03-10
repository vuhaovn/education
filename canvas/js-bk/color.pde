void setup() {
  size(1000, 500);
  background(0);
  frameRate(30);
}

void draw() {
  float ellipseSize = random(10,100);
  pushMatrix();
  fill(0, 10);
  rect(0, 0, width, height);
  translate(random(width), random(height));
  fill(random(255),random(255),random(255), random(51, 204));
  noStroke();
  ellipse(0,0,ellipseSize,ellipseSize);
  popMatrix();
}