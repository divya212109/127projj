song = "";

function preload()
{
    song = loadSound("music.mp3");
}

function play()
{
    song.play();
}


function setup() {
    
    canvas = createCanvas (600, 500);
    canvas.cennter();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}