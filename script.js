console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Snap Out Of It - Arctic Monkeys", filePath: "1.mp3", coverPath: "am.jpg"},
    {songName: "Come As You Are - Nirvana", filePath: "2.mp3", coverPath: "nir.jfif"},
    {songName: "High And Dry - Radiohead", filePath: "3.mp3", coverPath: "HD.jpg"},
    {songName: "Don't Look Back In Anger - Oasis", filePath: "4.mp3", coverPath: "oasis.jpg"},
    {songName: "Good Riddance - Green Day", filePath: "5.mp3", coverPath: "gd.jpg"},
    {songName: "Reptilia - The Strokes", filePath: "6.mp3", coverPath: "rep.jpg"},
    {songName: "Whatever - Oasis", filePath: "7.mp3", coverPath: "wtt.jpg"},
    {songName: "Scar Tissue - Red Hot Chilli Peppers", filePath: "8.mp3", coverPath: "scar.jfif"},
    {songName: "1979 - The Smashing Pumpkins", filePath: "9.mp3", coverPath: "1979.jfif"},    
]
songItems.forEach((element,i)=>{
    
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;


})
//audioElement.play()
//handle play/pause
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
    }
    else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity = 0;
    }

})
//listen to events
audioElement.addEventListener('timeupdate', ()=>{
    //seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})
document.getElementById('next').addEventListener('click' , ()=>{
    if(songIndex>=8){
    songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click' , ()=>{
    if(songIndex<=0){
    songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})