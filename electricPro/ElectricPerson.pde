
float distort = 20;      //how much each point is distorted

float x = 500;
float y = 400;

void setup() {
  size(800, 600);
  background(0);
  frameRate(20);
  smooth();
}


void draw() {
  background(0);
  noFill();

  strokeWeight(random(.5, 2));

  for (int i =0; i<20; i++) {
    beginShape();
    stroke(random(200,255),random(200,255),255, 100);
    float startpoint = 214; //+ random(-distort,distort);
    float startpoint2  = 65; //+ random(-distort,distort);
    curveVertex(startpoint, startpoint2);
    //bezierVertex(214.0+random(-distort,distort), 65.0+random(-distort,distort), 214.0+random(-distort,distort), 65.0+random(-distort,distort), 214.0+random(-distort,distort), 65.0+random(-distort,distort));
    curveVertex(214.0+noise(-distort, distort), 65.0+noise(-distort, distort));
    curveVertex(123.0+random(-distort, distort), 136.0+random(-distort, distort));
    curveVertex(93.0+random(-distort, distort), 220.0+random(-distort, distort));
    curveVertex(115.0+random(-distort, distort), 307.0+random(-distort, distort));
    curveVertex(213.0+random(-distort, distort), 357.0+random(-distort, distort));
    curveVertex(314.0+random(-distort, distort), 433.0+random(-distort, distort));
    curveVertex(404.0+random(-distort, distort), 382.0+random(-distort, distort));
    curveVertex(423.0+random(-distort, distort), 262.0+random(-distort, distort));
    curveVertex(387.0+random(-distort, distort), 174.0+random(-distort, distort));
    curveVertex(382.0+noise(-distort, distort), 92.0+noise(-distort, distort));
    curveVertex(startpoint, startpoint2);
    endShape();
  }
}



