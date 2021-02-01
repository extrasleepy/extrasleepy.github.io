let x
let y
let s
let c
let r
let g
let b
let currentMillis
let previousMillis = 0
let interval = 2000
let pick = 0

let words =['squid','flounder','clam','krill','prawn']


function setup() {
  createCanvas(800, 480);
  background(0);
  textSize(32);
  textAlign(RIGHT);
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
  if (currentMillis>(previousMillis+interval)){
    pick = random(0,words.length)
    fill(255)
    text(words[int(pick)],x,y)
    previousMillis = currentMillis;
    textSize(random(24,200));
  }
  
  currentMillis=millis()
  
  r=random(0,100);
  g=random(0,255);
  b=random(0,255);
  fill(r,g,b);
  ellipse(x,y,s,s);
  
}
