let mobilenet
let parrot

const modelReady = () => {
  console.log("Model is ready!")
  mobilenet.predict(parrot, gotResults)
}

const gotResults = (error, results) => {
  if(error) {
    console.error(error)
  } else {
    console.log(results)
  }
  let label = results[0].label
  let probability = results[0].confidence
  fill(0)
  textSize(64)
  createP(label)
  createP(probability)
}


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
