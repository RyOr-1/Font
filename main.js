function preload() {}

function setup() {
    canvas = createCanvas(800, 580)
    video = createCapture(VIDEO)

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log('PoseNet Loaded!')
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
    }
}