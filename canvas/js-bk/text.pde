String myText = "oRo";

void setup() {
  size(1000, 500);
  background(0);
  frameRate(20);
}

void draw() {
  pushMatrix();
  fill(0, 15);
  rect(0, 0, width, height);
  translate(random(width), random(height));
  rotate(random(-PI/6, -PI/18));
  fill(255, random(50, 255));
  textSize(random(32, 128));
  text(myText, 0, 0);
  popMatrix();
}