noseX = 0;
noseY = 0;
difference = 0;

rightwristX = 0;
leftwristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 500);
    canvas.position(560, 160);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
    

}

function modelLoaded() {
    console.log('Pose net is initialized');
}

function gotPoses(results) {
     if (results.length > 0) {
         console.log(results);
         noseX = results[0].pose.nose.x;
         noseY = results[0].pose.nose.y;
         console.log("NoseX = " + noseX + "Nose Y =" + noseY);
         leftwristX = results[0].pose.leftWrist.x;
         rightwristX = results[0].pose.rightWrist.x;
         difference = floor(leftwristX - rightwristX);
         console.log("LeftwristX = " + leftwristX + "RightwristX = " + rightwristX + "Difference = "  + difference);
         


     }
}

function draw() {
    background('#abfbff');
    document.getElementById("square_side").innerHTML = "Width and Height of A Square will be = " + difference + "px";
fill('#038201');
stroke('#a60000');
square(noseX, noseY, difference);
}
