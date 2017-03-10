int radius = 50;
int x, y;
int nX, nY;
int delay = 15;

void setup() {
  size(1000, 500);
  frameRate( 30 ); // toc do
  x = width / 2;
  y = height / 2;
  nX = x;
  nY = y;
}

void draw(){
  radius = radius + sin( frameCount / 4 );
  x+=(nX-x)/delay;
  y+=(nY-y)/delay;
  background(000);
  fill( 255, 0, 0 );
  ellipse( x, y, radius, radius );                  
}

void mouseMoved(){
  nX = mouseX;
  nY = mouseY;  
}