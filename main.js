going_bad =" ";
goodbyes=" ";

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

function setup(){
    canvas  = createCanvas(500 , 425);
    canvas.center();
    

    video.size(500,425);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function preload(){
    going_bad= loadSound("going_bad.mp3");
    goodbyes= loadSound("goodbyes.mp3");
}

function modelLoaded(){
    console.log("Posenet is initialised");
}

function draw(){
    image(video, 0, 0, 500, 400);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        leftWristX= results[0].pose.leftWrist.x;
        leftWristY= results[0].pose.lefttWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

        rightWristX= results[0].pose.rightWrist.x;
        rightWristY= results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
    }
}

