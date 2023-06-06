let mobilenet
let video
let label = ''

const modelReady = () => {
  console.log("Model is ready!!!")
  mobilenet.predict(gotResults)
}

const gotResults = (error, results) => {
  if(error) {
    console.error(error)
  } else {
    console.log(results)
  }
  label = results[0].label
  mobilenet.predict(gotResults)
}

function setup() {
  createCanvas(840, 680)
  background(0)
  video = createCapture(VIDEO)
  video.hide()
  // console.log("Video, ", video)
  // video.position(windowWidth * .3, windowHeight/5)
  mobilenet = ml5.imageClassifier('MobileNet', video, modelReady)
}

function draw() {
  image(video, 100, 100)
  // fill(0)
  // textSize(32)
  // text(label, 10, height - 100)
}


//Have video on center of screen but not in canvas
//Have canvas size of screen and have the labels writing at all times
