const word2Vec = new ml5.Word2Vec('data/wordvecs10000.json', modelLoaded);
let modelReady = false;

let scribble = new Scribble();

let total = "";
let total2 = "";
let total3 = "";
let howFar = 0;
let punctuation = [".", "!", "?"];

let textA, textB, inputA, inputB, buttonA, buttonB, charButton, saveButton;
let textA2, textB2, inputA2, inputB2, buttonA2, buttonB2;
let textA3, textB3, inputA3, inputB3, buttonA3, buttonB3;

let formResolution = 50 ;
let stepSize = 20;
let initRadius = 80;
let centerX, centerY;
let x = [formResolution];
let y = [formResolution];

let chaCol = 0;
let chaCol2 = 0;
let chaSize = 0;
let off = 4;
let eye = 0;

function preload() {
  my_d_Font = loadFont('assets/SFToontime-Bold.ttf');
  myFont = loadFont('assets/SFToontimeShaded.ttf');
}

function setup() {
  createCanvas(1150, 540);
  background('#efeee8');
  noFill();
  stroke(0);
  strokeWeight(2);

  scribble.bowing = 0.1;
  scribble.roughness = 1.5;
  scribble.maxOffset = 1.5;      

  scribble.scribbleRect(200,245,350,350);   //draw frames
  scribble.scribbleRect(570, 245, 350, 350);
  scribble.scribbleRect(940, 245, 350, 350);

  textSize(55);
  strokeWeight(1);
  fill(0);
  textFont(myFont);
  text("land of lumps",30,55);

  textFont(my_d_Font);
  inputA = createInput();
  inputA.position(36, 465);
  inputA.size(280, 15);

  inputA.style('background-color', 'white');
  inputA.style('border', '1px solid gray');
  inputA.style('border-radius','0px');
  inputA.style('padding','5px');
  inputA.style('color', 'gray');
  inputA.style('font', '20px Courier');

  charButton = createButton('new lumps');
  charButton.position(inputA.x, inputA.y + 40);
  charButton.mousePressed(characters);

  charButton.style('display', 'inline - block');
  charButton.style('font-size','15px');
  charButton.style('margin', '4px');
  charButton.style('background-color', 'white');
  charButton.style('color', 'black');
  charButton.style('border', '3px solid black');

  saveButton = createButton('save comic');
  saveButton.position(charButton.x + 100, inputA.y + 40);
  saveButton.mousePressed(saveComic);

  saveButton.style('display', 'inline - block');
  saveButton.style('font-size', '15px');
  saveButton.style('margin', '4px');
  saveButton.style('background-color', 'white');
  saveButton.style('color', 'black');
  saveButton.style('border', '3px solid black');

  buttonA = createButton('dialog');
  buttonA.position(inputA.x + inputA.width, inputA.y-4.5);
  buttonA.mousePressed(dialogA);

  buttonA.style('display', 'inline - block');
  buttonA.style('font-size', '15px');
  buttonA.style('margin', '4px');
  buttonA.style('background-color', 'white');
  buttonA.style('color', 'black');
  buttonA.style('border', '3px solid black');

  inputA2 = createInput();
  inputA2.position(405, 465);
  inputA2.size(280, 15);

  inputA2.style('background-color', 'white');
  inputA2.style('border', '1px solid gray');
  inputA2.style('border-radius', '0px');
  inputA2.style('padding', '5px');
  inputA2.style('color', 'gray');
  inputA2.style('font', '20px Courier');

  buttonA2 = createButton('dialog');
  buttonA2.position(inputA2.x + inputA2.width, inputA2.y-4.5);
  buttonA2.mousePressed(dialogA2);

  buttonA2.style('display', 'inline - block');
  buttonA2.style('font-size', '15px');
  buttonA2.style('margin', '4px');
  buttonA2.style('background-color', 'white');
  buttonA2.style('color', 'black');
  buttonA2.style('border', '3px solid black');

  inputA3 = createInput();
  inputA3.position(775, 465);
  inputA3.size(280, 15);

  inputA3.style('background-color', 'white');
  inputA3.style('border', '1px solid gray');
  inputA3.style('border-radius', '0px');
  inputA3.style('padding', '5px');
  inputA3.style('color', 'gray');
  inputA3.style('font', '20px Courier');

  buttonA3 = createButton('dialog');
  buttonA3.position(inputA3.x + inputA3.width, inputA3.y-4.5);
  buttonA3.mousePressed(dialogA3);

  buttonA3.style('display', 'inline - block');
  buttonA3.style('font-size', '15px');
  buttonA3.style('margin', '4px');
  buttonA3.style('background-color', 'white');
  buttonA3.style('color', 'black');
  buttonA3.style('border', '3px solid black');

  characters()
}

function draw(){
}

function dialogA() {
  fill('#efeee8');
  noStroke();
  rect(32, 80, 330, 141);  //clear dialog

  stroke(0);
  strokeWeight(2);

  wordbubbles(0, random(0, 30));

  fill(0, 0, 0);
  textSize(16);
  textAlign(LEFT);
  textA = (inputA.value());
  let txt = (textA.toLowerCase());
  text(textA, 40, 90, 150, 100);
  
  let word = inputA.value();
  let str = word.toLowerCase();
  let splitString = splitTokens(str, [" ", "?", ".", "!"]);

  for (var i = 0; i < splitString.length; i++) {
    howFar = int(random(1, 10));
    total += " ";
    let theWord = splitString[i];

    if (theWord == "") {
      total += splitString[i];
    }else{
      total += findNearest(splitString[i], howFar);
    }
  }

  howFar = int(random(3));
  if(total!=""){
    total += punctuation[howFar];
  }

  textB = (total);
  fill(0);
  noStroke();
  textSize(16);
  textAlign(RIGHT);
  text(textB, 210, 90, 150, 200);
  total = "";
}

function dialogA2() {
  fill('#efeee8');
  noStroke();
  rect(400, 80, 330, 130); //clear dialog

  stroke(0);
  strokeWeight(2);

  wordbubbles(370,random(0,30));

  fill(0);
  noStroke();
  textSize(16);
  textAlign(LEFT);
  textA2 = (inputA2.value());
  let txt = (textA2.toLowerCase());
  text(textA2, 410, 90, 150, 100);

  let word = inputA2.value();
  let str = word.toLowerCase();
  let splitString = splitTokens(str, [" ", "?", ".", "!"]);

   for (var i = 0; i < splitString.length; i++) {
     howFar = int(random(1, 20));
     total2 += " ";
     let theWord = findNearest(splitString[i], howFar);

     if (theWord == "") {
       total2 += splitString[i];
     } else {
       total2 += findNearest(splitString[i], howFar);
     }
   }

   howFar = int(random(3));
   if (total2 != "") {
     total2 += punctuation[howFar];
   }

  textB2 = (total2);
  fill(0);
  noStroke();
  textSize(16);
  textAlign(RIGHT);
  text(textB2, 580, 90, 150, 200);
  total2 = "";
}

function dialogA3() {
  fill('#efeee8');
  noStroke();
  rect(770, 80, 340, 130);
  stroke(0);
  strokeWeight(2);

  wordbubbles(740, random(0, 30));

  fill(0);
  noStroke();
  textSize(16);
  textAlign(LEFT);
  textA3 = (inputA3.value());
  let txt = (textA3.toLowerCase());
  text(textA3, 780, 90, 150, 100);

  let word = inputA3.value();
  let str = word.toLowerCase();
  let splitString = splitTokens(str, [" ", "?", ".", "!"]);

  for (var i = 0; i < splitString.length; i++) {
    howFar = int(random(1, 20));
    total3 += " ";
    let theWord = findNearest(splitString[i], howFar);

    if (theWord == "") {
      total3 += splitString[i];
    } else {
      total3 += findNearest(splitString[i], howFar);
    }
  }
  
  howFar = int(random(3));
  if (total3 != "") {
    total3 += punctuation[howFar];
  }

  textB3 = (total3);
  fill(0);
  noStroke();
  textSize(16);
  textAlign(RIGHT);
  text(textB3, 950, 90, 150, 200);
  total3 = "";
}

function modelLoaded() {
  modelReady = true;
}

function findNearest(word, n) {
  if (modelReady) {
    let nearest = word2Vec.nearest(word, n);
    if (!nearest) {
      return word2Vec.getRandomWord();
    }
    let output = '';
    for (let i = nearest.length - 1; i < nearest.length; i++) {
      output += nearest[i].vector;
    }
    return output;
  }
  return 'Model has not loaded yet!';
}


function wordbubbles(bubx,emx){
  
  stroke(0);
  strokeWeight(2);

  scribble.roughness = 1;
  scribble.scribbleRoundedRect(110 + bubx, 125, 160, 100, 20);
  scribble.scribbleLine(60 + bubx + emx, 175, 120 + bubx - emx, 200);
  scribble.scribbleLine(90 + bubx + emx, 175, 120 + bubx - emx, 200);

  scribble.scribbleRoundedRect(290 + bubx, 125, 160, 100, 20);
  scribble.scribbleLine(290 + bubx - emx, 175, 290 + bubx - emx, 200);
  scribble.scribbleLine(320 + bubx - emx, 175, 290 + bubx - emx, 200);

  noStroke();
  fill('#efeee8');
  rect(67 + bubx + emx, 170, 19, 10,10);
  rect(294 + bubx - emx, 170, 19, 10,10);
}

function characters(){
  noStroke();
  fill('#efeee8');
  rect(32, 205, 335, 212); //clear characters
  rect(400, 205, 337, 212); 
  rect(770, 205, 340, 212);
  
  // let dotsLen = random(100, 270);
  // let dotsY = random(210,248);
  // let dotsLenY = random(100, 170);
  // let density  = random(3,10);
  // fill(random(0, 125), random(0, 125), random(0, 125), random(20, 255)); //draw textural dot pattern

  // for (var j = dotsY; j < dotsY + dotsLenY; j += density){
  //   for (var i = 37; i < 362; i += density){
  //     ellipse(i,j,3,3);
  //   }
  // }

  // dotsLen = random(100, 270);
  // dotsY = random(210, 248);
  // dotsLenY = random(100, 170);
  // density = random(3, 10);

  // for (var j = dotsY; j < dotsY + dotsLenY; j += density){
  //   for (var i = 48; i < 372; i += density){
  //     ellipse(i+360, j, 2, 2);
  //   }
  // }

  // dotsLen = random(100, 270);
  // dotsY = random(210, 248);
  // dotsLenY = random(100, 170);
  // density = random(3, 10);

  // for (var j = dotsY; j < dotsY + dotsLenY; j += density){
  //   for (var i = 48; i < 372; i += density){
  //     ellipse(i+730, j, 3, 3);
  //   }
  // }

  let xCoords = [40, 360, 360, 40];
  let yCoords = [227, 227, 410, 410];
  let gap = random(5,15);
  let angle = random(360);
  strokeWeight(random(8));
  stroke(random(100,255), random(100,255), random(100,255), random(50,255));
  scribble.scribbleFilling(xCoords, yCoords, gap, angle);

  xCoords = [410,730,730,410];
  yCoords = [227, 227, 410, 410];
  angle = random(360);
  scribble.scribbleFilling(xCoords, yCoords, gap, angle);

  xCoords = [775, 1100, 1100, 775];
  yCoords = [227, 227, 410, 410];
  angle = random(360);
  scribble.scribbleFilling(xCoords, yCoords, gap, angle);

  //character 1
  chaCol = random(100, 200);
  chaCol2 = random(0, 200);
  chaSize = random(-30, 30);
  off = 4;
  mvdwn = 5;

  noStroke();

  fill(chaCol2, chaCol - 50, chaCol - 50);
  scribble.scribbleEllipse(95, 335 + mvdwn, 80 + chaSize, 80 + chaSize);
  scribble.scribbleEllipse(125, 335 + mvdwn, 80 + chaSize, 80 + chaSize);
  scribble.scribbleEllipse(110, 285 + mvdwn, 80 + chaSize, 80 + chaSize);
  fill(chaCol2, chaCol-70, chaCol-70);
  scribble.scribbleEllipse(95 + (off * 2), 335 - (off * 2) + mvdwn, 80 + chaSize, 80 + chaSize);
  scribble.scribbleEllipse(125 + (off * 2), 335 - (off * 2) + mvdwn, 80 + chaSize, 80 + chaSize);
  scribble.scribbleEllipse(110 + (off * 2), 285 - (off * 2) + mvdwn, 80 + chaSize, 80 + chaSize);
  fill(chaCol2, chaCol, chaCol);
  scribble.scribbleEllipse(95 + off, 335 - off + mvdwn, 80 + chaSize, 80 + chaSize);
  scribble.scribbleEllipse(125 + off, 335 - off + mvdwn, 80 + chaSize, 80 + chaSize);
  scribble.scribbleEllipse(110 + off, 285 - off + mvdwn, 80 + chaSize, 80 + chaSize);
  fill(chaCol - 100, 0, chaCol - 100);
  eye = random(5, 25);
  scribble.scribbleEllipse(95, 275, eye, eye);
  scribble.scribbleEllipse(125, 275, eye, eye);
  scribble.scribbleEllipse(110, 295, eye * 1.5, eye / 2);  //mouth
  fill(255,255,255);
  ellipse(95+2, 275, eye/2, eye/2);   //whites of eyes
  ellipse(125+2, 275, eye/2, eye/2);
  fill(0,0,0);
  ellipse(95 + 2, 275, eye / 4, eye / 4);   //pupils
  ellipse(125 + 2, 275, eye / 4, eye / 4);

  //2
  cha2Size = random(-30, 30);
  cha2Col = random(100, 200);
  cha2Col2 = random(0, 200);
  fill(cha2Col, cha2Col, cha2Col2);
  scribble.scribbleEllipse(280, 335+mvdwn, 80 + cha2Size, 80 + cha2Size);
  scribble.scribbleEllipse(280, 285 + mvdwn, 80 + cha2Size, 80 + cha2Size);
  cha2Col = random(100, 200);
  fill(cha2Col - 70, cha2Col - 70, cha2Col2);
  scribble.scribbleEllipse(280 - (off * 2), 335 - (off * 2) + mvdwn, 80 + cha2Size, 80 + cha2Size);
  scribble.scribbleEllipse(280 - (off * 2), 285 - (off * 2) + mvdwn, 80 + cha2Size, 80 + cha2Size);
  fill(cha2Col - 50, cha2Col - 50, cha2Col2);
  scribble.scribbleEllipse(280 - off, 335 - off + mvdwn, 80 + cha2Size, 80 + cha2Size);
  scribble.scribbleEllipse(280 - off, 285 - off + mvdwn, 80 + cha2Size, 80 + cha2Size);
  fill(cha2Col-100, cha2Col-100, 0);
  eye2 = random(5, 25);
  scribble.scribbleEllipse(260, 275, eye2, eye2);
  scribble.scribbleEllipse(280, 275, eye2, eye2);
  scribble.scribbleEllipse(270, 295, eye2 * 1.5, eye2 / 2);
  fill(255, 255, 255);
  ellipse(260 - 2, 275, eye2 / 2, eye2 / 2);   //whites of eyes
  ellipse(280 - 2, 275, eye2 / 2, eye2 / 2);
  fill(0, 0, 0);
  ellipse(260 - 2 , 275, eye2 / 4, eye2 / 4);   //pupils
  ellipse(280 - 2, 275, eye2 / 4, eye2 / 4);

  //2nd frame
  //character 1
  let charx=390;
  chaSize +=35;
  cha2Size -= 10;
  eye +=15;

  fill(chaCol2, chaCol - 50, chaCol - 50);
  scribble.scribbleEllipse(95 + charx, 335 + mvdwn, 80 + chaSize, 80 + chaSize);
  scribble.scribbleEllipse(125 + charx, 335 + mvdwn, 80 + chaSize, 80 + chaSize);
  scribble.scribbleEllipse(110 + charx, 285 + mvdwn, 80 + chaSize, 80 + chaSize);
  fill(chaCol2, chaCol - 70, chaCol - 70);
  scribble.scribbleEllipse(95 + charx + (off * 2), 335 - (off * 2) + mvdwn, 80 + chaSize, 80 + chaSize);
  scribble.scribbleEllipse(125 + charx + (off * 2), 335 - (off * 2) + mvdwn, 80 + chaSize, 80 + chaSize);
  scribble.scribbleEllipse(110 + charx + (off * 2), 285 - (off * 2) + mvdwn, 80 + chaSize, 80 + chaSize);
  fill(chaCol2, chaCol, chaCol);
  scribble.scribbleEllipse(95 + charx + off, 335 - off + mvdwn, 80 + chaSize, 80 + chaSize);
  scribble.scribbleEllipse(125 + charx + off, 335 - off + mvdwn, 80 + chaSize, 80 + chaSize);
  scribble.scribbleEllipse(110 + charx + off, 285 - off + mvdwn, 80 + chaSize, 80 + chaSize);

  fill(chaCol - 100, 0, chaCol - 100);
  scribble.scribbleEllipse(95 + charx, 275, eye, eye);
  scribble.scribbleEllipse(125 + charx, 275, eye, eye);
  scribble.scribbleEllipse(110 + charx, 295 + 10, eye * 1.5, eye / 2); //mouth
  fill(255, 255, 255);
  ellipse(95 + charx + 2, 275, eye / 2, eye / 2); //whites of eyes
  ellipse(125 + charx + 2, 275, eye / 2, eye / 2);
  fill(0, 0, 0);
  ellipse(95 + charx + 2, 275, eye / 4, eye / 4); //pupils
  ellipse(125 + charx + 2, 275, eye / 4, eye / 4);

  //character 2
  fill(cha2Col, cha2Col, cha2Col2);
  scribble.scribbleEllipse(280 + charx, 335 + mvdwn, 80 + cha2Size, 80 + cha2Size);
  scribble.scribbleEllipse(280 + charx, 285 + mvdwn, 80 + cha2Size, 80 + cha2Size);

  fill(cha2Col - 70, cha2Col - 70, cha2Col2);
  scribble.scribbleEllipse(280 + charx - (off * 2), 335 - (off * 2) + mvdwn, 80 + cha2Size, 80 + cha2Size);
  scribble.scribbleEllipse(280 + charx - (off * 2), 285 - (off * 2) + mvdwn, 80 + cha2Size, 80 + cha2Size);

  fill(cha2Col - 50, cha2Col - 50, cha2Col2);
  scribble.scribbleEllipse(280 + charx - off, 335 - off + mvdwn, 80 + cha2Size, 80 + cha2Size);
  scribble.scribbleEllipse(280 + charx - off, 285 - off + mvdwn, 80 + cha2Size, 80 + cha2Size);

  fill(cha2Col - 100, cha2Col - 100, 0);
  scribble.scribbleEllipse(260 + charx, 275, eye2, eye2);
  scribble.scribbleEllipse(280 + charx, 275, eye2, eye2);
  scribble.scribbleEllipse(270 + charx, 295, eye2 * 1.5, eye2 / 2);
  fill(255, 255, 255);
  ellipse(260 + charx - 2, 275, eye2 / 2, eye2 / 2); //whites of eyes
  ellipse(280 + charx - 2, 275, eye2 / 2, eye2 / 2);
  fill(0, 0, 0);
  ellipse(260 + charx - 2, 275, eye2 / 4, eye2 / 4); //pupils
  ellipse(280 + charx - 2, 275, eye2 / 4, eye2 / 4);

  //3rd frame
  //character 1
  charx = 750;
  chaSize -= 45;
  cha2Size += 40;
  eye -= 15;
  eye2 += 15;

  fill(chaCol2, chaCol - 50, chaCol - 50);
  scribble.scribbleEllipse(95 + charx, 335 + mvdwn, 80 + chaSize, 80 + chaSize);
  scribble.scribbleEllipse(125 + charx, 335 + mvdwn, 80 + chaSize, 80 + chaSize);
  scribble.scribbleEllipse(110 + charx, 285 + mvdwn, 80 + chaSize, 80 + chaSize);
  fill(chaCol2, chaCol - 70, chaCol - 70);
  scribble.scribbleEllipse(95 + charx + (off * 2), 335 - (off * 2) + mvdwn, 80 + chaSize, 80 + chaSize);
  scribble.scribbleEllipse(125 + charx + (off * 2), 335 - (off * 2) + mvdwn, 80 + chaSize, 80 + chaSize);
  scribble.scribbleEllipse(110 + charx + (off * 2), 285 - (off * 2) + mvdwn, 80 + chaSize, 80 + chaSize);
  fill(chaCol2, chaCol, chaCol);
  scribble.scribbleEllipse(95 + charx + off, 335 - off + mvdwn, 80 + chaSize, 80 + chaSize);
  scribble.scribbleEllipse(125 + charx + off, 335 - off + mvdwn, 80 + chaSize, 80 + chaSize);
  scribble.scribbleEllipse(110 + charx + off, 285 - off + mvdwn, 80 + chaSize, 80 + chaSize);

  fill(chaCol - 100, 0, chaCol - 100);
  scribble.scribbleEllipse(95 + charx, 275, eye, eye);
  scribble.scribbleEllipse(125 + charx, 275, eye, eye);
  scribble.scribbleEllipse(110 + charx, 295, eye * 1.5, eye / 2); //mouth
  fill(255, 255, 255);
  ellipse(95 + charx + 2, 275, eye / 2, eye / 2); //whites of eyes
  ellipse(125 + charx + 2, 275, eye / 2, eye / 2);
  fill(0, 0, 0);
  ellipse(95 + charx + 2, 275, eye / 4, eye / 4); //pupils
  ellipse(125 + charx + 2, 275, eye / 4, eye / 4);

  //character 2
  fill(cha2Col, cha2Col, cha2Col2);
  scribble.scribbleEllipse(280 + charx, 335 + mvdwn, 80 + cha2Size, 80 + cha2Size);
  scribble.scribbleEllipse(280 + charx, 285 + mvdwn, 80 + cha2Size, 80 + cha2Size);

  fill(cha2Col - 70, cha2Col - 70, cha2Col2);
  scribble.scribbleEllipse(280 + charx - (off * 2), 335 - (off * 2) + mvdwn, 80 + cha2Size, 80 + cha2Size);
  scribble.scribbleEllipse(280 + charx - (off * 2), 285 - (off * 2) + mvdwn, 80 + cha2Size, 80 + cha2Size);

  fill(cha2Col - 50, cha2Col - 50, cha2Col2);
  scribble.scribbleEllipse(280 + charx - off, 335 - off + mvdwn, 80 + cha2Size, 80 + cha2Size);
  scribble.scribbleEllipse(280 + charx - off, 285 - off + mvdwn, 80 + cha2Size, 80 + cha2Size);

  fill(cha2Col - 100, cha2Col - 100, 0);
  scribble.scribbleEllipse(260 + charx, 275, eye2, eye2);
  scribble.scribbleEllipse(280 + charx, 275, eye2, eye2);
  scribble.scribbleEllipse(270 + charx, 295+10, eye2 * 1.5, eye2 / 2);
  fill(255, 255, 255);
  ellipse(260 + charx - 2, 275, eye2 / 2, eye2 / 2); //whites of eyes
  ellipse(280 + charx - 2, 275, eye2 / 2, eye2 / 2);
  fill(0, 0, 0);
  ellipse(260 + charx - 2, 275, eye2 / 4, eye2 / 4); //pupils
  ellipse(280 + charx - 2, 275, eye2 / 4, eye2 / 4);
}

function saveComic(){
  saveCanvas();
}