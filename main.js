function setup() {
    video = createCapture(VIDEO);
    video.size(600,400);

    canvas = createCanvas(375,375);
    canvas.position(700,195);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Intialized!');
}

function draw() {
    background('#f0e38e');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}


