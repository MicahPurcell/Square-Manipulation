function setup(){
    canvas= createCanvas(500,500)
    canvas.position(700,100)
    video= createCapture(VIDEO)
    video.position(50,100)
    poseNet= ml5.poseNet(video,modelLoaded)
    poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log("Model has loaded.")

}

function gotPoses(results){

    if (results.length > 0) {
        console.log(results)
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose ="+ noseX+" noseY = " + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);


    }
}

noseX=0
noseY=0
difference = 0;
rightWristX = 0;
leftWristX = 0;
function draw(){
    background('cornflowerblue')
    fill('coral')
    stroke('whitesmoke')
    square(noseX, noseY, difference);
    document.getElementById("width").innerHTML = "Width & Height of square is "+ difference+" pixels."
}
