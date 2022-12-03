// [ iteration 1]:

let img;
let img2;
let img3;
let img4;

function preload() {
  img = loadImage("../img/texas-bluebonnet.png");
  img2 = loadImage("../img/indian-blanket.png");
  img3 = loadImage("../img/black-eyed-susan.png");
  img4 = loadImage("../img/indian-paintbrush.png");
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  background(255);
  colorMode(RGB);
  imageMode(CORNER);

  // CORNER;
  //stroke(255,100);
  //  noCursor();

  // frameRate(15);
}

/*
 for this one:
 create circles that rotate
 */

var x = 100;
function draw() {
  // background(255, 255, 255, 2);

  x = x - 1;
  translate(windowWidth / 2, windowHeight / 2);
  rotate((PI / 20) * x);
  if (x % 2 == 0) {
    image(img, 5 * x, 5 * x, img.width / 8, img.height / 8);
  }
  if (x % 3 == 0) {
    image(img2, 2 * x, 2 * x, img2.width / 8, img2.height / 8);
  }
  if (x % 4 == 0) {
    image(img3, 4 * x, 4 * x, img3.width / 8, img3.height / 8);
  }
  if (x % 2 == 0) {
    if (x > 0) {
      image(img4, 2 * x, 2 * x, img4.width / 4, img4.height / 4);
    }
  }
  if (x < -500) {
    noLoop();
  }
}
