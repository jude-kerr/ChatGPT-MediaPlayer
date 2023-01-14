let player = document.getElementById("player");
let playButton = document.getElementById("play-button");
let stopButton = document.getElementById("stop-button");
let volume = document.getElementById("volume");

playButton.addEventListener("click", function() {
    player.play();
});

stopButton.addEventListener("click", function() {
    player.pause();
    player.currentTime = 0;
});

volume.addEventListener("change", function() {
    player.volume = volume.value;
});
