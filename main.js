https://teachablemachine.withgoogle.com/models/52v5JTvk2/

Webcam.set({
    Width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

webcam.attach( '#camera' );

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document,getElementById("result").innerHTML = '<img id="captured_image" src="'+data_url+'"/>';
    });
}

console.log('ml5 version:', ml5,version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/52v5JTvk2/model,json',modelLoaded);
