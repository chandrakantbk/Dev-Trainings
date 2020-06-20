var video;
document.addEventListener("DOMContentLoaded", () => {
    video = document.getElementsByTagName('video')[0];
    startDetection();
})


function startDetection() {
    navigator.getUserMedia({ video: {} }, (stream) => {
        video.srcObject = stream;
    }, (err) => {
        console.log(err);
    })
}