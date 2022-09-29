nosex = 0;
nosey = 0;
diffrence = 0;
leftwristX = 0;
rightwristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550,550);
        canvas.position(560,150);
        
        poseNet = ml5.poseNet(video, modelLoaded);
        poseNet.on('pose', gotPoses);
        
}

function modelLoaded() {
    console.log('PoseNet Is Initialised');
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log("noseX = " + nosex + "noseY = " + nosey);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        diffrence = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "diffrence = " + diffrence);


    }
}

function draw() 
{
    background('#FFFFFF');

    document.getElementById("text").innerHTML = "Width And Height of Text Will Be = " + diffrence + "px";
    textSize(diffrence);
    fill('#800080');
    text('THARU', 50, 300);
}