
float distort = 7;      //how much each point is distorted

float x = 500;
float y = 400;

PImage img;  // Declare variable "a" of type PImage
PImage runner;  // Declare variable "a" of type PImage

PFont f;

void setup() {
  size(800, 600);
  background(0);
  frameRate(20);
  smooth();

  img = loadImage("bentover.png");  // Load the image into the program
  runner = loadImage("runner.png");  // Load the image into the program
  
  printArray(PFont.list());
  f = createFont("Georgia", 24);
  textFont(f);
}


void draw() {
  background(0);
  good();

  noFill();
  head();
  head2();
  foot();
  feet();
  otherfoot();
  stomach();
  thing();
  
  image(img, 120, 60, img.width/2, img.height/2);
  image(runner, 450, 100, img.width/1.5, img.height/1.5);
}


void feet() {

  for (int i =0; i<20; i++) {
    distort=15;
    stroke(255, 100, random(100, 130), 180);
    strokeWeight(random (1));
    beginShape();
    vertex(594.0+noise(-distort, distort), 525.0+noise(-distort, distort));
    curveVertex(594.0+random(-distort, distort), 525.0+random(-distort, distort));
    curveVertex(594.0+random(-distort, distort), 525.0+random(-distort, distort));
    curveVertex(572.0+random(-distort, distort), 547.0+random(-distort, distort));
    curveVertex(574.0+random(-distort, distort), 579.0+random(-distort, distort));
    curveVertex(603.0+random(-distort, distort), 583.0+random(-distort, distort));
    curveVertex(627.0+random(-distort, distort), 580.0+random(-distort, distort));
    curveVertex(646.0+random(-distort, distort), 569.0+random(-distort, distort));
    curveVertex(660.0+random(-distort, distort), 547.0+random(-distort, distort));
    curveVertex(629.0+noise(-distort, distort), 540.0+noise(-distort, distort));
    curveVertex(594.0+noise(-distort, distort), 525.0+noise(-distort, distort));
    vertex(594.0+noise(-distort, distort), 525.0+noise(-distort, distort));
    endShape();
    distort=7;
  }
}

void foot() {

  for (int i =0; i<20; i++) {

    beginShape();
    stroke(255, 180);
    strokeWeight(random (1));

    beginShape();
    vertex(168.0+noise(-distort, distort), 357.0+noise(-distort, distort));
    curveVertex(167.0+random(-distort, distort), 355.0+random(-distort, distort));
    curveVertex(174.0+random(-distort, distort), 366.43436+random(-distort, distort));
    curveVertex(148.0+random(-distort, distort), 404.0+random(-distort, distort));
    curveVertex(96.0+random(-distort, distort), 413.4451+random(-distort, distort));
    curveVertex(74.0+random(-distort, distort), 445.0886+random(-distort, distort));
    curveVertex(105.0+random(-distort, distort), 470.74548+random(-distort, distort));
    curveVertex(165.0+random(-distort, distort), 457.91705+random(-distort, distort));
    curveVertex(200.0+random(-distort, distort), 443.37814+random(-distort, distort));
    curveVertex(215.0+random(-distort, distort), 422.85263+random(-distort, distort));
    curveVertex(211.0+random(-distort, distort), 382.65683+random(-distort, distort));
    curveVertex(160.0+random(-distort, distort), 350.0+random(-distort, distort));
    curveVertex(150.0+noise(-distort, distort), 320.0+noise(-distort, distort));
    endShape();
  }
   distort = 7;
}

 void good(){
 
  for (int i=0; i<100; i++){
  fill(255,20);
  distort=2;
  text("everything", 560+random(-distort*4, distort*4), 50+random(-distort, distort));
  text("is good", 560+random(-distort*4, distort*4), 75+random(-distort, distort));
  }
  distort=7;
  }
void head() {
  for (int i =0; i<20; i++) {
    beginShape();
    stroke(random(200, 255), random(200, 255), 255, 180);
     strokeWeight(random (1));

    beginShape();
    vertex(140.0+noise(-distort, distort), 106.0+noise(-distort, distort));
    curveVertex(134.0+random(-distort, distort), 106.0+random(-distort, distort));
    curveVertex(134.0+random(-distort, distort), 106.0+random(-distort, distort));
    curveVertex(111.0+random(-distort, distort), 102.0+random(-distort, distort));
    curveVertex(72.0+random(-distort, distort), 99.0+random(-distort, distort));
    curveVertex(40.0+random(-distort, distort), 110.0+random(-distort, distort));
    curveVertex(22.0+random(-distort, distort), 134.0+random(-distort, distort));
    curveVertex(14.0+random(-distort, distort), 174.0+random(-distort, distort));
    curveVertex(20.0+random(-distort, distort), 223.0+random(-distort, distort));
    curveVertex(35.0+random(-distort, distort), 262.0+random(-distort, distort));
    curveVertex(61.0+random(-distort, distort), 284.0+random(-distort, distort));
    curveVertex(96.0+random(-distort, distort), 274.0+random(-distort, distort));
    curveVertex(116.0+random(-distort, distort), 246.0+random(-distort, distort));
    curveVertex(117.0+random(-distort, distort), 214.0+random(-distort, distort));
    curveVertex(106.0+random(-distort, distort), 185.0+random(-distort, distort));
    curveVertex(86.0+random(-distort, distort), 152.0+random(-distort, distort));
    curveVertex(90.0+random(-distort, distort), 132.0+random(-distort, distort));
    curveVertex(130.0+random(-distort, distort), 146.0+random(-distort, distort));
    curveVertex(140.0+random(-distort, distort), 146.0+random(-distort, distort));
    vertex(145.0+noise(-distort, distort), 146.0+noise(-distort, distort));
    endShape();
  }
}

void head2() {

  for (int i =0; i<2; i++) {
    beginShape();
    stroke(255, 255, 255, 180);
    strokeWeight(random (3,5));
    vertex(593.0+noise(-distort, distort), 129.34918+noise(-distort, distort));
    curveVertex(593.0+random(-distort, distort), 122.95044+random(-distort, distort));
    curveVertex(587.3824+random(-distort, distort), 121.54412+random(-distort, distort));
    curveVertex(567.25494+random(-distort, distort), 90.45172+random(-distort, distort));
    curveVertex(495.2256+random(-distort, distort), 64.95902+random(-distort, distort));
    curveVertex(481.18155+random(-distort, distort), 41.54384+random(-distort, distort));
    curveVertex(529.86755+random(-distort, distort), 20.966858+random(-distort, distort));
    curveVertex(607.5778+random(-distort, distort), 16.0+random(-distort, distort));
    curveVertex(689.9695+random(-distort, distort), 21.676414+random(-distort, distort));
    curveVertex(717.1213+random(-distort, distort), 36.57698+random(-distort, distort));
    curveVertex(710.5674+random(-distort, distort), 67.797226+random(-distort, distort));
    curveVertex(658.13635+random(-distort, distort), 79.85959+random(-distort, distort));
    curveVertex(621.0637+random(-distort, distort), 94.09536+random(-distort, distort));
    curveVertex(593.0+random(-distort, distort), 129.34918+random(-distort, distort));
    vertex(610.0+noise(-distort, distort), 129.34918+noise(-distort, distort));
    endShape();
  }
}

void otherfoot() {

  for (int i =0; i<20; i++) {
    beginShape();
    stroke(255,255,random(200,255), 180);
    strokeWeight(random (1));

    beginShape();
    vertex(235.0+noise(-distort, distort), 388.0+noise(-distort, distort));
    curveVertex(235.0+random(-distort, distort), 388.0+random(-distort, distort));
    curveVertex(235.0+random(-distort, distort), 388.0+random(-distort, distort));
    curveVertex(245.0+random(-distort, distort), 438.0+random(-distort, distort));
    curveVertex(284.0+random(-distort, distort), 487.0+random(-distort, distort));
    curveVertex(336.0+random(-distort, distort), 497.0+random(-distort, distort));
    curveVertex(399.0+random(-distort, distort), 498.0+random(-distort, distort));
    curveVertex(436.0+random(-distort, distort), 478.0+random(-distort, distort));
    curveVertex(434.0+random(-distort, distort), 418.0+random(-distort, distort));
    curveVertex(395.0+random(-distort, distort), 408.0+random(-distort, distort));
    curveVertex(359.0+random(-distort, distort), 420.0+random(-distort, distort));
    curveVertex(313.0+random(-distort, distort), 420.0+random(-distort, distort));
    curveVertex(288.0+random(-distort, distort), 401.0+random(-distort, distort));
    vertex(288.0+noise(-distort, distort), 388.0+noise(-distort, distort));
    endShape();
  }
}

void stomach() {
  for (int i =0; i<20; i++) {
    beginShape();
    stroke(255, random(100, 150), 100, 180);
    strokeWeight(random (1));

    beginShape();
    vertex(570.0+noise(-distort, distort), 379.75992+noise(-distort, distort));
    curveVertex(570.0+random(-distort, distort), 379.75992+random(-distort, distort));
    curveVertex(570.0+random(-distort, distort), 379.75992+random(-distort, distort));
    curveVertex(572.0+random(-distort, distort), 323.43945+random(-distort, distort));
    curveVertex(579.0+random(-distort, distort), 285.55115+random(-distort, distort));
    curveVertex(607.0+random(-distort, distort), 331.63153+random(-distort, distort));
    curveVertex(591.0+random(-distort, distort), 356.20773+random(-distort, distort));
    curveVertex(605.0+random(-distort, distort), 384.87994+random(-distort, distort));
    curveVertex(638.0+random(-distort, distort), 341.8716+random(-distort, distort));
    curveVertex(616.0+random(-distort, distort), 305.00732+random(-distort, distort));
    curveVertex(619.0+random(-distort, distort), 280.43112+random(-distort, distort));
    curveVertex(652.0+random(-distort, distort), 281.45514+random(-distort, distort));
    curveVertex(647.0+random(-distort, distort), 310.12735+random(-distort, distort));
    curveVertex(655.0+random(-distort, distort), 336.7516+random(-distort, distort));
    curveVertex(649.0+noise(-distort, distort), 366.4478+noise(-distort, distort));
    endShape();
  }
}

void thing() {
  for (int i =0; i<100; i++) {
    distort=100;
    beginShape();
    stroke(random(100, 200), random(100, 150), 100, random(255));
    strokeWeight(random(1));

    beginShape();
    curveVertex(398.0+noise(-distort, distort), 178.0+noise(-distort, distort));
    curveVertex(398.0+random(-distort, distort), 178.0+random(-distort, distort));
    curveVertex(398.0+random(-distort, distort), 178.0+random(-distort, distort));
    curveVertex(365.0+random(-distort, distort), 209.0+random(-distort, distort));
    curveVertex(394.0+random(-distort, distort), 247.0+random(-distort, distort));
    curveVertex(354.0+random(-distort, distort), 258.0+random(-distort, distort));
    curveVertex(343.0+random(-distort, distort), 286.0+random(-distort, distort));
    curveVertex(335.0+random(-distort, distort), 314.0+random(-distort, distort));
    curveVertex(368.0+random(-distort, distort), 280.0+random(-distort, distort));
    curveVertex(391.0+random(-distort, distort), 287.0+random(-distort, distort));
    curveVertex(362.0+random(-distort, distort), 385.0+random(-distort, distort));
    curveVertex(381.0+random(-distort, distort), 389.0+random(-distort, distort));
    curveVertex(403.0+random(-distort, distort), 320.0+random(-distort, distort));
    curveVertex(425.0+random(-distort, distort), 326.0+random(-distort, distort));
    curveVertex(426.0+random(-distort, distort), 402.0+random(-distort, distort));
    curveVertex(445.0+random(-distort, distort), 397.0+random(-distort, distort));
    curveVertex(437.0+random(-distort, distort), 284.0+random(-distort, distort));
    curveVertex(477.0+random(-distort, distort), 323.0+random(-distort, distort));
    curveVertex(467.0+random(-distort, distort), 281.0+random(-distort, distort));
    curveVertex(432.0+random(-distort, distort), 248.0+random(-distort, distort));
    curveVertex(449.0+random(-distort, distort), 217.0+random(-distort, distort));
    curveVertex(426.0+random(-distort, distort), 179.0+random(-distort, distort));
    curveVertex(398.0+noise(-distort, distort), 178.0+noise(-distort, distort));
    endShape();
  }
   distort=7;
}


