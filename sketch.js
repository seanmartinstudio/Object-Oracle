let mobilenet
let video
let label = ''
let confidence = ''
let percent

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
  percent = results[0].confidence
  mobilenet.predict(gotResults)
}

function setup() {
  createCanvas(840, 680)
  video = createCapture(VIDEO)
  video.hide()
  background(0)
  mobilenet = ml5.imageClassifier('MobileNet', video, modelReady)
}

function draw() {
  background(255)
  image(video, 100, 100)
  fill(0)
  textSize(32)
  text(label, width/4, height - 30)
  // text(percent, width/4, height)
}


//To Do
//Make a button to save screen shot image(lower right side)
//Make h1 in top left corner, same font as Lakers Stats
//Make Lakers font global
//Center video window
//Create UI wait card while model is being called
//Add icon and link to my github
//Query GPT for web app title


//Have video on center of screen but not in canvas
//Have canvas size of screen and have the labels writing at all times
