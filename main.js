function setup()
{
video = createCapture(VIDEO);
video.size(550, 500);

canvas = createCanvas(550, 450);
canvas.position(560, 130);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("Posenet is initialised");
}