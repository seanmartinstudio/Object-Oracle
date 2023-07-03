let mobilenet
let myFont
let video
let canvas
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
  percent = results[0].confidence
  mobilenet.predict(gotResults)
}

function preload() {
  myFont = loadFont('/fonts/Roboto-Medium.ttf');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight)
  video = createCapture(VIDEO)
  video.hide()
  background(0)
  mobilenet = ml5.imageClassifier('MobileNet', video, modelReady)
}

function draw() {
  background(255)
  image(video, windowWidth/2 - 320, windowHeight/2 - 400)
  fill(0)
  textFont(myFont)
  textSize(32)
  text(label, windowWidth/2 - 320, windowHeight/2 + 125)
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
