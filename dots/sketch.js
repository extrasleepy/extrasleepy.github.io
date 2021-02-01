var x
var y
var r
var c

function setup() {
  createCanvas(800, 480);
  background(0);
}

function draw() {
  x=random(0,width);
  y=random(0,height);
  r=random(2,10);
  c=random(0,255);
  fill(c);
  ellipse(x,y,r,r);
}