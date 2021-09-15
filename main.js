noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;
function setup() 
{
    video = createCapture(VIDEO);
    video.size(550,500);

  canvas = createCanvas(550,500);
  canvas.position(560,150); 

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}
function modelLoaded() 
{
   console.log("poseNet is Initialized"); 
}
function draw()
{
background('#969A97');
document.getElementById("font_size").innerHTML = "width and height of the text = "+difference+"px";
textSize(difference);
fill('#de6262 50%, #ffb88c 50%');
text(hi, noseX, noseY);
stroke('#000000');

}
function gotPoses(results)
 {
   if (results.length > 0)
    {
     console.log(results);
     noseX = results[0].pose.nose.x;
     noseY = results[0].pose.nose.y;
     console.log("nosex = "+noseX+"nosey = "+noseY);

     leftWristX = results[0].pose.leftWrist.x;
     rightWristX = results[0].pose.rightWrist.x;
     difference = floor(leftWristX - rightWristX);
     console.log("left wrist = "+leftWristX+"right wrist = "+rightWristX+"difference = "+difference);
     
   }

}
