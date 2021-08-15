Webcam.set({
width:350,height:300,
Image_format:'png',
png_quality:90
});
var Jio = document.getElementById("camera");
Webcam.attach("#camera");  
function take_phota(){
Webcam.snap(function (data_uri){
document.getElementById("result").innerHTML = '<img id="Fevicol_glue" src="'+ data_uri + '"/>';    
});
}
console.log('ml5 version:' , ml5.version);
var CPU = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/hLGIF28sH/model.json',modelloaded);
function modelloaded(){
console.log("modelloaded");
}