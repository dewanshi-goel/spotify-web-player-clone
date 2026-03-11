const songs = [
{
title: "Song 1",
artist: "Artist 1",
file: "songs/song1.mp3"
},
{
title: "Song 2",
artist: "Artist 2",
file: "songs/song2.mp3"
},
{
title: "Song 3",
artist: "Artist 3",
file: "songs/song3.mp3"
}
];

const audioPlayer = document.getElementById("audio-player");

const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {

card.addEventListener("click", () => {

audioPlayer.src = songs[index].file;

audioPlayer.play();
playBtn.src = "pause_icon.png";
isPlaying = true;

});

});

//connecting playericon3 to pause/play
const playBtn = document.getElementById("play-btn");

let isPlaying = false;

playBtn.addEventListener("click", () => {

if(isPlaying){

audioPlayer.pause();
playBtn.src = "player_icon3.png";   // show play icon
isPlaying = false;

}else{

audioPlayer.play();
playBtn.src = "pause_icon.png";     // show pause icon
isPlaying = true;

}

});

//updating progress bar
const progressBar = document.querySelector(".progress-bar");
audioPlayer.addEventListener("timeupdate", () => {
let progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
progressBar.value = progress;

currentTimeEl.textContent = formatTime(audioPlayer.currentTime); //to update the time while song plays
});
//to drag the bar
progressBar.addEventListener("input", () => {
audioPlayer.currentTime = (progressBar.value / 100) * audioPlayer.duration;
});

//making volume slider workable
const volumeBar = document.querySelector(".controls-bar");
audioPlayer.volume = 0.5;
volumeBar.value = 50;
volumeBar.addEventListener("input", () => {
audioPlayer.volume = volumeBar.value / 100;
});

//updating song data with each song
const songTitle = document.getElementById("song-title");
const songArtist = document.getElementById("song-artist");
cards.forEach((card, index) => {

card.addEventListener("click", () => {

audioPlayer.src = songs[index].file;

songTitle.textContent = songs[index].title;
songArtist.textContent = songs[index].artist;

audioPlayer.play();

});

});

//adding time counter
const currentTimeEl = document.querySelector(".curr-time");
const totalTimeEl = document.querySelector(".tot-time");
function formatTime(seconds){

let minutes = Math.floor(seconds / 60);
let secs = Math.floor(seconds % 60);

if(secs < 10){
secs = "0" + secs;
}

return minutes + ":" + secs;

}
audioPlayer.addEventListener("loadedmetadata", () => {

totalTimeEl.textContent = formatTime(audioPlayer.duration);

});