// [ iteration 2]:
let img;
let img2;
let img3;
let img4;
var imageData;

function preload() {
  img1 = loadImage("../img/lance-leaved-coreopsis.png");
  img2 = loadImage("../img/babys-breath.png");
  img3 = loadImage("../img/bachelor-button.png");
  img4 = loadImage("../img/black-eyed-susan.png");
  img5 = loadImage("../img/blue-flax.png");
  img6 = loadImage("../img/candy-tuft.png");
  img7 = loadImage("../img/clasping-coneflower.png");
  img8 = loadImage("../img/evening-primrose.png");
  img9 = loadImage("../img/indian-blanket.png");
  img10 = loadImage("../img/indian-paintbrush.png");
  img11 = loadImage("../img/showy-primrose.png");
  img12 = loadImage("../img/texas-bluebonnet.png");
  img13 = loadImage("../img/white-yarrow.png");
  imageData = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13];
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  background(255);
  colorMode(RGB);
  imageMode(CENTER);

  // CORNER;
  //stroke(255,100);
  //  noCursor();

  // frameRate(20);
}

/*
 for this one:
 generative field of flowers
 */

var i = 0;
function draw() {
  background(255, 255, 255, 1);
  selectedImageIndex = floor(random(0, imageData.length - 1));
  selectedImage = imageData[selectedImageIndex];
  x = random(0, windowWidth);
  y = random(0, windowHeight);

  factor = random(3, 7);

  image(selectedImage, x, y, selectedImage.width / factor, selectedImage.height / factor);
  i += 1;
  if (i > 150) {
    noLoop();
  }
}
