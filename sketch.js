let mobilenet
let parrot

const modelReady = () => console.log("Model is ready!")

const imageReady = () => image(parrot, 0, 0, width, height)

function setup() {
  createCanvas(640, 480);

  //Creates DOM element of img
  parrot = createImg("/Rose_Ringed_Parrot.jpg", imageReady)
  parrot.hide()
  background(0)
  mobilenet = ml5.imageClassifier('MobileNet', modelReady)
}

// function draw() {
//   background(220);
// }
