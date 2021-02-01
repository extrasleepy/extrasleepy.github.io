var x
var y
var s
var c
var r
var g
var b

function setup() {
  createCanvas(800, 480);
  background(0);
}

function draw() {
  for (let i = 0; i < 9; i++) {
    x=random(0,width);
    y=random(0,height);
    s=random(2,10);
    c=random(0,255);
    fill(c);
    ellipse(x,y,s,s);
  }
  r=random(0,100);
  g=random(0,255);
  b=random(0,255);
  fill(r,g,b);
  ellipse(x,y,s,s);
}
